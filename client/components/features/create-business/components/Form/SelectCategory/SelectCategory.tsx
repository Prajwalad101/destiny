import { Listbox } from '@headlessui/react';
import { useEffect, useMemo, useState } from 'react';
import { HiOutlineSelector } from 'react-icons/hi';
import businessCategories from '../../../../../../data/business/categoriesData';
import { IBusinessSubcategoryDropdown } from '../../../../../../types/interfaces';
import FieldLayout from '../../../layouts/FieldLayout';
import MyLabel from '../MyLabel';
import MyListBox from '../MyListBox/MyListBox';
import MySubLabel from '../MySubLabel';

function SelectCategory() {
  const [selectedCategory, setSelectedCategory] = useState<{
    name: string;
    subCategories?: IBusinessSubcategoryDropdown[];
  }>(businessCategories[0]);

  // subcategories for currently selected category
  const currentSubCategories = useMemo(
    () => selectedCategory.subCategories || [],
    [selectedCategory]
  );

  const [selectedSubCategory, setSelectedSubCategory] = useState<{
    name: string;
    features?: { name: string }[];
  }>(currentSubCategories[0]);

  // features for currently selected subcategory
  const currentFeatures = useMemo(
    () => selectedSubCategory.features || [{ name: '' }],
    [selectedSubCategory]
  );

  const [selectedFeatures, setSelectedFeatures] = useState([
    currentFeatures[0],
  ]);

  // update subcategories when different category is selected
  useEffect(() => {
    setSelectedSubCategory(currentSubCategories[0]);
  }, [currentSubCategories]);

  // update features when different sub category is selected
  useEffect(() => {
    setSelectedFeatures([currentFeatures[0]]);
  }, [currentFeatures]);

  const categoryState = {
    selected: selectedCategory,
    setSelected: setSelectedCategory,
  };

  const subCategoryState = {
    selected: selectedSubCategory,
    setSelected: setSelectedSubCategory,
  };

  const featureState = {
    selected: selectedFeatures,
    setSelected: setSelectedFeatures,
  };

  return (
    <>
      {/* Category & SubCategory */}
      <FieldLayout>
        <div className="mb-5 lg:mb-0">
          <MyLabel htmlFor="category">Category</MyLabel>
          <MySubLabel>
            Select one of the category your business falls on
          </MySubLabel>
        </div>
        <div className="flex">
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

          <div>
            <MyListBox
              list={currentSubCategories}
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
      </FieldLayout>

      {/* Select Features */}
      <FieldLayout>
        <div className="mb-5 lg:mb-0">
          <MyLabel htmlFor="features">Features</MyLabel>
          <MySubLabel>Select the features your business provides</MySubLabel>
        </div>
        <MyListBox
          list={currentFeatures}
          listState={featureState}
          inputName="features"
          multiple={true}
        />
      </FieldLayout>
    </>
  );
}

export default SelectCategory;
