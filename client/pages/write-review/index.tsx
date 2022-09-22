import { ReviewCards, Searchbar } from '@features/write-review/components';
import { NavigationProvider } from 'components/context-provider';
import { AppLayout } from 'components/layout';
import { Navbar, Sidebar } from 'components/navigation';
import Image from 'next/image';
import { NextPageWithLayout } from 'pages/_app';
import PhoneIllustration from 'public/illustrations/review-business/phone.svg';

const WriteReview: NextPageWithLayout = () => {
  return (
    <main className="mt-10">
      {/* BG Image */}
      <div className="overlay absolute bg-gray-100 -z-10 inset-0 h-[500px] sm:h-[640px]" />
      <div className="overflow-hidden flex flex-col lg:flex-row items-start justify-between h-[400px] sm:h-[515px] mb-7">
        <div className="lg:mt-10 sm:mb-5 lg:mb-0">
          <h1 className="font-merriweather text-4xl mb-4 sm:mb-2 font-bold md:w-[600px] leading-snug">
            Review and rate your favourite businesses
          </h1>
          <span className="inline-block font-merriweather mb-8 font-semibold text-gray-500">
            Search for a business in order to create a review
          </span>
          <Searchbar
            placeholder1="Bajeko Sekuwa"
            placeholder2="Kathmandu, Kapan"
            className=" h-[60px] shadow-md rounded-md focus-within:shadow-lg transition-shadow"
          />
        </div>
        <div className="relative w-[400px] h-[400px] hidden sm:block -ml-10 lg:-ml-0">
          <Image
            src={PhoneIllustration}
            alt="phone illustration"
            layout="fill"
          />
        </div>
      </div>
      <div className="mx-auto text-center mb-9 md:mb-11">
        <h4 className="text-xl md:text-2xl font-medium">Latest Reviews</h4>
        <span className="inline-block text-gray-500">
          Checkout what people have been writing
        </span>
      </div>
      <ReviewCards />
    </main>
  );
};

WriteReview.getLayout = (page) => (
  <>
    <AppLayout size="sm">
      <NavigationProvider>
        <Navbar theme="light" />
        <Sidebar />
      </NavigationProvider>
      {page}
    </AppLayout>
  </>
);

export default WriteReview;
