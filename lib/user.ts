import "server-only";

import { getCalendarMonth, getCalendarYear } from "@/utils/calendar-utils";
import { getUserEarningsDetails } from "@/utils/user-utils";
import { cache } from "react";
import { queryBuilder } from "./planetscale";
import prisma from "./prisma";
import { query } from "./query";

const getUserWithWorkDayDetails = cache(async (activeDirectoryId: string) => {
  const user = queryBuilder
    .selectFrom("user")
    .where("user.activeDirectoryId", "=", activeDirectoryId)
    .selectAll("user")
    .executeTakeFirst();

  const userWorkDayDetail = queryBuilder
    .selectFrom("user")
    .leftJoin("user_work_day_detail", "user_work_day_detail.userId", "user.id")
    .where("user.activeDirectoryId", "=", activeDirectoryId)
    .selectAll("user_work_day_detail")
    .execute();

  const [userResult, userWorkDayDetailResult] = await query([user, userWorkDayDetail]);

  return {
    ...userResult.data,
    workDayDetails: userWorkDayDetailResult.data
  };
});

const getUserEarnings = cache(async (activeDirectoryId: string, activeDate?: Date) => {
  const user = await getUserWithWorkDayDetails(activeDirectoryId);

  if (!user) {
    return undefined;
  }

  const now = new Date();

  const year = getCalendarYear(now.getFullYear());

  const currentYear = new Date().getFullYear();

  const lastYear = getCalendarYear(currentYear - 1);
  const nextYear = getCalendarYear(currentYear + 1);

  const currentMonth = activeDate ? activeDate.getMonth() : now.getMonth();

  const month = getCalendarMonth(now);

  const activeMonth = activeDate ? getCalendarMonth(activeDate) : month;

  const lastMonth = getCalendarMonth(new Date(currentYear, currentMonth - 1));

  const nextMonth = getCalendarMonth(new Date(currentYear, currentMonth + 1));

  return getUserEarningsDetails(
    {
      commission: user.commission ?? 0,
      hourlyRate: user.hourlyRate ?? 0,
      tax: user.tax ?? 0,
      workHours: user.workHours ?? 0
    },
    year,
    nextYear,
    activeMonth,
    month,
    lastMonth,
    nextMonth,
    (user.workDayDetails ?? []).map(x => ({
      extraHours: x.extraHours ?? 0,
      nonCommissionedHours: x.nonCommissionedHours ?? 0,
      date: x.date ?? new Date().toISOString(),
      id: x.id ?? 0,
      sickDay: x.sickDay ?? false,
      userId: x.userId ?? 0
    }))
  );
});

const getUserAvatar = cache(async (activeDirectoryId: string) => {
  const user = await queryBuilder
    .selectFrom("user")
    .where("user.activeDirectoryId", "=", activeDirectoryId)
    .select("user.refreshToken")
    .executeTakeFirst();

  if (!user?.refreshToken) {
    return undefined;
  }

  const url = `https://login.microsoftonline.com/${process.env.NEXTAUTH_AZURE_AD_TENANT_ID}/oauth2/v2.0/token`;

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "POST",
    body: new URLSearchParams({
      client_id: process.env.NEXTAUTH_AZURE_AD_CLIENT_ID,
      client_secret: process.env.NEXTAUTH_AZURE_AD_SECRET,
      grant_type: "refresh_token",
      refresh_token: user.refreshToken,
      scope: "offline_access openid User.Read"
    })
  });

  const refreshedTokens = await response.json();

  if (!response.ok) {
    return undefined;
  }

  await prisma.user.update({
    data: {
      refreshToken: refreshedTokens.refresh_token,
      accessTokenExpires: Date.now() + refreshedTokens?.ext_expires_in * 1000,
      updated: new Date()
    },
    where: {
      activeDirectoryId: activeDirectoryId
    }
  });

  const avatarResponse = await fetch(`https://graph.microsoft.com/v1.0/me/photos/120x120/$value`, {
    headers: {
      Authorization: `Bearer ${refreshedTokens.access_token}`
    }
  });

  if (!avatarResponse.ok) {
    return undefined;
  }

  const pictureBuffer = await avatarResponse.arrayBuffer();

  return `data:image/jpeg;base64,${btoa(
    String.fromCharCode.apply(null, new Uint8Array(pictureBuffer))
  )}`;
});

export { getUserEarnings, getUserAvatar };