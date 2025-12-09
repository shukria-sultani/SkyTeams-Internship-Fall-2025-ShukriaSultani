//Author: Shukria Sultani
//Date: 11/18/2025
//problem: Convert total seconds into hours, minutes, and seconds

//Solution: To convert a total number of seconds to a formatted time, I need to calculate the hours, minutes, and remaining seconds. First, I cn calculate the total hours by dividing the input seconds by 3600 (the number of seconds in one hour) and taking the integer part. Next, I can calculate the remaining minutes by taking the remainder of the total seconds divided by 3600, then dividing that result by 60 (the number of seconds in one minute), again taking the integer part. Finally, to find the remaining seconds, I can use the remainder of the total seconds divided by 60.

export const convertSecond = (seconds) => {
  if (seconds < 0) {
    return "Seconds cannot be negative";
  }
  if (typeof seconds != "number") {
    return "Invalid input";
  }

  let hour = parseInt(seconds / 3600);
  let minute = parseInt((seconds % 3600) / 60);
  let second = parseInt(seconds % 60);

  return `${hour} hr, ${minute} min, ${second} sec`;
};

console.log(convertSecond(6400));
