import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai';
import { linkData } from '..';
import { classNames } from '../../../../utils/css';
import PrimaryButton from '../../../button/primary/PrimaryButton';
import AppLayout from '../../../layout/app/AppLayout';
import Logo from '../../../logo/Logo';

interface ICreateBusinessNavbar {
  theme?: 'light' | 'dark';
}

function Navbar({ theme = 'light' }: ICreateBusinessNavbar) {
  return (
    <div className="py-4 font-rubik shadow-md md:pt-7 md:shadow-none">
      <AppLayout size="sm">
        {/* FOR SMALLER(<md) SCREENS */}
        <div className="flex items-center justify-between md:hidden">
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
              <Link href="">
                <a>
                  Contact Us <span className="font-medium">(01-4164120)</span>
                </a>
              </Link>
            </div>

            <Link href={linkData.getStarted}>
              <a>
                <PrimaryButton className="px-6 py-2">
                  Create Listing
                </PrimaryButton>
              </a>
            </Link>
          </div>
        </div>
      </AppLayout>
    </div>
  );
}

export default Navbar;
