import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { IBusinessSubcategoryDropdown } from 'types/interfaces';
import { classNames } from 'utils/tailwind';

interface BusinessCategoriesMobileProps {
  topic: string;
  subCategories: IBusinessSubcategoryDropdown[];
  onClick: () => void;
}

function BusinessCategoriesMobile({
  topic,
  subCategories,
  onClick,
}: BusinessCategoriesMobileProps) {
  const [selectedItem, setSelectedItem] = useState<string>(); // to track if displaying sub items

  const handleItemClick = (item: string) => {
    // check if already displaying items
    if (selectedItem === item) {
      setSelectedItem('');
      return;
    }
    setSelectedItem(item);
  };

  //! FIX: Change the static city variable
  const link = (item: IBusinessSubcategoryDropdown, index: number) => (
    <Link
      key={index}
      href={{
        pathname: '/search/business',
        query: { name: item.name, city: 'kathmandu' },
      }}
    >
      <div
        key={index}
        className="group flex cursor-pointer gap-2 py-2"
        onClick={onClick}
      >
        {/* Hover bar */}
        <div className="group rounded-md border-2 border-primaryred opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
        {/* Sub item */}
        <div className="flex items-center gap-3 text-gray-700 hover:text-black">
          <div className="group-hover:text-primaryred">{item.icon}</div>
          <p className="capitalize">{item.name}</p>
        </div>
      </div>
    </Link>
  );

  return (
    <>
      {/* Item heading */}
      <div
        onClick={() => handleItemClick(topic)}
        className="mt-2 flex cursor-pointer items-center gap-2 rounded-md py-2 transition-all duration-300 hover:bg-gray-200 hover:pl-2"
      >
        {topic === selectedItem ? (
          <AiOutlineMinus className="text-gray-700" />
        ) : (
          <AiOutlinePlus className="text-gray-700" />
        )}
        <p className="capitalize">{topic}</p>
      </div>
      {/* Sub items */}
      <div
        className={classNames(
          selectedItem === topic
            ? 'opacity-100'
            : 'absolute -z-10 opacity-0 transition-none',
          'ml-6 transition-opacity duration-500 ease-linear'
        )}
      >
        {subCategories.map((item, index) => link(item, index))}
      </div>
    </>
  );
}

export default BusinessCategoriesMobile;
