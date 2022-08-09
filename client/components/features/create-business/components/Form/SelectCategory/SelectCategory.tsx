import { useState } from 'react';
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
  const currentSubCategories = selectedCategory.subCategories || [];

  const [selectedSubCategory, setSelectedSubCategory] = useState<{
    name: string;
  }>(currentSubCategories[0]);

  const categoryState = {
    selected: selectedCategory,
    setSelected: setSelectedCategory,
  };

  const subCategoryState = {
    selected: selectedSubCategory,
    setSelected: setSelectedSubCategory,
  };

  return (
    <div>
      <MyListBox
        list={categories}
        listState={categoryState}
        inputName="category"
      />
      <MyListBox list={currentSubCategories} listState={subCategoryState} />
    </div>
  );
}

export default SelectCategory;
