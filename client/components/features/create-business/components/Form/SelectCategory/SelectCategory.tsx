import { Listbox } from '@headlessui/react';
import { HiOutlineSelector } from 'react-icons/hi';
import businessCategories from '../../../../../../data/business/categoriesData';
import { IBusinessSubcategoryDropdown } from '../../../../../../types/interfaces';
import { ListState } from '../../../types/ListStateType';
import MyListBox from '../MyListBox/MyListBox';

interface SelectCategoryProps {
  categoryState: ListState;
  subCategoryState: ListState;
  subCategories: IBusinessSubcategoryDropdown[];
}

function SelectCategory({
  categoryState,
  subCategoryState,
  subCategories,
}: SelectCategoryProps) {
  return (
    <div className="flex">
      {/* Category */}
      <div className="relative">
        <MyListBox
          list={businessCategories}
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

      {/* Sub category */}
      <div>
        <MyListBox
          list={subCategories}
          listState={subCategoryState}
          width={140}
          inputName="subCategory"
          button={
            <Listbox.Button className="relative w-full rounded-r-md border-[1px] border-l-0 border-gray-400 px-5 py-2 text-left">
              <>
                <span className="block truncate capitalize">
                  {subCategoryState.selected.name}
                </span>
                <span className="absolute right-0 top-1/2 -translate-y-1/2 pr-2">
                  <HiOutlineSelector size={17} className="text-gray-400" />
                </span>
              </>
            </Listbox.Button>
          }
        />
      </div>
    </div>
  );
}

export default SelectCategory;
