// Author: Shukria Sultani
// Date: 11/19/2025
// Problem: Month name & number of days using switch-case

export const getMonthDescription = (monthNo) => {
  if (typeof monthNo !== "number") {
    return "Input must be a number";
  }
  if (monthNo < 1 || monthNo > 12) {
    return "Input must be a number between 1-12";
  }
  switch (monthNo) {
    case 1:
      return "January, 31 days";
    case 2:
      return "February, 28 or 29 days";
    case 3:
      return "March, 31 days";
    case 4:
      return "April, 30 days";
    case 5:
      return "May, 31 days";
    case 6:
      return "June, 30 days";
    case 7:
      return "July, 31 days";
    case 8:
      return "August, 31 days";
    case 9:
      return "September, 30 days";
    case 10:
      return "October, 31 days";
    case 11:
      return "November, 30 days";
    case 12:
      return "December, 31 days";

  }
};
