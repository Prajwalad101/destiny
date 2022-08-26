import { Navbar } from '@features/create-business';
import SecondaryButton from 'components/button/secondary/SecondaryButton';
import AppLayout from 'components/layout/app/AppLayout';
import Image from 'next/image';
import { NextPageWithLayout } from 'pages/_app';
import Success from 'public/create-business/animations/completed.gif';

const SubmitBusiness: NextPageWithLayout = () => {
  return (
    <div className="relative flex flex-col items-center font-rubik">
      <div className="confetti-background absolute z-10 h-full w-[700px]" />
      <div className="mt-5">
        <Image
          src={Success}
          alt="loading-animation"
          width={300}
          height={300}
          className="pt-10"
        />
      </div>
      <div className="z-10 flex flex-col items-center">
        <h1 className="mt-10 mb-7 text-center font-merriweather text-3xl font-bold tracking-wider">
          Congratulations. You&apos;re all set up.
        </h1>
        <p className="mb-5 text-center text-lg text-secondarytext">
          Now, let&apos;s have a look at your business
        </p>
        <SecondaryButton className="z-10 py-2 px-6">
          <p className="text-base sm:text-lg">View your listing</p>
        </SecondaryButton>
      </div>
    </div>
  );
};

SubmitBusiness.getLayout = (page) => (
  <>
    <Navbar />
    <AppLayout size="sm">{page}</AppLayout>;
  </>
);

export default SubmitBusiness;
