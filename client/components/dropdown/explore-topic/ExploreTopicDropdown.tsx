import { RiArrowDownSLine } from 'react-icons/ri';
import { IItem } from '../../../data/dropdown.data';

interface IExploreTopicDropdown {
  topic: string;
  items: IItem[];
}

function ExploreTopicDropdown({ topic, items }: IExploreTopicDropdown) {
  const evenItems = items.filter((_item, i) => i % 2 === 0 || i === 0);
  const oddItems = items.filter((_item, i) => i % 2 !== 0);

  return (
    <div className="relative capitalize">
      {/* DROPDOWN HEADING */}
      <div className="peer flex items-center gap-1 text-white hover:cursor-pointer">
        <p>{topic}</p>
        <RiArrowDownSLine size={25} />
      </div>

      <div className="peer h-2" />

      {/* DROPDOWN MENU */}
      <div className="invisible absolute flex gap-x-10  rounded-sm bg-white p-4 opacity-0 transition-opacity delay-100 hover:visible hover:opacity-100 peer-hover:visible peer-hover:opacity-100">
        <div className="flex flex-col gap-y-3">
          {evenItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 hover:cursor-pointer hover:text-gray-600"
            >
              <p className="whitespace-nowrap">{item.title}</p>
              {item.icon}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-y-3">
          {oddItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 hover:cursor-pointer hover:text-gray-600"
            >
              <p className="whitespace-nowrap">{item.title}</p>
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExploreTopicDropdown;
