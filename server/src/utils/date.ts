/**
 *
 * @param timeStr Time string in 24 hr format eg: 20:00
 * @returns object with the extracted hour and min value eg {20, 00}
 */
const splitTime = (timeStr: string) => {
  const time = timeStr.split(':'); // "9:15" => ["9", "15"]
  const hour = Number(time[0]);
  const min = Number(time[1]);

  return { hour, min };
};

/**
 * @param timeStr Time string in 24 hr format eg: 20:00
 * @returns Date object with the hour and minute set
 */
export function setDate(timeStr: string) {
  const time = splitTime(timeStr);

  const date = new Date();

  date.setHours(time.hour);
  date.setMinutes(time.min);

  return date;
}
