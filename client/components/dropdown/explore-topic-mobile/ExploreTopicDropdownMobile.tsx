import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import topicDropdownData from '../../../data/dropdown.data';
import { classNames } from '../../../utils/tailwind';

function ExploreTopicDropdownMobile() {
  const [selectedItem, setSelectedItem] = useState<string>();

  const handleItemClick = (item: string) => {
    // check if already displaying items
    if (selectedItem === item) {
      setSelectedItem('');
      return;
    }
    setSelectedItem(item);
  };

  return (
    <div className="mt-4">
      <p className="mb-3 text-lg font-medium">Explore</p>

      {topicDropdownData.map((item, index) => (
        <div key={index}>
          {/* Item heading */}
          <div
            onClick={() => handleItemClick(item.topic)}
            className="mt-2 flex cursor-pointer items-center gap-2 rounded-md py-2 transition-all duration-300 hover:bg-gray-200 hover:pl-2"
          >
            {item.topic === selectedItem ? (
              <AiOutlineMinus className="text-gray-700" />
            ) : (
              <AiOutlinePlus className="text-gray-700" />
            )}

            <p className="capitalize">{item.topic}</p>
          </div>
          {/* Menu items */}
          <div
            className={classNames(
              selectedItem === item.topic
                ? 'opacity-100'
                : 'absolute -z-10 opacity-0 transition-none',
              'ml-6 transition-opacity duration-500 ease-linear'
            )}
          >
            {item.items.map((item, index) => (
              <div key={index} className="group flex cursor-pointer gap-2 py-2">
                <div className="group rounded-md border-2 border-primaryred opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                <div className="flex items-center gap-3 text-gray-700 hover:text-black">
                  <div className="group-hover:text-primaryred">{item.icon}</div>
                  <p className="capitalize">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExploreTopicDropdownMobile;
