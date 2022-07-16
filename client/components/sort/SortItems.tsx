import { Dispatch, SetStateAction, useEffect } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from 'react-query';
import { ISortItem } from '../../data/sortBusiness.data';
import { Data } from '../../hooks/business/useBusinesses';

export interface ISortItems {
  sortItemData: ISortItem[];
  selectedSort: ISortItem;
  setSelectedSort: Dispatch<SetStateAction<ISortItem>>;
  refetch:
    | (<TPageData>(
        _options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
      ) => Promise<QueryObserverResult<Data, Error>>)
    | null;
}

function SortItems({
  sortItemData,
  selectedSort,
  setSelectedSort,
  refetch,
}: ISortItems) {
  useEffect(() => {
    setTimeout(() => {
      if (refetch) {
        refetch();
      }
    }, 0);
  }, [refetch, selectedSort]);
  return (
    <div className="flex shrink-0 items-center font-rubik">
      <p className="text-secondarytext">Sort By:</p>

      {/* Dropdown Menu */}
      <div className="relative">
        <div className="peer flex cursor-pointer items-center gap-1 px-3">
          <p>{selectedSort.name}</p>
          <BsChevronDown />
        </div>
        <div className="hidden opacity-0 hover:block hover:opacity-100 peer-hover:block peer-hover:opacity-100">
          <ul className="absolute left-0 z-10 rounded-sm bg-white pt-2 shadow-lg">
            {sortItemData.map((item) => {
              if (item.id === selectedSort.id) return null;
              return (
                <li
                  key={item.id}
                  className="cursor-pointer whitespace-nowrap rounded-sm py-2 px-3 hover:bg-gray-200"
                  onClick={() => {
                    setSelectedSort(item);
                  }}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SortItems;
