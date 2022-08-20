import { formData, MyListBox } from '@features/create-business';
import { Listbox } from '@headlessui/react';
import { useState } from 'react';
import { HiOutlineSelector } from 'react-icons/hi';

const { hours, minutes, timeOfDay } = formData;

interface SelectTimeProps {
  inputName: string;
}

function SelectTime({ inputName }: SelectTimeProps) {
  return (
    <div className="flex items-center font-rubik">
      <SelectHour inputName={inputName} />
      <span className="px-1 text-2xl">:</span>
      <SelectMinute inputName={inputName} />
      <SelectTimeOfDay inputName={inputName} />
    </div>
  );
}

interface SelectorProps {
  inputName: string;
}

const SelectHour = ({ inputName }: SelectorProps) => {
  const [selectedHour, setSelectedHour] = useState(hours[0]);

  const hourInputName = inputName.concat('.hour');
  return (
    <>
      <MyListBox
        list={hours}
        listState={{ selected: selectedHour, setSelected: setSelectedHour }}
        inputName={hourInputName}
        width={90}
        button={
          <Listbox.Button className="relative w-full rounded-l-md border-[1px] border-gray-400 px-5 py-2 text-left">
            <>
              <span className="block truncate capitalize">
                {selectedHour.name}
              </span>
              <span className="absolute right-0 top-1/2 -translate-y-1/2 pr-2">
                <HiOutlineSelector size={17} className="text-gray-400" />
              </span>
            </>
          </Listbox.Button>
        }
      />
    </>
  );
};

const SelectMinute = ({ inputName }: SelectorProps) => {
  const [selectedMinute, setSelectedMinute] = useState(minutes[0]);

  const minuteInputName = inputName.concat('.minute');

  return (
    <MyListBox
      list={minutes}
      listState={{ selected: selectedMinute, setSelected: setSelectedMinute }}
      inputName={minuteInputName}
      width={90}
      button={
        <Listbox.Button className="relative w-full border-[1px] border-gray-400 px-5 py-2 text-left">
          <>
            <span className="block truncate capitalize">
              {selectedMinute.name}
            </span>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 pr-2">
              <HiOutlineSelector size={17} className="text-gray-400" />
            </span>
          </>
        </Listbox.Button>
      }
    />
  );
};

const SelectTimeOfDay = ({ inputName }: SelectorProps) => {
  const [selectedTimeOfDay, setSelectedTimeOfDay] = useState(timeOfDay[0]);

  const timeOfDayInputName = inputName.concat('.timeOfDay');

  return (
    <MyListBox
      list={timeOfDay}
      listState={{
        selected: selectedTimeOfDay,
        setSelected: setSelectedTimeOfDay,
      }}
      inputName={timeOfDayInputName}
      width={70}
      button={
        <Listbox.Button className="relative w-full rounded-r-md border-[1px] border-l-0 border-gray-400 px-5 py-2 text-left">
          <span className="block truncate capitalize">
            {selectedTimeOfDay.name}
          </span>
        </Listbox.Button>
      }
    />
  );
};
export default SelectTime;
