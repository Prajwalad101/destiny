import { FormInputs } from '@features/register-business/layouts/FormContainer';
import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import {
  Control,
  UseFormRegister,
  UseFormSetValue,
  useFormState,
} from 'react-hook-form';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { BsCheck2 } from 'react-icons/bs';
import { classNames } from 'src/utils/tailwind';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import MyLabel from '../MyLabel/MyLabel';

interface AddressInputProps {
  register: UseFormRegister<FormInputs>;
  setValue: UseFormSetValue<FormInputs>;
  control: Control<FormInputs>;
  className?: string;
}

export default function AddressInput({
  register,
  setValue,
  control,
}: AddressInputProps) {
  const { errors } = useFormState({
    control,
    name: ['address', 'city'],
  });

  return (
    <div className="mb-20 grid-cols-2 items-start gap-5 md:mb-28 md:grid lg:grid-cols-[2fr_3fr] lg:gap-24">
      <MyLabel
        name="address"
        sublabel="Provide the address, city and the zip code of your business"
      />
      <div>
        <input
          {...register('address', {
            required: 'Address is required',
            maxLength: { value: 50, message: 'Address is too long' },
            minLength: { value: 5, message: 'Address is too short' },
          })}
          type="text"
          id="address"
          className={classNames(
            errors.address ? 'mb-2 ring-red-500' : 'mb-4 ring-blue-600',
            'w-full rounded-md border-2 border-gray-300 px-4 py-3 outline-none ring-offset-2 transition-all focus:ring-[3px]'
          )}
          placeholder="eg: Kapan, Baluwakhani"
        />
        <ErrorMessage
          className="mb-3"
          error={errors.address}
          validate={['required', 'maxLength', 'minLength']}
        />
        <MyListBox
          onChange={(value) => setValue('city', value)}
          list={cities}
          className="w-40"
        />
      </div>
    </div>
  );
}

interface MyListBoxProps {
  list: string[];
  onChange: (_value: string) => void;
  className?: string;
}

function MyListBox({ list, onChange, className = '' }: MyListBoxProps) {
  return (
    <div className={classNames(className)}>
      <Listbox onChange={onChange} defaultValue={list[0]}>
        {({ open }) => (
          <div className="relative">
            <Listbox.Button
              className={classNames(
                open ? 'ring-[3px] ring-blue-400' : 'ring-2 ring-gray-400/60',
                'relative w-full rounded-md px-5 py-2.5 text-left'
              )}
            >
              {({ value }) => (
                <>
                  <span className="block truncate capitalize text-gray-400">
                    {value}
                  </span>
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 pr-2">
                    {open ? (
                      <BiChevronUp size={20} />
                    ) : (
                      <BiChevronDown size={20} />
                    )}
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
                        active ? 'bg-blue-400 text-white' : '',
                        'relative cursor-default py-2 pl-5'
                      )
                    }
                  >
                    {({ active, selected }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? 'font-medium' : 'font-normal',
                            'capitalize'
                          )}
                        >
                          {listItem}
                        </span>
                        {selected && (
                          <span className="absolute right-0 top-1/2 -translate-y-1/2 pr-3">
                            <BsCheck2
                              size={20}
                              className={classNames(
                                active ? 'text-white' : 'text-blue-300'
                              )}
                            />
                          </span>
                        )}
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

// ----- DATA -------

const cities = ['Kathmandu', 'Pokhara', 'Butwal', 'Lalitpur', 'Bhaktapur'];
