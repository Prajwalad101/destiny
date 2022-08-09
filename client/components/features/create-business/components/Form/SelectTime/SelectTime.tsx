import { Listbox } from '@headlessui/react';
import { HiOutlineSelector } from 'react-icons/hi';
import { classNames } from '../../../../../../utils/css';
import MyListBox from '../MyListBox/MyListBox';

type list = { id: number; name: string }[];

interface SelectTimeProps {
  hours: list;
  minutes: list;
  timeOfDay: list;
}

function SelectTime({ hours, minutes, timeOfDay }: SelectTimeProps) {
  return (
    <div className="flex items-center font-rubik">
      <SelectHour list={hours} />
      <span className="px-1 text-2xl">:</span>
      <SelectMinute list={minutes} />
      <SelectTimeOfDay list={timeOfDay} />
    </div>
  );
}

interface SelectorProps {
  list: { id: number; name: string }[];
}

const SelectHour = ({ list }: SelectorProps) => {
  return (
    <>
      <MyListBox
        list={list}
        width={90}
        button={(selectedHour) => (
          <Listbox.Button className="relative w-full rounded-l-md border-[1px] px-5 py-2 text-left">
            <>
              <span className="block truncate capitalize">{selectedHour}</span>
              <span className="absolute right-0 top-1/2 -translate-y-1/2 pr-2">
                <HiOutlineSelector size={17} className="text-gray-400" />
              </span>
            </>
          </Listbox.Button>
        )}
      />
    </>
  );
};

const SelectMinute = ({ list }: SelectorProps) => {
  return (
    <MyListBox
      list={list}
      width={90}
      button={(selectedMinute) => (
        <Listbox.Button className="relative w-full border-[1px] px-5 py-2 text-left">
          <>
            <span className="block truncate capitalize">{selectedMinute}</span>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 pr-2">
              <HiOutlineSelector size={17} className="text-gray-400" />
            </span>
          </>
        </Listbox.Button>
      )}
    />
  );
};

const SelectTimeOfDay = ({ list }: SelectorProps) => {
  return (
    <MyListBox
      list={list}
      width={70}
      button={(selectedTimeOfDay) => (
        <Listbox.Button className="relative w-full rounded-r-md border-[1px] border-l-0 px-5 py-2 text-left">
          <span className="block truncate capitalize">{selectedTimeOfDay}</span>
        </Listbox.Button>
      )}
    >
      {(name, selected) => (
        <span
          className={classNames(
            selected ? 'font-medium' : 'font-normal',
            'capitalize'
          )}
        >
          {name}
        </span>
      )}
    </MyListBox>
  );
};
export default SelectTime;
