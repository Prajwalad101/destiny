import { ISelectedMenuItem } from '@features/business-details/components/OrderFood/OrderFood';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FiTrash2 } from 'react-icons/fi';

interface StartOrderProps {
  selectedItems: ISelectedMenuItem[];
  closeModal: () => void;
  isOpen: boolean;
}

export default function StartOrder({
  isOpen,
  closeModal,
  selectedItems,
}: StartOrderProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center px-6">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl bg-white p-6">
                <div className="mb-7">
                  <h3 className="mb-2 font-merriweather text-xl font-bold">
                    Order Summary
                  </h3>
                  <p className="text-gray-700">
                    Check your items and edit them as necessary
                  </p>
                </div>
                <div className="rounded-md border-2 border-gray-300 pb-3">
                  <table className="w-full">
                    <tr className="border-b-2">
                      <th className="py-3 pl-5 text-left font-medium">Item</th>
                      <th className="py-3 text-left font-medium">Qty</th>
                      <th className="py-3 text-left font-medium">Price</th>
                      <th></th>
                    </tr>
                    {selectedItems.map((selectedItem) => (
                      <tr className="" key={selectedItem.item.id}>
                        <td className="pl-5 capitalize">
                          {selectedItem.item.name}
                        </td>
                        <td className="py-3">{selectedItem.quantity}</td>
                        <td className="py-3">{selectedItem.item.price}</td>
                        <td className="py-3">
                          <FiTrash2
                            size={22}
                            className="cursor-pointer text-gray-600 hover:text-primaryred"
                          />
                        </td>
                      </tr>
                    ))}
                  </table>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
