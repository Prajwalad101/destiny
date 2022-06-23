import { RiArrowDownSLine } from 'react-icons/ri';

interface IExploreTopicDropdown {
  topic: string;
  items: string[];
}

function ExploreTopicDropdown({ topic, items }: IExploreTopicDropdown) {
  return (
    <div className="relative capitalize text-white">
      {/* DROPDOWN HEADING */}
      <div className="peer flex items-center gap-1 hover:cursor-pointer">
        <p>{topic}</p>
        <RiArrowDownSLine size={25} />
      </div>

      {/* DROPDOWN MENU */}
      <div className="absolute top-5 hidden w-max pt-4 hover:block peer-hover:block">
        {items.map((item, index) => (
          <p
            key={index}
            className="pb-[6px] hover:cursor-pointer hover:text-gray-300"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ExploreTopicDropdown;
