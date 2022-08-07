import { Listbox, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { BsCheck2 } from 'react-icons/bs';
import { HiOutlineSelector } from 'react-icons/hi';
import { classNames } from '../../../../../utils/css';

interface MyListBoxProps {
  name?: string;
  list: { id?: number; name: string }[];
  width?: number;
  children?: (
    _name: string,
    _active: boolean,
    _selected: boolean
  ) => JSX.Element;
}

function MyListBox({ width, name, list, children }: MyListBoxProps) {
  const [selectedItem, setSelectedItem] = useState(list[0]);

  return (
    <div className="w-72 font-rubik" style={{ width: width }}>
      <Listbox value={selectedItem} onChange={setSelectedItem} name={name}>
        <div className="relative">
          <Listbox.Button className="relative w-full rounded-md px-5 py-2 text-left ring-1 ring-black/40">
            <span className="block truncate capitalize">
              {selectedItem.name}
            </span>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 pr-2">
              <HiOutlineSelector size={20} className="text-gray-400" />
            </span>
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
                  key={listItem.id || index}
                  value={listItem}
                  className={({ active }) =>
                    classNames(
                      active ? 'bg-blue-500 text-white' : '',
                      'relative cursor-default py-2 pl-5'
                    )
                  }
                >
                  {({ active, selected }) =>
                    // implement render props to make listbox accept custom listbox items
                    children ? (
                      children(listItem.name, selected, active)
                    ) : (
                      <>
                        <span
                          className={classNames(
                            selected ? 'font-medium' : 'font-normal',
                            'capitalize'
                          )}
                        >
                          {listItem.name}
                        </span>
                        {selected && (
                          <span className="absolute right-0 top-1/2 -translate-y-1/2 pr-3">
                            <BsCheck2
                              size={20}
                              className={classNames(
                                active ? 'text-white' : 'text-blue-700'
                              )}
                            />
                          </span>
                        )}
                      </>
                    )
                  }
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default MyListBox;
