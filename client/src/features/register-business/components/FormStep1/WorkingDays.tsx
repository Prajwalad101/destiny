/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  defaultFormValues,
  FormInputs,
} from '@features/register-business/layouts/FormContainer';
import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FieldError } from 'react-hook-form';
import { BiTime } from 'react-icons/bi';
import { classNames } from 'src/utils/tailwind';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import MyLabel from '../MyLabel/MyLabel';
import { Day, hours, TimeString } from './data';

type WorkingDay = FormInputs['workingDays'][number];

interface HandleClickProps {
  day: WorkingDay['day'];
  field: keyof WorkingDay;
  value: WorkingDay[keyof WorkingDay];
}

const defaultValues = [...defaultFormValues['workingDays']];

interface WorkingDaysProps {
  error?: FieldError;
  list: FormInputs['workingDays'];
  onChange: (..._event: any[]) => void;
  className?: string;
}

export default function WorkingDays({
  onChange,
  list,
  error,
}: WorkingDaysProps) {
  const handleClick = ({ day, value, field }: HandleClickProps) => {
    const item = list.find((listItem) => listItem.day === day);
    const remainingItems = list.filter((listItem) => listItem.day !== day);

    if (item) {
      if (field === 'startTime') {
        onChange([...remainingItems, { ...item, startTime: value }]);
      } else if (field === 'endTime') {
        onChange([...remainingItems, { ...item, endTime: value }]);
      }
    }
  };

  const handleCheck = (day: WorkingDay['day']) => {
    const newList = list.filter((listItem) => listItem.day !== day);

    if (isChecked(day)) {
      const newList = list.filter((listItem) => listItem.day !== day);
      onChange(newList);
    } else {
      onChange([...newList, { day, startTime: '9:00 AM', endTime: '5:00 PM' }]);
    }
  };

  const isChecked = (day: Day): boolean => {
    return list.some((listItem) => listItem.day === day);
  };

  const getWorkingDay = (day: WorkingDay['day']) => {
    return list.find((listItem) => listItem.day === day);
  };

  return (
    <div className="grid-cols-2 items-start gap-5 lg:grid lg:grid-cols-[2fr_3fr] lg:gap-24">
      <MyLabel
        className="!mb-10"
        name="working hours"
        sublabel="Choose the operating hours of your business"
      />
      <div className="max-w-xl grow child-notlast:mb-7">
        {defaultValues.map((value, index) => (
          <div
            key={index}
            className="flex flex-wrap items-center gap-x-6 gap-y-4"
          >
            <div
              onClick={() => handleCheck(value.day)}
              className="flex w-32 cursor-pointer gap-5 hover:text-gray-600"
            >
              <Checkbox isChecked={isChecked(value.day)} />
              <p>{value?.day}</p>
            </div>
            <div className="flex flex-wrap  items-center gap-6">
              <div className="flex items-center gap-3">
                <span className="w-10 text-gray-700 xs:hidden">From</span>
                <SelectTime
                  selected={getWorkingDay(value.day)?.startTime || '9:00 AM'}
                  list={hours}
                  onChange={(selected) =>
                    handleClick({
                      day: value.day,
                      value: selected,
                      field: 'startTime',
                    })
                  }
                  disabled={!isChecked(value.day)}
                />
              </div>
              <span className="hidden text-gray-700 xs:inline">to</span>
              <div className="flex items-center gap-3">
                <span className="w-10 text-gray-700 xs:hidden">To</span>
                <SelectTime
                  selected={getWorkingDay(value.day)?.endTime || '5:00 PM'}
                  list={hours}
                  onChange={(selected) =>
                    handleClick({
                      day: value.day,
                      value: selected,
                      field: 'endTime',
                    })
                  }
                  disabled={!isChecked(value.day)}
                />
              </div>
            </div>
          </div>
        ))}
        <ErrorMessage className="mt-12" error={error} validate={['validate']} />
      </div>
    </div>
  );
}

interface SelectTimeProps {
  selected: TimeString | undefined;
  onChange: (_value: TimeString) => void;
  list: TimeString[];
  disabled: boolean;
}

function SelectTime({ list, disabled, selected, onChange }: SelectTimeProps) {
  return (
    <div className="w-32 font-rubik">
      <Listbox disabled={disabled} value={selected} onChange={onChange}>
        {({ open }) => (
          <div className="relative">
            <Listbox.Button
              className={classNames(
                open ? 'ring-[3px] ring-blue-400' : 'border-2 border-gray-300',
                'relative w-full rounded-md px-5 py-2 text-left'
              )}
            >
              <>
                <span
                  className={classNames(
                    'block truncate capitalize',
                    disabled ? 'text-gray-400' : 'text-gray-600'
                  )}
                >
                  {selected}
                </span>

                <span
                  className={classNames(
                    disabled ? 'text-gray-400' : 'text-gray-600',
                    'absolute right-0 top-1/2 -translate-y-1/2 pr-2'
                  )}
                >
                  <BiTime size={19} />
                </span>
              </>
            </Listbox.Button>

            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5">
                {list.map((listItem, index) => (
                  <Listbox.Option
                    key={index}
                    value={listItem}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-gray-100' : '',
                        'relative cursor-default py-1.5 pl-4'
                      )
                    }
                  >
                    {({ selected }) => (
                      <>
                        <p
                          className={classNames(
                            selected
                              ? 'font-medium'
                              : 'font-normal text-gray-600',
                            'rounded-md  capitalize'
                          )}
                        >
                          {listItem}
                        </p>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>
    </div>
  );
}

function Checkbox({ isChecked }: { isChecked: boolean }) {
  return (
    <div>
      <input
        type="checkbox"
        className="inp-cbx"
        style={{ display: 'none' }}
        checked={isChecked}
        readOnly
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
}
