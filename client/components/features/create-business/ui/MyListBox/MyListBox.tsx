import { Listbox, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { BsCheck2 } from 'react-icons/bs';
import { HiOutlineSelector } from 'react-icons/hi';
import { classNames } from '../../../../../utils/css';

interface MyListBoxProps {
  list: { id: number; name: string }[];
}

function MyListBox({ list }: MyListBoxProps) {
  const [selectedItem, setSelectedItem] = useState(list[0]);

  return (
    <div className="w-72 font-rubik">
      <Listbox value={selectedItem} onChange={setSelectedItem}>
        <Listbox.Button className="relative w-full rounded-md border-[1px] border-gray-400 px-5 py-2 text-left">
          <span className="block truncate capitalize">{selectedItem.name}</span>
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
          <Listbox.Options className="mt-1 max-h-60 rounded-md border-[1px] border-gray-200 py-1 shadow-md">
            {list.map((listItem) => (
              <Listbox.Option
                key={listItem.id}
                value={listItem}
                className={({ active }) =>
                  classNames(
                    active ? 'bg-blue-500 text-white' : '',
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
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
}

export default MyListBox;
