import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import { IoMdPerson } from 'react-icons/io';
import { MdLogin } from 'react-icons/md';
import { useSidebar } from '../../../context/navigation.context';
import businessCategories from '../../../data/business/categoriesData';
import { navLinks } from '../../../data/navLinks';
import { classNames } from '../../../utils/css';
import BusinessCategoriesMobile from '../../dropdown/explore-topic-mobile/BusinessCategoriesMobile';

function Sidebar() {
  const { open, setOpen } = useSidebar();

  return (
    <div
      className={classNames(
        !open ? '-translate-x-[300px]' : '',
        'absolute z-20 h-[100vh] w-[300px] overflow-scroll bg-gray-50 p-5 font-rubik transition-all duration-500 md:hidden'
      )}
    >
      {/* Logo section */}
      <div className="mb-5 flex items-center justify-between">
        <h3>Logo</h3>
        <AiOutlineClose
          size={25}
          className="cursor-pointer hover:text-gray-700"
          onClick={() => setOpen(!open)}
        />
      </div>

      {/* Signup section */}
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
        <Link href={navLinks.writeReview}>
          <a>
            <p
              className="mb-3 w-max cursor-pointer underline underline-offset-2 hover:text-gray-600"
              onClick={() => setOpen(!open)}
            >
              Write a Review
            </p>
          </a>
        </Link>
        <Link href={navLinks.forBusiness}>
          <a>
            <p
              className="w-max cursor-pointer underline underline-offset-2 hover:text-gray-600"
              onClick={() => setOpen(!open)}
            >
              For Businesses
            </p>
          </a>
        </Link>
      </div>

      {/* Horizontal Line */}
      <div className="h-[1px] bg-gray-500" />
      <p className="mb-3 mt-4 text-lg font-medium">Explore</p>

      <div className="mt-5 font-rubik md:hidden">
        {businessCategories.map((data, index) => (
          <div key={index}>
            <BusinessCategoriesMobile
              topic={data.name}
              subCategories={data.subCategories}
              onClick={() => setOpen(!open)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
