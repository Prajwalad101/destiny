import { Menu, Transition } from '@headlessui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { classNames } from 'utils/tailwind';

export default function ReportUserDropdown() {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="rounded-full p-[6px] hover:bg-gray-200">
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
                  active
                    ? 'border-gray-200 bg-gray-200'
                    : 'border-gray-300 bg-white',
                  'w-full whitespace-nowrap rounded-sm border px-5 py-[10px] text-right transition-colors sm:px-10'
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
