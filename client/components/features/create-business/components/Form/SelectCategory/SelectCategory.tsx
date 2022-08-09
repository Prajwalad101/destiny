import { Listbox } from '@headlessui/react';
import { useEffect, useMemo, useState } from 'react';
import { HiOutlineSelector } from 'react-icons/hi';
import {
  IBusinessCategoryDropdown,
  IBusinessSubCategory,
} from '../../../../../../types/interfaces';
import MyListBox from '../MyListBox/MyListBox';

interface SelectCategoryProps {
  categories: IBusinessCategoryDropdown[];
}

function SelectCategory({ categories }: SelectCategoryProps) {
  const [selectedCategory, setSelectedCategory] = useState<{
    name: string;
    subCategories?: IBusinessSubCategory[];
  }>(categories[0]);

  // subcategories of the currently selected category
  const currentSubCategories = useMemo(
    () => selectedCategory.subCategories || [],
    [selectedCategory]
  );

  const [selectedSubCategory, setSelectedSubCategory] = useState<{
    name: string;
  }>(currentSubCategories[0]);

  useEffect(() => {
    setSelectedSubCategory(currentSubCategories[0]);
  }, [selectedCategory, currentSubCategories]);

  const categoryState = {
    selected: selectedCategory,
    setSelected: setSelectedCategory,
  };

  const subCategoryState = {
    selected: selectedSubCategory,
    setSelected: setSelectedSubCategory,
  };

  return (
    <div className="flex">
      {/* Category */}
      <MyListBox
        list={categories}
        listState={categoryState}
        width={200}
        inputName="category"
        button={
          <Listbox.Button className="relative w-full rounded-l-md border-[1px] border-gray-400 px-5 py-2 text-left">
            <>
              <span className="block truncate capitalize">
                {selectedCategory.name}
              </span>
              <span className="absolute right-0 top-1/2 -translate-y-1/2 pr-2">
                <HiOutlineSelector size={17} className="text-gray-400" />
              </span>
            </>
          </Listbox.Button>
        }
      />
      {/* Sub category */}
      <MyListBox
        list={currentSubCategories}
        listState={subCategoryState}
        width={140}
        inputName="subCategory"
        button={
          <Listbox.Button className="relative w-full rounded-r-md border-[1px] border-l-0 border-gray-400 px-5 py-2 text-left">
            <>
              <span className="block truncate capitalize">
                {selectedSubCategory.name}
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
