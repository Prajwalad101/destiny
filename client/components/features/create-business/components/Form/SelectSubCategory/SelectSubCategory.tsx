import { Listbox } from '@headlessui/react';
import { useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import { HiOutlineSelector } from 'react-icons/hi';
import businessCategories from '../../../../../../data/business/categoriesData';
import { IBusinessSubcategoryDropdown } from '../../../../../../types/interfaces';
import MyListBox from '../MyListBox/MyListBox';

function SelectSubCategory() {
  const {
    values: { category },
  } = useFormikContext();

  // currently selected business category
  const businessCategory = businessCategories.filter(
    (businessCategory) => businessCategory.name === category
  )[0];

  // list of subCategories
  const [subCategories, setSubCategories] = useState<
    IBusinessSubcategoryDropdown[]
  >(businessCategory.subCategories);

  // currently selected subCategory
  const [selectedSubCategory, setSelectedSubCategory] = useState<{
    name: string;
    features?: { name: string }[];
  }>(businessCategory.subCategories[0]);

  // update subcategories when category changes
  useEffect(() => {
    console.log(businessCategory.subCategories);

    setSubCategories(businessCategory.subCategories);
    setSelectedSubCategory(businessCategory.subCategories[0]); // reset selected subcategory
  }, [category, businessCategory]);

  // state object for listbox
  const listState = {
    selected: selectedSubCategory,
    setSelected: setSelectedSubCategory,
  };

  return (
    <div>
      <MyListBox
        list={subCategories}
        listState={listState}
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

export default SelectSubCategory;
