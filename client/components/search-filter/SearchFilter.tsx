import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from 'react-query';
import { IFilterOptions } from '../../data/searchFilter.data';
import { Data } from '../../hooks/business/useBusinesses';
import { ISelectedFilters } from '../../pages/search/business';
import Button from '../button/Button';
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
  refetch:
    | (<TPageData>(
        _options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
      ) => Promise<QueryObserverResult<Data, Error>>)
    | null;
}

function SearchFilter({
  filterOption,
  selectedFilters,
  setSelectedFilters,
  refetch,
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

  const handleClick = () => {
    if (refetch) {
      refetch();
    }
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
          <Button variant="primary" theme="light" onClick={handleClick}>
            <p className="py-[1px]">Filter</p>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;
