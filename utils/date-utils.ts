import { MONTH_NAMES, MONTH_VALUES } from "@/constants/date-constants";
import { getLocale, getWeekStarsOn } from "@/utils/calendar-utils";
import { range } from "@/utils/common-utils";
import {
  format,
  getDate,
  getHours,
  getMinutes,
  getMonth,
  getSeconds,
  getWeek as getWeekDateFns,
  getYear
} from "date-fns";

export const getFormattedDate = (date: Date, locale?: string) =>
  format(date, "dd-MM-yyyy", { locale: getLocale(locale) });

export const getFormattedShortDate = (date: Date, locale?: string) =>
  format(date, "EE d. MMM yyyy", { locale: getLocale(locale) });

export const getFormattedLongDate = (date: Date, locale?: string) =>
  format(date, "EEEE d. MMMM yyyy", { locale: getLocale(locale) });

export const getFormattedDay = (date: Date, locale?: string) =>
  format(date, "EEEE", { locale: getLocale(locale) });

export const getFormattedMonth = (date: Date, locale?: string) =>
  format(date, "MMMM", { locale: getLocale(locale) });

export const getFormattedDayAndMonth = (date: Date, locale?: string) =>
  format(date, "dd.MM", { locale: getLocale(locale) });

export const getFormattedMicrosoftSqlDate = (date: Date, locale?: string) =>
  format(date, "yyyy-MM-dd hh-mm-ss", { locale: getLocale(locale) });

export const getFormattedTime = (date: Date, locale?: string): string =>
  format(date, "HH:mm:ss", { locale: getLocale(locale) });

export const getFormattedDateAndTime = (date: Date, locale?: string) =>
  `${getFormattedDate(date, locale)} ${getFormattedTime(date, locale)}`;

export const getHumanizedDateFromNow = (date: Date) => {
  const now = new Date();

  // if the date is today, we want to show X hours ago
  if (
    getDate(date) === getDate(now) &&
    getMonth(date) === getMonth(now) &&
    getYear(date) === getYear(now)
  ) {
    const hours = getHours(now) - getHours(date);
    const minutes = getMinutes(now) - getMinutes(date);
    const seconds = getSeconds(now) - getSeconds(date);

    if (hours > 0) {
      return `${hours}h`;
    } else if (minutes > 0) {
      return `${minutes}m`;
    } else {
      return `${seconds}s`;
    }
  }

  // if the date is within the current month, we want to show X days ago
  if (getMonth(date) === getMonth(now) && getYear(date) === getYear(now)) {
    const days = getDate(now) - getDate(date);
    return `${days}d`;
  }

  // if the date is within the current year, we want to show X months ago
  if (getYear(date) === getYear(now)) {
    const months = getMonth(now) - getMonth(date);
    return `${months}m`;
  }

  // if the date is not within the current year, we want to show X years ago
  const years = getYear(now) - getYear(date);
  return `${years}y`;
};

export const getFormattedIsoDateAndTime = (date: Date, locale?: string) =>
  format(date, "yyyy-MM-dd'T'HH:mm:ssXX", { locale: getLocale(locale) });

export const getWeek = (date: Date, locale?: string) =>
  getWeekDateFns(date, {
    locale: getLocale(locale),
    weekStartsOn: getWeekStarsOn(locale)
  });
export const getDayName = (date: Date, locale?: string) =>
  format(date, "EE", { locale: getLocale(locale) });

export const getMonthFromName = (monthName: string) => {
  switch (monthName?.toUpperCase()) {
    case MONTH_NAMES.JANUARY:
      return MONTH_VALUES.JANUARY;
    case MONTH_NAMES.FEBRUARY:
      return MONTH_VALUES.FEBRUARY;
    case MONTH_NAMES.MARCH:
      return MONTH_VALUES.MARCH;
    case MONTH_NAMES.APRIL:
      return MONTH_VALUES.APRIL;
    case MONTH_NAMES.MAY:
      return MONTH_VALUES.MAY;
    case MONTH_NAMES.JUNE:
      return MONTH_VALUES.JUNE;
    case MONTH_NAMES.JULY:
      return MONTH_VALUES.JULY;
    case MONTH_NAMES.AUGUST:
      return MONTH_VALUES.AUGUST;
    case MONTH_NAMES.SEPTEMBER:
      return MONTH_VALUES.SEPTEMBER;
    case MONTH_NAMES.OCTOBER:
      return MONTH_VALUES.OCTOBER;
    case MONTH_NAMES.NOVEMBER:
      return MONTH_VALUES.NOVEMBER;
    case MONTH_NAMES.DECEMBER:
      return MONTH_VALUES.DECEMBER;
    default:
      return 0;
  }
};

export const getMonthNames = () => {
  return Object.values(MONTH_NAMES);
};

export const getThisYearAndTwoYearsIntoTheFuture = () => {
  let year = new Date().getFullYear();
  return range(year, year + 8);
};

export const extractDate = (input: Date) => {
  const month = getMonth(input) + 1;
  const date = getDate(input);
  const hours = getHours(input);
  const minutes = getMinutes(input);
  const seconds = getSeconds(input);

  return {
    year: getYear(input).toString(),
    month: month < 10 ? `0${month}` : month.toString(),
    day: date < 10 ? `0${date}` : date.toString(),
    hour: hours < 10 ? `0${hours}` : hours.toString(),
    minute: minutes < 10 ? `0${minutes}` : minutes.toString(),
    second: seconds < 10 ? `0${seconds}` : seconds.toString()
  };
};

export const getHourAndMinutes = (date: Date) => {
  const extractedDate = extractDate(date);

  return `${extractedDate.hour}:${extractedDate.minute}`;
};

export const getMySQLDate = (date?: Date) => {
  return (date ?? new Date()).toISOString().slice(0, 19).replace("T", " ");
};
