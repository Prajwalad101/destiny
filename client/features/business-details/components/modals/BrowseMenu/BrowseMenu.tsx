import { ISelectedMenuItem } from '@features/business-details/components/OrderFood/OrderFood';
import { menuData } from '@features/business-details/data';
import {
  IMenuCategory,
  MenuItem,
} from '@features/business-details/data/menuData';
import { Dialog, Transition } from '@headlessui/react';
import { Divider, PrimaryButton, SecondaryButton } from 'components';
import Image from 'next/image';
import {
  ChangeEvent,
  Dispatch,
  Fragment,
  SetStateAction,
  useState,
} from 'react';
import { BsCaretDown, BsCaretRight } from 'react-icons/bs';

interface BrowseMenuProps {
  isOpen: boolean;
  selectedItems: ISelectedMenuItem[];
  setSelectedItems: Dispatch<SetStateAction<ISelectedMenuItem[]>>;
  closeModal: () => void;
}

export default function BrowseMenu({
  isOpen,
  closeModal,
  selectedItems,
  setSelectedItems,
}: BrowseMenuProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const initialQuantity = menuData.flatMap((category) =>
    category.items.map((item) => ({ item, quantity: 1 }))
  );

  const [itemsQuantity, setItemsQuantity] =
    useState<{ item: MenuItem; quantity: number }[]>(initialQuantity);

  const handleExpandItems = (categoryName: string) => {
    const isExpanded = categoryName === selectedCategory;
    if (isExpanded) {
      setSelectedCategory('');
      return;
    }
    setSelectedCategory(categoryName);
  };

  const handleAddItem = (item: MenuItem) => {
    const itemQuantity = getQuantity(item);
    setSelectedItems([...selectedItems, { item, quantity: itemQuantity }]);
  };

  const handleRemoveItem = (item: MenuItem) => {
    const newItems = selectedItems.filter(
      (selectedItem) => selectedItem.item.id !== item.id
    );
    setSelectedItems(newItems);
  };

  const getItemButton = (item: MenuItem) => {
    // check if the item has already been added
    const selectedItem = selectedItems.find(
      (selectedItem) => selectedItem.item.id === item.id
    );

    if (selectedItem) {
      return (
        <PrimaryButton
          className="h-[40px] w-28"
          onClick={() => handleRemoveItem(item)}
        >
          Remove
        </PrimaryButton>
      );
    }
    return (
      <SecondaryButton
        className="h-[40px] w-28"
        onClick={() => handleAddItem(item)}
      >
        Add
      </SecondaryButton>
    );
  };

  const getCaretIcon = (category: IMenuCategory) => {
    if (category.name === selectedCategory) return <BsCaretDown size={22} />;
    return <BsCaretRight size={22} />;
  };

  const getAddedItems = (category: IMenuCategory) => {
    const categoryItemIds = category.items.map((item) => item.id);
    const items = selectedItems.filter((selectedItem) =>
      categoryItemIds.includes(selectedItem.item.id)
    );
    return items;
  };

  const handleQuantityChange = (
    e: ChangeEvent<HTMLInputElement>,
    item: MenuItem
  ) => {
    let value = Number(e.target.value);
    if (isNaN(value)) value = 0;

    const newItemsQuantity = itemsQuantity.map((itemQuantity) => {
      // if items match, update that item
      if (itemQuantity.item.id === item.id) return { item, quantity: value };
      return itemQuantity;
    });

    setItemsQuantity(newItemsQuantity);
  };

  const getQuantity = (item: MenuItem) => {
    const quantity = itemsQuantity.find(
      (itemQuantity) => itemQuantity.item.id === item.id
    )?.quantity;
    return quantity || 0;
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
              <Dialog.Panel className="h-[95vh] w-full max-w-5xl overflow-scroll rounded-md bg-white p-8">
                <div className="relative left-0 top-0 right-0 -mx-8 -mt-8 mb-5 h-[270px]">
                  <div className="absolute inset-0 z-10 bg-gray-600/20" />
                  <Image
                    alt="photo of a resturant."
                    src="https://images.unsplash.com/photo-1494233914995-8c8b438d3f60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute bottom-0 z-20 w-full px-8 pb-8 text-white">
                    <h3 className="mb-4 max-w-lg font-merriweather text-3xl font-bold leading-relaxed">
                      The Burger House and Crunchy Fried Chicken
                    </h3>
                    <div className="flex w-full items-center justify-between">
                      <p className="uppercase text-gray-300">Food Menu</p>
                      <p>Kathmandu, Kapan</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="mb-5 text-gray-700">
                    Select items from the categories below
                  </p>
                  {menuData.map((category) => (
                    <div key={category.id}>
                      <div
                        className="group flex cursor-pointer items-center justify-between py-4 transition-colors  hover:bg-gray-100"
                        onClick={() => handleExpandItems(category.name)}
                      >
                        <div className="flex items-center gap-1 transition-transform group-hover:translate-x-2 group-hover:text-gray-700">
                          {getCaretIcon(category)}
                          <h4 className="font-merriweather font-bold uppercase">
                            {category.name}
                          </h4>
                        </div>
                        <p className=" pr-3 text-gray-600">
                          {getAddedItems(category).length} /{' '}
                          {category.items.length} selected
                        </p>
                      </div>
                      <Divider />
                      {category.name === selectedCategory && (
                        <div className="mt-7">
                          {category.items.map((item) => (
                            <Fragment key={item.id}>
                              <Item item={item}>
                                <div className="flex items-center gap-3">
                                  <span>Quantity:</span>
                                  <input
                                    value={getQuantity(item)}
                                    onChange={(e) =>
                                      handleQuantityChange(e, item)
                                    }
                                    className="h-[40px] w-16 rounded-md border border-gray-500 bg-white px-4 py-2 text-center outline-none ring-gray-500 ring-offset-1 focus:ring"
                                  />
                                </div>
                                {getItemButton(item)}
                              </Item>
                            </Fragment>
                          ))}
                          <Divider />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

function Item({
  item,
  children,
}: {
  item: MenuItem;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-12 flex items-start justify-between">
      <div className="max-w-[400px]">
        <p className="mb-1 font-medium uppercase">{item.name}</p>
        <p className="mb-3 text-gray-600">{item.info}</p>
        <p>Rs. {item.price}</p>
      </div>
      <div className="flex items-start gap-20">{children}</div>
    </div>
  );
}
