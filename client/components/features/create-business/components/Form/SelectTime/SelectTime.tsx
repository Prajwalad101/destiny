import { Listbox } from '@headlessui/react';
import { HiOutlineSelector } from 'react-icons/hi';
import MyListBox from '../MyListBox/MyListBox';

type list = { id: number; name: string }[];

interface SelectTimeProps {
  hours: list;
  minutes: list;
  timeOfDay: list;
  inputName: string;
}

function SelectTime({ hours, minutes, timeOfDay, inputName }: SelectTimeProps) {
  return (
    <div className="flex items-center font-rubik">
      <SelectHour list={hours} inputName={inputName} />
      <span className="px-1 text-2xl">:</span>
      <SelectMinute list={minutes} inputName={inputName} />
      <SelectTimeOfDay list={timeOfDay} inputName={inputName} />
    </div>
  );
}

interface SelectorProps {
  list: { id: number; name: string }[];
  inputName: string;
}

const SelectHour = ({ list, inputName }: SelectorProps) => {
  const hourInputName = inputName.concat('.hour');
  return (
    <>
      <MyListBox
        list={list}
        inputName={hourInputName}
        width={90}
        button={(selectedHour) => (
          <Listbox.Button className="relative w-full rounded-l-md border-[1px] border-gray-400 px-5 py-2 text-left">
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

const SelectMinute = ({ list, inputName }: SelectorProps) => {
  const minuteInputName = inputName.concat('.minute');

  return (
    <MyListBox
      list={list}
      inputName={minuteInputName}
      width={90}
      button={(selectedMinute) => (
        <Listbox.Button className="relative w-full border-[1px] border-gray-400 px-5 py-2 text-left">
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

const SelectTimeOfDay = ({ list, inputName }: SelectorProps) => {
  const timeOfDayInputName = inputName.concat('.timeOfDay');

  return (
    <MyListBox
      list={list}
      inputName={timeOfDayInputName}
      width={70}
      button={(selectedTimeOfDay) => (
        <Listbox.Button className="relative w-full rounded-r-md border-[1px] border-l-0 border-gray-400 px-5 py-2 text-left">
          <span className="block truncate capitalize">{selectedTimeOfDay}</span>
        </Listbox.Button>
      )}
    />
  );
};
export default SelectTime;
