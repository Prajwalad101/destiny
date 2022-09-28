import { convertTime12to24, timeToDate } from 'utils/date';

interface OpenOrClosedProps {
  openingTime: string;
  closingTime: string;
}

export default function OpenOrClosed({
  openingTime,
  closingTime,
}: OpenOrClosedProps) {
  const currentDate = new Date();

  // convert time to date for comparison
  const openingDate = timeToDate(convertTime12to24(openingTime));
  const closingDate = timeToDate(convertTime12to24(closingTime));

  const isOpen = openingDate < currentDate && closingDate > currentDate;

  // add opening hours with hours remaining in the current day
  const hoursTillOpen = 24 - currentDate.getHours() + openingDate.getHours();

  return (
    <div>
      <span className="inline-block">
        {isOpen ? 'Open right now' : 'Closed'}
      </span>
      {!isOpen && (
        <span className="inline-block text-gray-700 ml-5">
          (Opens after {hoursTillOpen} hours)
        </span>
      )}
    </div>
  );
}
