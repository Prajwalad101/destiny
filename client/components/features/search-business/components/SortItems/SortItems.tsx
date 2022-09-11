import { ISortItem } from '@features/search-business/types';
import { useEffect } from 'react';
import { BsChevronDown } from 'react-icons/bs';

export interface SortItemsProps {
  sortItemData: ISortItem[];
  selectedSort: ISortItem;
  setSelectedSort: (_sortItem: ISortItem) => void;
  setIsEnabled: (_isEnabled: boolean) => void;
}

function SortItems({
  sortItemData,
  selectedSort,
  setSelectedSort,
  setIsEnabled,
}: SortItemsProps) {
  // when sortField state updates, fetch data
  useEffect(() => {
    setTimeout(() => {
      setIsEnabled(true);
    }, 0);
  }, [setIsEnabled, selectedSort]);

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
