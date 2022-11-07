import { convertTime12to24, timeToDate } from 'src/utils/date';

interface OpenOrClosedProps {
  openingTime: string;
  closingTime: string;
  className?: string;
}

export default function OpenOrClosed({
  openingTime,
  closingTime,
  className = '',
}: OpenOrClosedProps) {
  const currentDate = new Date();

  // convert time to date for comparison
  const openingDate = timeToDate(convertTime12to24(openingTime));
  const closingDate = timeToDate(convertTime12to24(closingTime));

  const isOpen = openingDate < currentDate && closingDate > currentDate;

  // add opening hours with hours remaining in the current day
  const hoursTillOpen = 24 - currentDate.getHours() + openingDate.getHours();

  return (
    <div className={className}>
      <span className="inline-block font-medium">
        {isOpen ? 'Open' : 'Closed'}
      </span>
      {!isOpen && (
        <span className="ml-5 inline-block text-gray-700">
          (Opens after {hoursTillOpen} hours)
        </span>
      )}
    </div>
  );
}
