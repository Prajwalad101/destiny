import PrimaryButton from 'components/button/primary/PrimaryButton';
import { AiOutlineSearch } from 'react-icons/ai';
import { classNames } from 'utils/tailwind';

interface SearchbarProps {
  placeholder1: string;
  placeholder2: string;
  className?: string;
}

function Searchbar({
  placeholder1,
  placeholder2,
  className = '',
}: SearchbarProps) {
  return (
    <div>
      <div
        className={classNames(
          'relative flex bg-gray-500 overflow-hidden w-full items-center font-merriweather',
          className
        )}
      >
        {/* Search by topic */}
        <input
          className="h-full w-1/2 rounded-r-none px-4 text-base"
          type="text"
          placeholder={placeholder1}
        />
        {/* Search by location */}
        <input
          className="outline-none absolute right-0 h-full w-1/2 border-l-2 px-3 sm:pr-16 text-[15px] md:block "
          type="text"
          placeholder={placeholder2}
        />
        {/* Search button */}
        <button className="hidden sm:flex absolute bottom-0 right-0 h-full w-[60px] items-center justify-center bg-primaryred text-white hover:bg-red-500">
          <AiOutlineSearch size={23} />
        </button>
      </div>
      <PrimaryButton className="px-10 py-2.5 shadow-md mt-5 sm:hidden">
        Search
      </PrimaryButton>
    </div>
  );
}

export default Searchbar;
