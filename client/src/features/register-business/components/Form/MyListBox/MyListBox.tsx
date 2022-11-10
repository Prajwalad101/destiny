import { FormInputs } from '@features/register-business/layouts/FormContainer';
import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { BsCheck2 } from 'react-icons/bs';
import { classNames } from 'src/utils/tailwind';

interface MyListBoxProps {
  list: { name: string }[];
  setValue: UseFormSetValue<FormInputs>;
  name: keyof FormInputs;
  width?: number;
  button?: JSX.Element;
}

function MyListBox({
  list,
  name,
  setValue,
  width = 250, // default width
  button,
}: MyListBoxProps) {
  return (
    <div className="font-rubik" style={{ width: width }}>
      <Listbox
        onChange={(value) => setValue(name, value.name)}
        name={name}
        defaultValue={list[0]}
      >
        {({ open }) => (
          <div className="relative">
            {button ? (
              button
            ) : (
              <Listbox.Button
                className={classNames(
                  open ? 'ring-[3px] ring-blue-400' : 'ring-2 ring-gray-400/60',
                  'relative w-full rounded-md px-5 py-2.5 text-left'
                )}
              >
                {({ value }) => (
                  <>
                    <span className="block truncate capitalize text-gray-400">
                      {open ? 'Choose a city' : value.name}
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
            )}

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
                          {listItem.name}
                        </span>
                        {selected && width > 100 && (
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

export default MyListBox;
