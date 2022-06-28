import { AiOutlineClose } from 'react-icons/ai';
import { IoMdPerson } from 'react-icons/io';
import { MdLogin } from 'react-icons/md';
import { useSidebar } from '../../../context/navigation.context';
import { classNames } from '../../../utils/tailwind';
import ExploreTopicDropdownMobile from '../../dropdown/explore-topic-mobile/ExploreTopicDropdownMobile';

function Sidebar() {
  const { open, setOpen } = useSidebar();

  return (
    <div
      className={classNames(
        !open ? '-translate-x-[300px]' : '',
        'absolute z-20 h-[100vh] w-[300px] overflow-scroll  bg-gray-50 p-5 font-rubik transition-all duration-500 md:hidden'
      )}
    >
      {/* LOGO SECTION */}
      <div className="mb-5 flex items-center justify-between">
        <h3>Logo</h3>
        <AiOutlineClose
          size={25}
          className="cursor-pointer hover:text-gray-700"
          onClick={() => setOpen(!open)}
        />
      </div>

      {/* SIGNUP SECTION */}
      <div className="mb-7 text-gray-700">
        <div className="mb-1 flex cursor-pointer items-center gap-2 rounded-md py-2 transition-all duration-300 hover:bg-gray-200 hover:pl-2">
          <IoMdPerson size={23} />
          <p>Sign up</p>
        </div>
        <div className="flex cursor-pointer items-center gap-2 rounded-md py-2 transition-all duration-300 hover:bg-gray-200 hover:px-2">
          <MdLogin size={25} />
          <p>Log in</p>
        </div>
      </div>

      <div className="mb-5">
        <p className="mb-3 w-max cursor-pointer underline underline-offset-2 hover:text-gray-600">
          Write a Review
        </p>
        <p className="w-max cursor-pointer underline underline-offset-2 hover:text-gray-600">
          For Businesses
        </p>
      </div>

      {/* HORIZONTAL LINE */}
      <div className="h-[1px] bg-gray-500"></div>

      <ExploreTopicDropdownMobile />
    </div>
  );
}

export default Sidebar;
