import { useEffect, useMemo, useState } from 'react';
import businessCategories from '../../../../data/business/categoriesData';
import { IBusinessSubcategoryDropdown } from '../../../../types/interfaces';
import MyLabel from '../components/Form/MyLabel';
import MySubLabel from '../components/Form/MySubLabel';
import SelectCategory from '../components/Form/SelectCategory/SelectCategory';
import SelectFeature from '../components/Form/SelectFeature/SelectFeature';
import FieldLayout from './FieldLayout';

function SelectCategoryLayout() {
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
    () => selectedSubCategory.features || [],
    [selectedSubCategory]
  );

  const [selectedFeatures, setSelectedFeatures] = useState(currentFeatures[0]);

  useEffect(() => {
    setSelectedFeatures(currentFeatures[0]);
  }, [currentFeatures]);

  useEffect(() => {
    setSelectedSubCategory(currentSubCategories[0]);
  }, [currentSubCategories]);

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
      <FieldLayout>
        <div className="mb-5 lg:mb-0">
          <MyLabel htmlFor="category">Category</MyLabel>
          <MySubLabel>
            Select one of the category your business falls on
          </MySubLabel>
        </div>
        <SelectCategory
          categoryState={categoryState}
          subCategoryState={subCategoryState}
          subCategories={currentSubCategories}
        />
      </FieldLayout>

      <FieldLayout>
        <div className="mb-5 lg:mb-0">
          <MyLabel htmlFor="features">Features</MyLabel>
          <MySubLabel>Select the features your business provides</MySubLabel>
        </div>
        <SelectFeature
          featureState={featureState}
          currentFeatures={currentFeatures}
        />
      </FieldLayout>
    </>
  );
}

export default SelectCategoryLayout;
