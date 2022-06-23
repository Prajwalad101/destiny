import type { NextPage } from 'next';
import ExploreTopicDropdown from '../components/dropdown/explore-topic/ExploreTopicDropdown';
import Searchbar from '../components/search-bar/Searchbar';

const dropDownData = [
  {
    topic: 'food and drinks',
    items: ['resturants', 'cafes', 'food stalls', 'hotels'],
  },
  {
    topic: 'fitness',
    items: [
      'gyms',
      'meditation centers',
      'fitness centers',
      'zumba',
      'swimming',
    ],
  },
  {
    topic: 'home services',
    items: ['plumbing', 'electricity', 'cleaning', 'repairs'],
  },
  {
    topic: 'more',
    items: ['entertainment', 'shopping', 'essentials', 'vehicles'],
  },
];
const Home: NextPage = () => {
  return (
    <div className="mt-7 md:mt-12">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10 hidden h-[95vh] bg-main-img bg-cover bg-no-repeat md:block" />
      <h1 className="max-w-sm font-merriweather text-[33px] font-black leading-tight tracking-wider sm:max-w-xl sm:text-[40px] md:text-[45px] md:leading-[69px] md:text-white">
        Find and support local businesses
      </h1>
      <div className="mt-5 w-full max-w-xl md:mt-7 md:max-w-2xl">
        <Searchbar
          foodPlaceholder="Search for stuff"
          locationPlaceholder="Kathmandu, New baneshwor"
        />
      </div>
      <div className="mt-5 hidden gap-8 md:flex">
        {dropDownData.map((data, index) => (
          <div key={index}>
            <ExploreTopicDropdown topic={data.topic} items={data.items} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
