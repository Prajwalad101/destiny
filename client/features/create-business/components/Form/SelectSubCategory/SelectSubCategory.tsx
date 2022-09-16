import { MyListBox } from '@features/create-business/components';
import { MyFormValues } from '@features/create-business/types';
import { Listbox } from '@headlessui/react';
import businessCategories from 'data/business/categoriesData';
import { useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import { HiOutlineSelector } from 'react-icons/hi';
import { ISubcategoryDropdown } from 'types/business';

// avoid accidentally mutating original array
const categories = [...businessCategories];

function SelectSubCategory() {
  // get the currently selected category name
  const {
    setFieldValue,
    values: { category },
  } = useFormikContext<MyFormValues>();

  // currently selected business category
  const businessCategory = categories.find(
    (businessCategory) => businessCategory.name === category
  );

  // list of subcategories
  const [subcategories, setSubcategories] = useState<
    ISubcategoryDropdown[] | undefined
  >(businessCategory?.subcategories);

  // currently selected subCategory
  const [selectedSubcategory, setSelectedSubcategory] = useState<
    | {
        name: string;
        features?: { name: string }[];
      }
    | undefined
  >(businessCategory?.subcategories[0]);

  // update subcategories when category changes
  useEffect(() => {
    const subcategories = businessCategory?.subcategories;
    if (!subcategories) return;

    setSubcategories(subcategories);
    setSelectedSubcategory(subcategories[0]); // update selected subcategory
    setFieldValue('subCategory', subcategories[0].name); // update formik state
  }, [category, businessCategory, setFieldValue]);

  if (!subcategories || !selectedSubcategory) {
    return <></>;
  }

  return (
    <div>
      <MyListBox
        list={subcategories}
        listState={{
          selected: selectedSubcategory,
          setSelected: setSelectedSubcategory,
        }}
        width={140}
        inputName="subCategory"
        button={
          <Listbox.Button className="relative w-full rounded-r-md border-[1px] border-l-0 border-gray-400 px-5 py-2 text-left">
            <>
              <span className="block truncate capitalize">
                {selectedSubcategory.name}
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
