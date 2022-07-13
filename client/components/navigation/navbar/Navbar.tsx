import Link from 'next/link';
import { useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';
import { useSidebar } from '../../../context/navigation.context';
import { classNames } from '../../../utils/tailwind';
import Button from '../../button/Button';
import AppLayout from '../../layout/app/AppLayout';
import Logo from '../../logo/Logo';

interface INavbar {
  theme: 'light' | 'dark';
}

function Navbar({ theme }: INavbar) {
  const { open, setOpen } = useSidebar();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

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
              <Link href="/">For Businesses</Link>
            </div>
            <div className="underline-offset-4 hover:underline">
              <Link href="/">Write a review</Link>
            </div>

            {/* LOGIN BUTTONS */}
            <Button variant="secondary" theme={theme}>
              <p>Sign Up</p>
            </Button>
            <Button variant="primary" theme={theme}>
              <p>Log In</p>
            </Button>
          </div>
        </div>
      </AppLayout>
    </div>
  );
}

export default Navbar;
