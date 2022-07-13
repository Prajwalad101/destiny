import { IFilterOptions } from '../../data/searchFilter.data';

interface SearchFilterProps {
  filterOption: IFilterOptions;
}

function SearchFilter({ filterOption }: SearchFilterProps) {
  return (
    <div className="hidden w-[300px] border-[1px] border-black font-rubik lg:block">
      <div className="flex w-full flex-col gap-y-5 p-5">
        <PriceFilter filterData={filterOption.price} filterType="price" />
        <SelectFilter
          filterData={filterOption.suggested}
          filterType="suggested"
        />
        <SelectFilter
          filterData={filterOption.features}
          filterType="features"
        />
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
      <p className="mb-2 font-medium capitalize">{filterType}</p>
      <div className="grid grid-cols-2 gap-y-2">
        {filterData.map((filter, index) => (
          <label htmlFor={filter} key={index}>
            <div className="flex cursor-pointer gap-2">
              <input
                type="radio"
                id={filter}
                name="filter"
                className="accent-primaryred"
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
        {filterData.map((filter, index) => (
          <div key={index}>
            <label htmlFor={filter}>
              <div className="flex cursor-pointer gap-2">
                <input
                  type="checkbox"
                  id={filter}
                  className="accent-primaryred"
                />
                <p className="capitalize">{filter}</p>
              </div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
