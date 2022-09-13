import { IBusiness } from '@destiny/common/types';
import { Checkbox } from '@features/search-business/components';
import {
  FilterFields,
  IFilterByOptions,
} from '@features/search-business/types';
import PrimaryButton from 'components/button/primary/PrimaryButton';
import { ChangeEvent } from 'react';

interface PriceFilterProps {
  prices: IBusiness['price'][];
  filterType: string;
}

interface SelectFilterProps {
  features: IBusiness['features'];
  filterType: string;
}

interface SearchFilterProps {
  filterBy: IFilterByOptions;
  selectedFilters: FilterFields;
  setSelectedFilters: (_filter: FilterFields) => void;
  setIsEnabled: (_isEnabled: boolean) => void;
}

function SearchFilter({
  filterBy,
  selectedFilters,
  setSelectedFilters,
  setIsEnabled,
}: SearchFilterProps) {
  const SelectFilter = ({ features, filterType }: SelectFilterProps) => {
    return (
      <div>
        <p className="mb-3 font-medium capitalize">{filterType}</p>
        <div className="child-notlast:mb-2">
          {features.map((feature, index) => (
            <div key={index} className="hover:text-secondarytext">
              <Checkbox
                feature={feature}
                selectedFilters={selectedFilters}
                setSelectedFilters={setSelectedFilters}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const PriceFilter = ({ prices, filterType }: PriceFilterProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { id } = e.target;

      if (
        id === 'cheap' ||
        id === 'medium' ||
        id === 'high' ||
        id === 'exclusive'
      ) {
        selectedFilters.price = id;
        setSelectedFilters({ ...selectedFilters });
      }
    };
    return (
      <div>
        <p className="mb-3 font-medium capitalize">{filterType}</p>
        <div className="grid grid-cols-2 gap-y-2">
          {prices.map((price, index) => (
            <label htmlFor={price} key={index}>
              <div className="flex cursor-pointer gap-2 hover:text-secondarytext">
                <input
                  type="radio"
                  id={price}
                  className="w-[18px] accent-primaryred"
                  onChange={(e) => handleChange(e)}
                  checked={selectedFilters.price === price}
                />
                <p className="capitalize">{price}</p>
              </div>
            </label>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="hidden h-max rounded-md bg-gray-100 font-rubik lg:block">
      <div className=" w-[340px] px-8 py-6">
        <div className="mb-12 flex w-full flex-col gap-y-7">
          <PriceFilter prices={filterBy.price} filterType="price" />
          <SelectFilter features={filterBy.suggested} filterType="suggested" />
          <SelectFilter features={filterBy.popular} filterType="popular" />
          {/* <SelectFilter features={filterBy.distance} filterType="distance" /> */}
        </div>
        <div className="mb-5 flex flex-col">
          <PrimaryButton className="py-2" onClick={() => setIsEnabled(true)}>
            Filter
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;
