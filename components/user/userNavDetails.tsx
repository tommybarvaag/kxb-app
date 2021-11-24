import { Box, Flex, Text } from "@/components/ui";
import { useSalary } from "@/utils/salaryProvider";
import { useSession } from "next-auth/client";
import * as React from "react";
import UserAvatarPopover from "./userAvatarPopover";

const UserNavDetails = () => {
  const [session] = useSession();
  const { nextPayDayStatistics } = useSalary();

  if (!session) {
    return null;
  }

  return (
    <>
      <Flex
        alignItems="end"
        css={{
          ml: "$3",
          "@bp1": {
            ml: "$5"
          }
        }}
      >
        <Box>
          <Text size="1" color="textDark">
            Next paycheck
          </Text>
          <Text size="1">{nextPayDayStatistics.payDay}</Text>
          <Text size="2" fontWeight="bold" color="green">
            {nextPayDayStatistics.netFormatted}
          </Text>
          {nextPayDayStatistics.halfTax ? (
            <Text size="1" color="textDark">
              Half tax
            </Text>
          ) : null}
        </Box>
      </Flex>
      <Flex
        alignItems="center"
        css={{
          ml: "$3",
          "@bp1": {
            ml: "$5"
          }
        }}
      >
        <UserAvatarPopover />
      </Flex>
    </>
  );
};

export default UserNavDetails;
