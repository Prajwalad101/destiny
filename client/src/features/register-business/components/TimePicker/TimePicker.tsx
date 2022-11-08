import { classNames } from 'src/utils/tailwind';
import time from './data';
import TimeDropdown from './TimeDropdown';

const weeks = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

interface TimePickerProps {
  className?: string;
}

export default function TimePicker({ className = '' }: TimePickerProps) {
  const checkbox = (
    <div>
      <input
        type="checkbox"
        className="inp-cbx"
        style={{ display: 'none' }}
        checked={true}
      />
      <label className="cbx">
        <span>
          <svg width="12px" height="10px" viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
      </label>
    </div>
  );

  return (
    <div className={classNames(className, 'child-notlast:mb-7')}>
      {weeks.map((week, index) => (
        <div
          key={index}
          className="flex flex-wrap items-center gap-x-6 gap-y-4"
        >
          <div className="flex w-32 gap-5">
            {checkbox}
            <p>{week}</p>
          </div>
          <div className="flex flex-wrap  items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="w-10 text-gray-700 xs:hidden">From</span>
              <TimeDropdown
                list={time}
                selected={time[0]}
                onSelect={() => {
                  return;
                }}
              />
            </div>
            <span className="hidden text-gray-700 xs:inline">to</span>
            <div className="flex items-center gap-3">
              <span className="w-10 text-gray-700 xs:hidden">To</span>
              <TimeDropdown
                list={time}
                selected={time[0]}
                onSelect={() => {
                  return;
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
