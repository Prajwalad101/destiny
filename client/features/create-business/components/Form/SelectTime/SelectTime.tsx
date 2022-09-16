import { MyListBox } from '@features/create-business/components';
import { hours, minutes, timeOfDay } from '@features/create-business/data';
import { Listbox } from '@headlessui/react';
import { useField } from 'formik';
import { useEffect, useState } from 'react';
import { HiOutlineSelector } from 'react-icons/hi';

interface SelectTimeProps {
  inputName: string;
}

function SelectTime({ inputName }: SelectTimeProps) {
  const [selectedHour, setSelectedHour] = useState(hours[0]);
  const [selectedMinute, setSelectedMinute] = useState(minutes[0]);
  const [selectedTimeOfDay, setSelectedTimeOfDay] = useState(timeOfDay[0]);

  const [_field, _meta, helpers] = useField(inputName);

  useEffect(() => {
    const timeStr = `${selectedHour.name}:${selectedMinute.name} ${selectedTimeOfDay.name}`;
    helpers.setValue(timeStr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedHour, selectedMinute, selectedTimeOfDay]);

  return (
    <div className="flex items-center font-rubik">
      <SelectHour selected={selectedHour} setSelected={setSelectedHour} />
      <span className="px-1 text-2xl">:</span>
      <SelectMinute selected={selectedMinute} setSelected={setSelectedMinute} />
      <SelectTimeOfDay
        selected={selectedTimeOfDay}
        setSelected={setSelectedTimeOfDay}
      />
    </div>
  );
}

interface SelectorProps {
  selected: { name: string };
  setSelected: (_selected: { name: string }) => void;
}

const SelectHour = ({ selected, setSelected }: SelectorProps) => {
  return (
    <>
      <MyListBox
        list={hours}
        listState={{ selected, setSelected }}
        width={90}
        button={
          <Listbox.Button className="relative w-full rounded-l-md border-[1px] border-gray-400 px-5 py-2 text-left">
            <>
              <span className="block truncate capitalize">{selected.name}</span>
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

const SelectMinute = ({ selected, setSelected }: SelectorProps) => {
  return (
    <MyListBox
      list={minutes}
      listState={{ selected, setSelected }}
      width={90}
      button={
        <Listbox.Button className="relative w-full border-[1px] border-gray-400 px-5 py-2 text-left">
          <>
            <span className="block truncate capitalize">{selected.name}</span>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 pr-2">
              <HiOutlineSelector size={17} className="text-gray-400" />
            </span>
          </>
        </Listbox.Button>
      }
    />
  );
};

const SelectTimeOfDay = ({ selected, setSelected }: SelectorProps) => {
  return (
    <MyListBox
      list={timeOfDay}
      listState={{ selected, setSelected }}
      width={70}
      button={
        <Listbox.Button className="relative w-full rounded-r-md border-[1px] border-l-0 border-gray-400 px-5 py-2 text-left">
          <span className="block truncate capitalize">{selected.name}</span>
        </Listbox.Button>
      }
    />
  );
};
export default SelectTime;
