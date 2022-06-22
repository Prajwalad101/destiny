import { AiOutlineSearch } from 'react-icons/ai';

interface ISearchbar {
  placeholder: string;
}

function Searchbar({ placeholder }: ISearchbar) {
  return (
    <div className="relative flex w-max items-center">
      <input
        className="w-full rounded-sm bg-[#E6E6E6] p-4 font-merriweather text-[15px]"
        type="text"
        placeholder={placeholder}
      />
      <button className="absolute bottom-0 right-0 flex h-[54.5px] w-[54.5px] items-center justify-center rounded-r-sm bg-primaryred  text-white hover:bg-red-500">
        <AiOutlineSearch size={20} />
      </button>
    </div>
  );
}

export default Searchbar;
