import { Dispatch, SetStateAction, useEffect } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { ISortItem } from '../../data/sortBusiness.data';

export interface ISortItems {
  sortItemData: ISortItem[];
  selectedSort: ISortItem;
  setSelectedSort: Dispatch<SetStateAction<ISortItem>>;
  setIsFilter: Dispatch<SetStateAction<boolean>>;
}

function SortItems({
  sortItemData,
  selectedSort,
  setSelectedSort,
  setIsFilter,
}: ISortItems) {
  // when sortField state updates, fetch data
  useEffect(() => {
    setTimeout(() => {
      setIsFilter(true);
    }, 0);
  }, [setIsFilter, selectedSort]);
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
