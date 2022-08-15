import { useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import businessCategories from '../../../../../../data/business/categoriesData';
import { IBusinessSubcategoryDropdown } from '../../../../../../types/interfaces';
import { MyFormValues } from '../../../types/interfaces';
import MyLabel from '../MyLabel';
import MyListBox from '../MyListBox/MyListBox';
import MySubLabel from '../MySubLabel';

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

  const [selectedFeature, setSelectedFeature] = useState(
    businessSubCategory?.features[0]
  );

  // perform updates when subcategory changes
  useEffect(() => {
    const features = businessSubCategory?.features;
    if (!features) return;

    setFeatures(features);
    setSelectedFeature(features[0]);
    setFieldValue('features', features[0]);
  }, [subCategory, businessSubCategory, setFieldValue]);

  if (!features || !selectedFeature) {
    return <></>;
  }

  return (
    <>
      <div className="mb-5 lg:mb-0">
        <MyLabel htmlFor="features">Features</MyLabel>
        <MySubLabel>Select the features your business provides</MySubLabel>
      </div>
      <MyListBox
        list={features}
        listState={{
          selected: selectedFeature,
          setSelected: setSelectedFeature,
        }}
        inputName="features"
        multiple={true}
      />
    </>
  );
}

export default SelectFeature;
