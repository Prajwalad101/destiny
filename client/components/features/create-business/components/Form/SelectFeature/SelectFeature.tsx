import {
  ListboxItem,
  MyFormValues,
  MyListBox,
} from '@features/create-business';
import businessCategories from 'data/business/categoriesData';
import { useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import { IBusinessSubcategoryDropdown } from 'types/interfaces';

function SelectFeature() {
  // avoid accidentally mutating original array
  const categories = [...businessCategories];
  const {
    values: { subCategory },
    setFieldValue,
  } = useFormikContext<MyFormValues>();

  // currently selected business subcategory
  let businessSubCategory: IBusinessSubcategoryDropdown | undefined;
  categories.forEach((category) => {
    const result = category.subCategories.find(
      (businessSubCategory) => businessSubCategory.name === subCategory
    );

    // only update variable if result found
    if (result) {
      businessSubCategory = result;
    }
  });

  const [features, setFeatures] = useState(businessSubCategory?.features);

  const [selectedFeatures, setSelectedFeatures] = useState([
    businessSubCategory?.features[0],
  ]);

  // perform updates when subcategory changes
  useEffect(() => {
    const features = businessSubCategory?.features;
    if (!features) return;

    setFeatures(features);
    setSelectedFeatures([features[0]]);
    setFieldValue('features', features[0]);
  }, [subCategory, businessSubCategory, setFieldValue]);

  // check if selectedFeatures contain any undefined values
  const isUndefined = selectedFeatures.some((item) => {
    if (item === undefined) return true;
  });

  if (!features || isUndefined) {
    return <></>;
  }

  return (
    <MyListBox
      list={features}
      listState={{
        selected: selectedFeatures as ListboxItem[],
        setSelected: setSelectedFeatures,
      }}
      inputName="features"
      multiple={true}
    />
  );
}

export default SelectFeature;
