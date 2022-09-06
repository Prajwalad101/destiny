/**
 * checks if the current time falls between two time intervals (start and end)
 * @param startTime start time in 24hr format eg: {"9:15", "20:00"}
 * @param endTime end time in 24hr format
 * @returns true if current time falls between open and close time, else false
 */
export function checkInterval(startTime: string, endTime: string) {
  const currentDate = new Date();

  const startDate = timeToDate(startTime.split(':'));
  const endDate = timeToDate(endTime.split(':'));

  const valid = startDate < currentDate && endDate > currentDate;

  return valid;
}

/**
 * sets the hours and minutes to new date object
 * @param time array containing hour and minute eg: ["5", "10"] - 5hr 10min
 * @returns the new date with the hours and minutes set
 */
const timeToDate = (time: string[]) => {
  const date = new Date();
  date.setHours(Number(time[0]));
  date.setMinutes(Number(time[1]));

  return date;
};
