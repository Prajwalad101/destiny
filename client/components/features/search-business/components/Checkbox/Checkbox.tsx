import { BusinessFeature, IBusiness } from '@destiny/common/types';
import { ChangeEvent } from 'react';

interface CheckboxProps {
  feature: BusinessFeature;
  selectedFilters: Pick<IBusiness, 'features' | 'price'>;
  setSelectedFilters: (_filter: Pick<IBusiness, 'features' | 'price'>) => void;
}

function Checkbox({
  feature,
  selectedFilters,
  setSelectedFilters,
}: CheckboxProps) {
  const { features } = selectedFilters;

  // when checkbox is clicked
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    //* IMP: Only assert if input id for this event is of type BusinessFeature
    const feature = e.target.id as BusinessFeature;

    // on check
    if (checked && !features.includes(feature)) {
      features.push(feature);
      setSelectedFilters({ ...selectedFilters });
    }

    // on uncheck
    if (!checked) {
      const index = features.indexOf(feature);
      if (index > -1) {
        // only remove if element is found
        features.splice(index, 1);
      }
      setSelectedFilters({ ...selectedFilters });
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        className="inp-cbx"
        id={feature}
        style={{ display: 'none' }}
        onChange={(e) => handleChange(e)}
        checked={features.includes(feature)}
      />
      <label className="cbx" htmlFor={feature}>
        <span>
          <svg width="12px" height="10px" viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
        <span className="capitalize">{feature}</span>
      </label>
    </div>
  );
}

export default Checkbox;
