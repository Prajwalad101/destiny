import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { BiTime } from 'react-icons/bi';
import { classNames } from 'src/utils/tailwind';

interface TimeDropdownProps {
  list: string[];
  selected: string;
  onSelect: () => void;
}

export default function TimeDropdown({
  list,
  selected,
  onSelect,
}: TimeDropdownProps) {
  return (
    <div className="w-32 font-rubik">
      <Listbox value={selected} onChange={onSelect}>
        {({ open }) => (
          <div className="relative">
            <Listbox.Button
              className={classNames(
                open ? 'ring-[3px] ring-blue-400' : 'ring-2 ring-gray-300',
                'relative w-full rounded-sm px-5 py-2 text-left'
              )}
            >
              <span className="block truncate capitalize text-gray-400">
                {selected}
              </span>
              <span className="absolute right-0 top-1/2 -translate-y-1/2 pr-2 text-gray-600">
                <BiTime size={19} />
              </span>
            </Listbox.Button>

            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 -ml-[2px] max-h-60 w-[calc(100%+4px)] overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5">
                {list.map((item, index) => (
                  <Listbox.Option
                    key={index}
                    value={item}
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
                          {item}
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
