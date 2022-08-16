import { MyFormValues, MyListBox } from '@features/create-business';
import { Listbox } from '@headlessui/react';
import businessCategories from 'data/business/categoriesData';
import { useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import { HiOutlineSelector } from 'react-icons/hi';
import { IBusinessSubcategoryDropdown } from 'types/interfaces';

function SelectSubCategory() {
  // avoid accidentally mutating original array
  const categories = [...businessCategories];

  const {
    setFieldValue,
    values: { category },
  } = useFormikContext<MyFormValues>();

  // currently selected business category
  const businessCategory = categories.find(
    (businessCategory) => businessCategory.name === category
  );

  // list of subCategories
  const [subCategories, setSubCategories] = useState<
    IBusinessSubcategoryDropdown[] | undefined
  >(businessCategory?.subCategories);

  // currently selected subCategory
  const [selectedSubCategory, setSelectedSubCategory] = useState<
    | {
        name: string;
        features?: { name: string }[];
      }
    | undefined
  >(businessCategory?.subCategories[0]);

  // update subcategories when category changes
  useEffect(() => {
    const subCategories = businessCategory?.subCategories;
    if (!subCategories) return;

    setSubCategories(subCategories);
    setSelectedSubCategory(subCategories[0]); // update selected subcategory
    setFieldValue('subCategory', subCategories[0].name); // update formik state
  }, [category, businessCategory, setFieldValue]);

  if (!subCategories || !selectedSubCategory) {
    return <></>;
  }

  return (
    <div>
      <MyListBox
        list={subCategories}
        listState={{
          selected: selectedSubCategory,
          setSelected: setSelectedSubCategory,
        }}
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
