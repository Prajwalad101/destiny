import { Navbar } from '@features/create-business';
import SecondaryButton from 'components/button/secondary/SecondaryButton';
import AppLayout from 'components/layout/app/AppLayout';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from 'pages/_app';
import Success from 'public/create-business/animations/completed.gif';
import Error from 'public/create-business/animations/error.gif';

const SubmitBusiness: NextPageWithLayout = () => {
  const router = useRouter();
  const { query } = router;

  if (query.status === 'success') {
    return <DisplaySuccess />;
  }

  if (query.status === 'error') {
    return <DisplayError />;
  }

  return <></>;
};

const DisplaySuccess = () => {
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

const DisplayError = () => {
  return (
    <div className="relative flex flex-col items-center font-rubik">
      <div className="mt-5">
        <Image
          src={Error}
          alt="error-animation"
          width={250}
          height={250}
          className="pt-10"
        />
      </div>
      <div className="z-10 flex flex-col items-center">
        <h1 className="mt-10 mb-7 text-center font-merriweather text-3xl font-bold tracking-wider">
          Something went wrong :(
        </h1>
        <p className="mb-5 text-center text-lg text-secondarytext">
          Sorry about that. Please try again later. <br />
          <span className="text-base text-primaryred">
            If it still does not work, try contacting our support department
          </span>
        </p>
        <SecondaryButton className="z-10 py-2 px-10">
          <p className="text-base sm:text-lg">Go back</p>
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
