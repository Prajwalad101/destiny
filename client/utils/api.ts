// MANIPULATES DATA RECEIVED FROM AN API

/**
 *
 * @param currentDate the current Date
 * @param time the time to set the date to
 * @returns the new date object
 */
export const setTime = (currentDate: Date, time: string) => {
  const date = new Date(currentDate);
  date.setHours(Number(time.split(':')[0]));
  date.setMinutes(Number(time.split(':')[1]));

  return date;
};

/**
 *
 * @param object
 * opening and closing time in string(24hr format)
 * eg: {"9:15", "20:00"}
 * @returns true if current time falls between open and close time, else false
 */
export function checkIsOpen({ open, close }: { open: string; close: string }) {
  const openingTime = open;
  const closingTime = close;

  const currentDate = new Date();

  const startDate = setTime(currentDate, openingTime);
  const endDate = setTime(currentDate, closingTime);

  const valid = startDate < currentDate && endDate > currentDate;

  return valid;
}
