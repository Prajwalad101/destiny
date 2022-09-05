import PrimaryButton from 'components/button/primary/PrimaryButton';
import SecondaryButton from 'components/button/secondary/SecondaryButton';
import AppLayout from 'components/layout/app/AppLayout';
import Logo from 'components/logo/Logo';
import { useSidebar } from 'context/navigation.context';
import { navLinkData } from 'data';
import usePreventBodyOverflow from 'hooks/usePreventBodyOverflow';
import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';
import { classNames } from 'utils/css';

interface INavbar {
  theme: 'light' | 'dark';
}

function Navbar({ theme }: INavbar) {
  const { open, setOpen } = useSidebar();

  usePreventBodyOverflow(open);

  return (
    <div className="py-4 font-rubik shadow-md md:pt-7 md:shadow-none">
      <AppLayout size="sm">
        {/* FOR SMALLER(<md) SCREENS */}
        <div className="flex items-center justify-between md:hidden">
          {/* Hamburger Icon */}
          <BiMenu
            size={35}
            onClick={() => setOpen(!open)}
            className="cursor-pointer hover:text-gray-700"
          />
          <Logo>Logo</Logo>
          <AiOutlineSearch
            size={30}
            className="cursor-pointer hover:text-gray-700"
          />
        </div>

        {/* FOR LARGER(>=md) SCREENS  */}
        <div
          className={classNames(
            theme === 'dark' ? 'text-white' : 'text-black',
            'hidden items-center justify-between md:flex'
          )}
        >
          {/* MAIN LOGO */}
          <Logo>Logo</Logo>
          {/* BUSINESS LINKS */}
          <div className="flex items-center gap-7 lg:gap-10">
            <div className="underline-offset-4 hover:underline">
              <Link href={navLinkData.forBusiness}>
                <a>For Businesses</a>
              </Link>
            </div>
            <div className="underline-offset-4 hover:underline">
              <Link href={navLinkData.writeReview}>
                <a>Write a review</a>
              </Link>
            </div>

            {/* LOGIN BUTTONS */}
            <SecondaryButton theme={theme}>
              <p className="py-2 px-6">Sign Up</p>
            </SecondaryButton>
            <PrimaryButton>
              <p className="py-2 px-6">Log In</p>
            </PrimaryButton>
          </div>
        </div>
      </AppLayout>
    </div>
  );
}

export default Navbar;
