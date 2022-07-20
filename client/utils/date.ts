export function dhm(ms: number) {
  const days = Math.floor(ms / (24 * 60 * 60 * 1000));
  const daysms = ms % (24 * 60 * 60 * 1000);
  const hours = Math.floor(daysms / (60 * 60 * 1000));
  const hoursms = ms % (60 * 60 * 1000);
  const minutes = Math.floor(hoursms / (60 * 1000));
  const minutesms = ms % (60 * 1000);
  const sec = Math.floor(minutesms / 1000);

  return { days, hours, minutes, sec };
}

export function getRelativeDate(date: string) {
  const formatter = new Intl.RelativeTimeFormat('en-US', {
    numeric: 'auto',
  });

  const diff: number = new Date().getTime() - new Date(date).getTime(); // difference in milliseconds
  const { days, hours, minutes, sec } = dhm(diff);

  let result = '';

  if (days !== 0) {
    result = formatter.format(-days, 'day');
  } else if (hours !== 0) {
    result = formatter.format(-hours, 'hour');
  } else if (minutes !== 0) {
    result = formatter.format(-minutes, 'minute');
  } else if (sec !== 0) {
    result = formatter.format(-sec, 'second');
  }

  return result;
}
