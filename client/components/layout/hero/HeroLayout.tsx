import dropdownData from '../../../data/dropdown.data';
import ExploreTopicDropdown from '../../dropdown/explore-topic/ExploreTopicDropdown';
import Navbar from '../../navigation/navbar/Navbar';
import Searchbar from '../../search-bar/Searchbar';

function HeroLayout() {
  return (
    <div className="relative md:h-[700px]">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10 hidden bg-main-img bg-cover bg-no-repeat md:block" />
      <Navbar />
      <section className="mx-3 mt-7 md:mt-12 md:px-16">
        {/*/ MAIN HEADING */}
        <h1 className="max-w-sm font-merriweather text-[33px] font-black leading-tight tracking-wider sm:max-w-xl sm:text-[40px] md:text-[45px] md:leading-[69px] md:text-white">
          Find and support local businesses
        </h1>

        {/*/ SEARCH BAR */}
        <div className="mt-5 w-full max-w-xl md:mt-7 md:max-w-2xl">
          <Searchbar
            foodPlaceholder="Search for stuff"
            locationPlaceholder="Kathmandu, New baneshwor"
          />
        </div>

        {/* DROPDOWN ITEMS */}
        <div className="mt-5 hidden gap-8 font-rubik md:flex">
          {dropdownData.map((data, index) => (
            <div key={index}>
              <ExploreTopicDropdown topic={data.topic} items={data.items} />
            </div>
          ))}
        </div>

        {/* IMAGE SLIDER INDICATOR */}
        <div className="mt-32 hidden gap-3 md:flex">
          <div className="h-[5px] w-12 rounded-md bg-white"></div>
          <div className="h-[5px] w-12 rounded-md bg-gray-400 hover:cursor-pointer"></div>
          <div className="h-[5px] w-12 rounded-md bg-gray-400 hover:cursor-pointer"></div>
        </div>
      </section>
    </div>
  );
}

export default HeroLayout;
