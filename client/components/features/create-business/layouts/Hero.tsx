import { linkData, Navbar } from '@features/create-business';
import PrimaryButton from 'components/button/primary/PrimaryButton';
import AppLayout from 'components/layout/app/AppLayout';
import MainHeading from 'components/text/main-heading/MainHeading';
import Link from 'next/link';
import { BsClipboardData, BsLightbulb, BsPeople } from 'react-icons/bs';

function Hero() {
  return (
    <div>
      <div className="relative h-[650px] font-rubik md:h-[700px]">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10 hidden bg-for-business-main bg-cover bg-no-repeat md:block" />
        {/* Overlay */}
        <div className="absolute inset-0 -z-10 hidden h-full w-full bg-gray-600 opacity-10 md:block" />
        <div className="mb-7 md:mb-10">
          <Navbar theme="dark" />
        </div>
        <AppLayout size="sm">
          <MainHeading className="mb-3 max-w-sm sm:max-w-[40rem]">
            Register your business for free
          </MainHeading>
          <SubHeading />
          <CallToAction />
        </AppLayout>
      </div>
    </div>
  );
}

function SubHeading() {
  return (
    <p className="mb-7 text-lg text-gray-700 md:mb-10 md:text-gray-100">
      <span className="font-medium text-black md:text-white">Create</span>,{' '}
      <span className="font-medium text-black md:text-white">Improve</span> and{' '}
      <span className="font-medium text-black md:text-white">Manage</span> your
      business with ease
    </p>
  );
}

function CallToAction() {
  return (
    <div className="max-w-sm rounded-md bg-gray-200 px-5 py-6 md:bg-white">
      <div className="mb-7 text-secondarytext child-notlast:mb-3">
        <div className="flex items-center gap-2">
          <BsClipboardData size={20} />
          <p>Manage your business information</p>
        </div>
        <div className="flex items-center gap-2">
          <BsPeople size={20} />
          <p>Interact with customers</p>
        </div>
        <div className="flex items-center gap-2">
          <BsLightbulb />
          <p>Receive important reviews</p>
        </div>
      </div>
      <p className="mb-4 font-semibold text-black">
        Set up your listing in minutes
      </p>
      <Link href={linkData.getStarted}>
        <a>
          <PrimaryButton>
            <p className="px-6 py-2">Register now</p>
          </PrimaryButton>
        </a>
      </Link>
    </div>
  );
}

export default Hero;
