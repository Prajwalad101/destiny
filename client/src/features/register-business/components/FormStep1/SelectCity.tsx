import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { BsCheck2 } from 'react-icons/bs';
import { classNames } from 'src/utils/tailwind';
import cities from './data/cities';

interface SelectCityProps {
  onChange: (_value: typeof cities[number]) => void;
  className?: string;
}

export default function SelectCity({
  onChange,
  className = '',
}: SelectCityProps) {
  return (
    <Listbox
      as="div"
      className={className}
      name="city"
      onChange={onChange}
      defaultValue={cities[0]}
    >
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
                <span className="block truncate capitalize text-gray-600">
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
              {cities.map((city, index) => (
                <Listbox.Option
                  key={index}
                  value={city}
                  className={({ active }) =>
                    classNames(
                      active ? 'bg-gray-200 text-gray-600' : '',
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
                        {city}
                      </span>
                      {selected && (
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 pr-3">
                          <BsCheck2
                            size={20}
                            className={classNames(
                              active ? 'text-gray-400' : 'text-black'
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
  );
}
