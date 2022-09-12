import { IBusiness } from '@destiny/types';
import { Checkbox } from '@features/search-business/components';
import { FilterByOptions } from '@features/search-business/types';
import PrimaryButton from 'components/button/primary/PrimaryButton';
import { ChangeEvent } from 'react';

interface PriceFilterProps {
  filterData: string[];
  filterType: string;
}

interface SelectFilterProps {
  filterData: string[];
  filterType: string;
}

interface SearchFilterProps {
  filterBy: FilterByOptions;
  selectedFilters: Pick<IBusiness, 'features' | 'price'>;
  setSelectedFilters: (_filter: Pick<IBusiness, 'features' | 'price'>) => void;
  setIsEnabled: (_isEnabled: boolean) => void;
}

function SearchFilter({
  filterBy,
  selectedFilters,
  setSelectedFilters,
  setIsEnabled,
}: SearchFilterProps) {
  const SelectFilter = ({ filterData, filterType }: SelectFilterProps) => {
    return (
      <div>
        <p className="mb-3 font-medium capitalize">{filterType}</p>
        <div className="child-notlast:mb-2">
          {filterData.map((filterName, index) => (
            <div key={index} className="hover:text-secondarytext">
              <Checkbox
                filterName={filterName}
                selectedFilters={selectedFilters}
                setSelectedFilters={setSelectedFilters}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const PriceFilter = ({ filterData, filterType }: PriceFilterProps) => {
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
          {filterData.map((filter, index) => (
            <label htmlFor={filter} key={index}>
              <div className="flex cursor-pointer gap-2 hover:text-secondarytext">
                <input
                  type="radio"
                  id={filter}
                  className="w-[18px] accent-primaryred"
                  onChange={(e) => handleChange(e)}
                  checked={selectedFilters.price === filter}
                />
                <p className="capitalize">{filter}</p>
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
          <PriceFilter filterData={filterBy.price} filterType="price" />
          <SelectFilter
            filterData={filterBy.suggested}
            filterType="suggested"
          />
          <SelectFilter filterData={filterBy.popular} filterType="popular" />
          <SelectFilter filterData={filterBy.distance} filterType="distance" />
        </div>
        <div className="mb-5 flex flex-col">
          <PrimaryButton className="py-2" onClick={() => setIsEnabled(true)}>
            {/* <p className="py-[2px]">Filter</p> */}
            Filter
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;
