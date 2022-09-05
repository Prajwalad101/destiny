import { IFilterOptions } from 'data/searchFilter';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { ISelectedFilters } from '../../types/interfaces';
import PrimaryButton from '../button/primary/PrimaryButton';
import Checkbox from '../checkbox/Checkbox';

interface PriceFilterProps {
  filterData: string[];
  filterType: string;
}

interface SelectFilterProps {
  filterData: string[];
  filterType: string;
}

interface SearchFilterProps {
  filterOption: IFilterOptions;
  selectedFilters: ISelectedFilters;
  setSelectedFilters: Dispatch<SetStateAction<ISelectedFilters>>;
  setIsFilter: Dispatch<SetStateAction<boolean>>;
}

function SearchFilter({
  filterOption,
  selectedFilters,
  setSelectedFilters,
  setIsFilter,
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

      selectedFilters.price = id;
      setSelectedFilters({ ...selectedFilters });
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
                  // eslint-disable-next-line react/no-unknown-property
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
          <PriceFilter filterData={filterOption.price} filterType="price" />
          <SelectFilter
            filterData={filterOption.suggested}
            filterType="suggested"
          />
          <SelectFilter
            filterData={filterOption.features}
            filterType="features"
          />
          <SelectFilter
            filterData={filterOption.distance}
            filterType="distance"
          />
        </div>
        <div className="mb-5 flex flex-col">
          <PrimaryButton className="py-2" onClick={() => setIsFilter(true)}>
            {/* <p className="py-[2px]">Filter</p> */}
            Filter
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;
