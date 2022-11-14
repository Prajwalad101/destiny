import {
  defaultFormValues,
  FormInputs,
} from '@features/register-business/layouts/FormContainer';
import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import {
  Control,
  useFieldArray,
  UseFormSetValue,
  useFormState,
} from 'react-hook-form';
import { BiTime } from 'react-icons/bi';
import { classNames } from 'src/utils/tailwind';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import MyLabel from '../MyLabel/MyLabel';
import { Day, hours, TimeString } from './data';

interface WorkingHoursProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<FormInputs, any>;
  setValue: UseFormSetValue<FormInputs>;
  className?: string;
}

const defaultValues = [...defaultFormValues['workingDays']];
type WorkingDay = FormInputs['workingDays'][number];

export default function WorkingHours({ control, setValue }: WorkingHoursProps) {
  // * LEGACY CODE: only for reference
  // const handleClick = (
  //   time: TimeString,
  //   day: Day,
  //   startOrEnd: 'startTime' | 'endTime'
  // ) => {
  //   const requiredDay = value.find((workingDay) => workingDay.day === day);
  //   const filteredDays = value.filter((workingDay) => workingDay.day !== day);

  //   if (requiredDay) {
  //     if (startOrEnd === 'startTime') {
  //       setValue('workingDays', [
  //         ...filteredDays,
  //         { ...requiredDay, startTime: time },
  //       ]);
  //     } else {
  //       setValue('workingDays', [
  //         ...filteredDays,
  //         { ...requiredDay, endTime: time },
  //       ]);
  //     }
  //   }
  // };

  // const handleCheck = (day: Day) => {
  //   if (isChecked(day)) {
  //     const newDays = value.filter((value) => value.day !== day);
  //     setValue('workingDays', newDays);
  //   } else {
  //     setValue('workingDays', [
  //       ...value,
  //       { day, startTime: '9:00 AM', endTime: '5:00 PM' },
  //     ]);
  //   }
  // };

  // const isChecked = (day: Day): boolean => {
  //   const workingDay = value.find((value) => value.day === day);
  //   if (workingDay) {
  //     return true;
  //   }
  //   return false;
  // };

  // const [values, setValues] = useState();

  // useEffect(() => {
  //   setValues()
  // }, [])

  const { errors } = useFormState({
    name: 'workingDays',
    control,
  });

  const { fields, insert, remove } = useFieldArray({
    control,
    name: 'workingDays',
    rules: {
      validate: (value) =>
        value.length > 0 || 'Please specify at least one working day',
    },
  });

  const handleClick = ({
    index,
    value,
    field,
  }: {
    index: number;
    field: keyof WorkingDay;
    value: WorkingDay[keyof WorkingDay];
  }) => {
    setValue(`workingDays.${index}.${field}`, value);
  };

  const isChecked = (day: Day): boolean => {
    return fields.some((field) => field.day === day);
  };

  const handleCheck = (index: number, day: WorkingDay['day']) => {
    // get the correct index of the dynamic fields array
    const fieldIndex = fields.findIndex((field) => field.day === day);

    if (isChecked(day)) {
      remove(fieldIndex);
    } else {
      insert(fieldIndex, { day, startTime: '9:00 AM', endTime: '5:00 PM' });
    }
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
              onClick={() => handleCheck(index, value.day)}
              className="flex w-32 cursor-pointer gap-5 hover:text-gray-600"
            >
              <Checkbox isChecked={isChecked(value.day)} />
              <p>{value?.day}</p>
            </div>
            <div className="flex flex-wrap  items-center gap-6">
              <div className="flex items-center gap-3">
                <span className="w-10 text-gray-700 xs:hidden">From</span>
                <SelectTime
                  defaultValue={value.startTime}
                  list={hours}
                  onClick={(value) =>
                    handleClick({ index, field: 'startTime', value })
                  }
                  disabled={!isChecked(value.day)}
                />
              </div>
              <span className="hidden text-gray-700 xs:inline">to</span>
              <div className="flex items-center gap-3">
                <span className="w-10 text-gray-700 xs:hidden">To</span>
                <SelectTime
                  defaultValue={value.endTime}
                  list={hours}
                  onClick={(value) =>
                    handleClick({ index, field: 'endTime', value })
                  }
                  disabled={!isChecked(value.day)}
                />
              </div>
            </div>
          </div>
        ))}
        <ErrorMessage
          className="mt-12"
          error={errors.workingDays && errors?.workingDays?.root}
          validate={['validate']}
        />
      </div>
    </div>
  );
}

interface SelectTimeProps {
  defaultValue: TimeString | undefined;
  onClick: (_value: TimeString) => void;
  list: TimeString[];
  disabled: boolean;
}

function SelectTime({
  list,
  disabled,
  defaultValue,
  onClick,
}: SelectTimeProps) {
  return (
    <div className="w-32 font-rubik">
      <Listbox
        disabled={disabled}
        defaultValue={defaultValue}
        onChange={onClick}
      >
        {({ open }) => (
          <div className="relative">
            <Listbox.Button
              className={classNames(
                open ? 'ring-[3px] ring-blue-400' : 'border-2 border-gray-300',
                'relative w-full rounded-md px-5 py-2 text-left'
              )}
            >
              {({ value }) => (
                <>
                  <span
                    className={classNames(
                      'block truncate capitalize',
                      disabled ? 'text-gray-400' : 'text-gray-600'
                    )}
                  >
                    {value}
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
              )}
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
