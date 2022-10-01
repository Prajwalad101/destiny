import { Menu, Transition } from '@headlessui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { classNames } from 'utils/tailwind';

export default function ReportUserDropdown() {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="hover:bg-gray-200 p-[6px] rounded-full">
        <BsThreeDotsVertical size={23} />
      </Menu.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="absolute right-0 mt-1">
          <Menu.Item>
            {({ active }) => (
              <button
                className={classNames(
                  active ? 'bg-gray-200 border-gray-200' : '',
                  'w-full text-right transition-colors whitespace-nowrap px-5 sm:px-10 py-[10px] border border-gray-300 rounded-sm bg-white'
                )}
              >
                Report User
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
