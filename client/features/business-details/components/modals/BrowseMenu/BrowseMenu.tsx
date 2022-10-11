import { Dialog, Transition } from '@headlessui/react';
import { Divider, SecondaryButton } from 'components';
import { Fragment, useState } from 'react';
import { BsCaretDown, BsCaretRight } from 'react-icons/bs';

interface IMenuCategory {
  id: number;
  name: string;
  items: { id: number; name: string; info: string; price: number }[];
}

const menuCategories: IMenuCategory[] = [
  {
    id: 1,
    name: 'breakfast',
    items: [
      {
        id: 1,
        name: 'buttermilk or buckwheat pancakes',
        info: 'comes with bacon or maple sausage',
        price: 250,
      },
      {
        id: 2,
        name: 'french toast',
        info: 'with bacon or maple sausage',
        price: 300,
      },
      {
        id: 3,
        name: 'the scrambler',
        info: 'three eggs scrambled with onion, green peppers, mushrooms, dice chicken and apple sauce',
        price: 350,
      },
      {
        id: 4,
        name: 'good morning parfait',
        info: "layers of Nancy's yogurt, house granola and berries",
        price: 150,
      },
    ],
  },
  {
    id: 2,
    name: 'appetizers',
    items: [
      {
        id: 1,
        name: 'chicken chilli',
        info: 'boneless chicken sauteed with green chillies and spring onions',
        price: 300,
      },
      {
        id: 2,
        name: 'chicken 65',
        info: 'chicken pieces marinated in a spicy sauce blend and deep fried',
        price: 280,
      },
      {
        id: 3,
        name: 'chicken manchurian',
        info: 'An Indo-Chinese dish of tender chicken coated in spices and saluteed with spring onions',
        price: 500,
      },
    ],
  },
  {
    id: 3,
    name: 'soups',
    items: [
      {
        id: 1,
        name: 'lentil soup',
        info: 'a delicious mixture of yellow lentils seasoned with spices and blended smooth',
        price: 150,
      },
      {
        id: 2,
        name: 'mango corn soup',
        info: 'a midly spiced soup made from the cream of mango and corn',
        price: 150,
      },
    ],
  },
  {
    id: 4,
    name: 'kathmandu specials',
    items: [
      {
        id: 1,
        name: 'fried vegetable momo',
        info: 'fried vegetable dumplings stuffed with cabbage, cilantro and red onions',
        price: 120,
      },
      {
        id: 2,
        name: 'chicked chow mein',
        info: 'Stir fried noodles cooked with chicken and spiced vegetables in a spicy & savory sauce',
        price: 200,
      },
      {
        id: 3,
        name: 'shrimp chow mein',
        info: 'Stir fried noodles cooked with shrimp and spiced vegetables in a spicy & savory sauce',
        price: 400,
      },
      {
        id: 4,
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

  const handleExpandItems = (categoryName: string) => {
    const isExpanded = categoryName === selectedCategory;
    if (isExpanded) {
      setSelectedCategory('');
      return;
    }
    setSelectedCategory(categoryName);
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
                      <CategoryHeading
                        category={category}
                        selectedCategory={selectedCategory}
                        onClick={() => handleExpandItems(category.name)}
                      />
                      <Divider className="mb-7" />
                      {category.name === selectedCategory && (
                        <div>
                          {category.items.map((item) => (
                            <Fragment key={item.id}>
                              <Item item={item} />
                            </Fragment>
                          ))}
                          <Divider className="mb-4" />
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

function Item({ item }: { item: IMenuCategory['items'][number] }) {
  // box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  return (
    <div className="mb-12 flex items-start justify-between">
      <div className="max-w-[400px]">
        <p className="mb-1 font-medium uppercase">{item.name}</p>
        <p className="mb-3 text-gray-600">{item.info}</p>
        <p>Rs. {item.price}</p>
      </div>
      <div className="flex items-start gap-20">
        <div className="flex items-center gap-3">
          <span>Quantity:</span>
          <input className="h-[40px] w-16 rounded-md bg-white px-4 py-2 shadow-[rgba(0,0,0,0.10)_0px_5px_15px_0px]" />
        </div>
        <SecondaryButton className="h-[40px] w-28">Add</SecondaryButton>
      </div>
    </div>
  );
}

function CategoryHeading({
  category,
  selectedCategory,
  onClick,
}: {
  category: IMenuCategory;
  selectedCategory: string;
  onClick: () => void;
}) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <div
        className="flex cursor-pointer items-center gap-1 hover:text-gray-700"
        onClick={onClick}
      >
        {category.name === selectedCategory && <BsCaretDown size={22} />}
        {category.name !== selectedCategory && <BsCaretRight size={22} />}
        <h4 className="font-merriweather font-bold uppercase">
          {category.name}
        </h4>
      </div>
      <p className="text-gray-600">0 items selected</p>
    </div>
  );
}
