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
  return (
    <div className={classNames(className, 'child-notlast:mb-7')}>
      {weeks.map((week, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <p className="w-28">{week}</p>
            <TimeDropdown
              list={time}
              selected={time[0]}
              onSelect={() => {
                return;
              }}
            />

            <span className="text-gray-700">to</span>
            <TimeDropdown
              list={time}
              selected={time[0]}
              onSelect={() => {
                return;
              }}
            />
          </div>
          <div>
            <input
              type="checkbox"
              className="inp-cbx"
              style={{ display: 'none' }}
              checked={false}
            />
            <label className="cbx">
              <span>
                <svg width="12px" height="10px" viewBox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>
              <span className="capitalize text-gray-700">Closed</span>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}
