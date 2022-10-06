import { Menu, Transition } from '@headlessui/react';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { classNames } from 'utils/tailwind';

const sortItems = [
  { id: 1, name: 'most helpful' },
  { id: 2, name: 'newest' },
  { id: 3, name: 'oldest' },
  // { id: 4, name: 'highest ratings' },
  // { id: 5, name: 'lowest ratings' },
];

export default function SortQA() {
  const [selectedSort, setSelectedSort] = useState(sortItems[0]);

  return (
    <Menu as="div" className="relative z-30 w-[180px]">
      <Menu.Button className="flex w-max items-center gap-1 rounded-full border border-gray-500 px-7 py-[9px] capitalize">
        <span>{selectedSort.name}</span>
        <FiChevronDown size={20} />
      </Menu.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="absolute top-0 mt-2 rounded-md border border-gray-300 bg-white shadow-sm">
          {sortItems.map((sort) => {
            if (sort.name === selectedSort.name) return;
            return (
              <Menu.Item key={sort.id}>
                {({ active }) => (
                  <button
                    className={classNames(
                      'w-full px-7 py-[9px] text-left capitalize',
                      active ? 'bg-gray-100' : ''
                    )}
                    onClick={() => setSelectedSort(sort)}
                  >
                    {sort.name}
                  </button>
                )}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
