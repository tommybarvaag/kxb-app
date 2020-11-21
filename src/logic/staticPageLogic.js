import { getMonthNames } from "./dateLogic";
import { removeDuplicates } from "./objectLogic";

const getThisYearAndTwoYearsIntoTheFuture = () => {
  let year = new Date().getFullYear();
  return [year, year + 1, year + 2];
};

export const getHomePageProps = async (props = {}) => {
  return {
    ...props,
    months: getMonthNames(),
    years: getThisYearAndTwoYearsIntoTheFuture()
  };
};

export const getYearPageProps = async (props = {}) => {
  return {
    ...props,
    months: getMonthNames(),
    years: getThisYearAndTwoYearsIntoTheFuture()
  };
};

export const getYearPageStaticPaths = async () => {
  const years = getThisYearAndTwoYearsIntoTheFuture();

  return removeDuplicates(years)?.reduce((result, year) => {
    result.push(`/year/${year}`);
    return result;
  }, []);
};

export const getMonthPageStaticPaths = async () => {
  const years = getThisYearAndTwoYearsIntoTheFuture();
  const months = getMonthNames();

  return removeDuplicates(years)?.reduce((result, year) => {
    months.forEach(month => result.push(`/year/${year}/${month.toLowerCase()}`));

    return result;
  }, []);
};
