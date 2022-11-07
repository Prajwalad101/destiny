import { BusinessFeature } from '@destiny/common/types';
import { MyListBox } from '@features/create-business/components';
import { MyFormValues } from '@features/create-business/types';
import { useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import { categoryDropdownData } from 'src/data';
import { ISubcategoryDropdown } from 'src/types/business';

// avoid accidentally mutating original array
const categories = [...categoryDropdownData];

function SelectFeature() {
  // get the currently selected business subcategory name
  const {
    values: { subCategory },
    setFieldValue,
  } = useFormikContext<MyFormValues>();

  // let businessSubCategory: ISubcategoryDropdown | undefined;
  // categories.forEach((category) => {
  //   const result = category.subcategories.find(
  //     (businessSubCategory) => businessSubCategory.name === subCategory
  //   );
  //   // only update variable if 1result found
  //   if (result) {
  //     businessSubCategory = result;
  //   }
  // });

  const [features, setFeatures] = useState<
    { name: BusinessFeature }[] | undefined
  >(undefined);

  // const [selectedFeatures, setSelectedFeatures] = useState<
  //   ({ name: string } | undefined)[]
  // >([businessSubCategory?.features[0]]);

  const [selectedFeatures, setSelectedFeatures] = useState<
    { name: string }[] | undefined
  >(undefined);

  useEffect(() => {
    // get subcategory from the currently selected subcategory name
    let businessSubcategory: ISubcategoryDropdown | undefined;
    categories.forEach((category) => {
      const result = category.subcategories.find(
        (businessSubCategory) => businessSubCategory.name === subCategory
      );
      // only update variable if 1result found
      if (result) {
        businessSubcategory = result;
      }
    });

    if (!businessSubcategory) return;
    const features = businessSubcategory.features;

    setFeatures(features);
    setSelectedFeatures([features[0]]);
    setFieldValue('features', [features[0].name]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subCategory]);

  if (!features || !selectedFeatures) {
    return <></>;
  }

  return (
    <MyListBox
      list={features}
      listState={{
        selected: selectedFeatures,
        setSelected: setSelectedFeatures,
      }}
      inputName="features"
      multiple={true}
    />
  );
}

export default SelectFeature;
