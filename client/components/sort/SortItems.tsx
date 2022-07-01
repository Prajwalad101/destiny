import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

interface ISortItem {
  id: number;
  name: string;
}

export interface ISortItems {
  sortItems: ISortItem[];
}

function SortItems({ sortItems }: ISortItems) {
  const [selected, setSelected] = useState(sortItems[0]);
  return (
    <div className="flex items-center font-rubik text-sm">
      <p className="text-secondarytext">Sort By:</p>

      {/* Dropdown Menu */}
      <div className="relative">
        <div className="peer flex cursor-pointer items-center gap-1 px-3">
          <p>{selected.name}</p>
          <BsChevronDown />
        </div>
        <div className="hidden opacity-0 hover:block hover:opacity-100 peer-hover:block peer-hover:opacity-100">
          <ul className="absolute left-0 pt-2 shadow-lg ">
            {sortItems.map((item) => {
              if (item.id === selected.id) return null;
              return (
                <li
                  key={item.id}
                  className="cursor-pointer whitespace-nowrap py-2 px-3 hover:bg-gray-200"
                  onClick={() => setSelected(item)}
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
