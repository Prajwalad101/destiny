import { MyListBox } from '@features/create-business/components';
import { Listbox } from '@headlessui/react';
import { categoryDropdownData } from 'data';
import { useState } from 'react';
import { HiOutlineSelector } from 'react-icons/hi';
import { ISubcategoryDropdown } from 'types/business';

function SelectCategory() {
  const [selectedCategory, setSelectedCategory] = useState<{
    name: string;
    subcategories?: ISubcategoryDropdown[];
  }>(categoryDropdownData[0]);

  const categoryState = {
    selected: selectedCategory,
    setSelected: setSelectedCategory,
  };

  return (
    <div className="relative">
      <MyListBox
        list={categoryDropdownData}
        listState={categoryState}
        width={200}
        inputName="category"
        button={
          <Listbox.Button className="relative w-full rounded-l-md border-[1px] border-gray-400 px-5 py-2 text-left">
            <>
              <span className="block truncate capitalize">
                {categoryState.selected.name}
              </span>
              <span className="absolute right-0 top-1/2 -translate-y-1/2 pr-2">
                <HiOutlineSelector size={17} className="text-gray-400" />
              </span>
            </>
          </Listbox.Button>
        }
      />
    </div>
  );
}

export default SelectCategory;
