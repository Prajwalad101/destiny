import { RiArrowDownSLine } from 'react-icons/ri';

interface IExploreTopicDropdown {
  topic: string;
  items: string[];
}

function ExploreTopicDropdown({ topic, items }: IExploreTopicDropdown) {
  return (
    <div className="text-white">
      <div className="peer flex items-center gap-1 hover:cursor-pointer">
        <p>{topic}</p>
        <RiArrowDownSLine size={25} />
      </div>
      <div className="hidden w-max pt-2 hover:block peer-hover:block">
        {items.map((item, index) => (
          <p
            key={index}
            className="pb-1 capitalize hover:cursor-pointer hover:text-gray-400"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ExploreTopicDropdown;
