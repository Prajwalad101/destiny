import { Dialog, Transition } from '@headlessui/react';
import { Divider, PrimaryButton, SecondaryButton } from 'components';
import { ChangeEvent, Fragment, useState } from 'react';
import { BsCaretDown, BsCaretRight } from 'react-icons/bs';

interface IMenuCategory {
  id: number;
  name: string;
  items: { id: number; name: string; info: string; price: number }[];
}

type MenuItem = IMenuCategory['items'][number];
interface IAddedMenuItem {
  item: MenuItem;
  quantity: number;
}

const menuCategories: IMenuCategory[] = [
  {
    id: 1,
    name: 'breakfast',
    items: [
      {
        id: 2,
        name: 'buttermilk or buckwheat pancakes',
        info: 'comes with bacon or maple sausage',
        price: 250,
      },
      {
        id: 3,
        name: 'french toast',
        info: 'with bacon or maple sausage',
        price: 300,
      },
      {
        id: 4,
        name: 'the scrambler',
        info: 'three eggs scrambled with onion, green peppers, mushrooms, dice chicken and apple sauce',
        price: 350,
      },
      {
        id: 5,
        name: 'good morning parfait',
        info: "layers of Nancy's yogurt, house granola and berries",
        price: 150,
      },
    ],
  },
  {
    id: 6,
    name: 'appetizers',
    items: [
      {
        id: 7,
        name: 'chicken chilli',
        info: 'boneless chicken sauteed with green chillies and spring onions',
        price: 300,
      },
      {
        id: 8,
        name: 'chicken 65',
        info: 'chicken pieces marinated in a spicy sauce blend and deep fried',
        price: 280,
      },
      {
        id: 9,
        name: 'chicken manchurian',
        info: 'An Indo-Chinese dish of tender chicken coated in spices and saluteed with spring onions',
        price: 500,
      },
    ],
  },
  {
    id: 10,
    name: 'soups',
    items: [
      {
        id: 11,
        name: 'lentil soup',
        info: 'a delicious mixture of yellow lentils seasoned with spices and blended smooth',
        price: 150,
      },
      {
        id: 12,
        name: 'mango corn soup',
        info: 'a midly spiced soup made from the cream of mango and corn',
        price: 150,
      },
    ],
  },
  {
    id: 13,
    name: 'kathmandu specials',
    items: [
      {
        id: 14,
        name: 'fried vegetable momo',
        info: 'fried vegetable dumplings stuffed with cabbage, cilantro and red onions',
        price: 120,
      },
      {
        id: 15,
        name: 'chicked chow mein',
        info: 'Stir fried noodles cooked with chicken and spiced vegetables in a spicy & savory sauce',
        price: 200,
      },
      {
        id: 16,
        name: 'shrimp chow mein',
        info: 'Stir fried noodles cooked with shrimp and spiced vegetables in a spicy & savory sauce',
        price: 400,
      },
      {
        id: 17,
        name: 'vegetable thukpa soup',
        info: 'Traditional Nepali style vegetable noodle soup',
        price: 200,
      },
    ],
  },
];

interface BrowseMenuProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function BrowseMenu({ isOpen, closeModal }: BrowseMenuProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [addedItems, setAddedItems] = useState<IAddedMenuItem[]>([]);

  const initialQuantity = menuCategories.flatMap((category) =>
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
    setAddedItems([...addedItems, { item, quantity: itemQuantity }]);
  };

  const handleRemoveItem = (item: MenuItem) => {
    const newItems = addedItems.filter(
      (addedItem) => addedItem.item.id !== item.id
    );
    setAddedItems(newItems);
  };

  const getItemButton = (item: MenuItem) => {
    // check if the item has already been added
    const addedItem = addedItems.find(
      (addedItem) => addedItem.item.id === item.id
    );

    if (addedItem) {
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
    const items = addedItems.filter((item) =>
      categoryItemIds.includes(item.item.id)
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
              <Dialog.Panel className="h-[95vh] w-full max-w-5xl overflow-scroll bg-white p-8">
                <h3 className="mb-16 text-center font-merriweather text-[22px] font-bold underline">
                  The Burger House Menu
                </h3>
                <div>
                  {menuCategories.map((category) => (
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
                        <div className="my-7">
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
                                    className="h-[40px] w-16 rounded-md bg-white px-4 py-2 shadow-[rgba(0,0,0,0.10)_0px_5px_15px_0px]"
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
