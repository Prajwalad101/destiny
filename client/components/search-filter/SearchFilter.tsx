import { IFilterOptions } from '../../data/searchFilter.data';
import Button from '../button/Button';
import Checkbox from '../checkbox/Checkbox';

interface SearchFilterProps {
  filterOption: IFilterOptions;
}

function SearchFilter({ filterOption }: SearchFilterProps) {
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
          <Button variant="primary" theme="light">
            <p className="py-[1px]">Filter</p>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;

// INTERNAL COMPONENTS 🔽

interface PriceFilterProps {
  filterData: string[];
  filterType: string;
}

interface SelectFilterProps {
  filterData: string[];
  filterType: string;
}

const PriceFilter = ({ filterData, filterType }: PriceFilterProps) => {
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
                name="filter"
                className="w-[18px] accent-primaryred"
              />
              <p className="capitalize">{filter}</p>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

const SelectFilter = ({ filterData, filterType }: SelectFilterProps) => {
  return (
    <div>
      <p className="mb-3 font-medium capitalize">{filterType}</p>
      <div className="child-notlast:mb-2">
        {filterData.map((filterName, index) => (
          <div key={index} className="hover:text-secondarytext">
            <Checkbox filterName={filterName} />
          </div>
        ))}
      </div>
    </div>
  );
};
