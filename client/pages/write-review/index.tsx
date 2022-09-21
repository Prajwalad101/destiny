import { Searchbar } from '@features/home-page/components';
import { NavigationProvider } from 'components/context-provider';
import { AppLayout } from 'components/layout';
import { Navbar, Sidebar } from 'components/navigation';
import Image from 'next/image';
import { NextPageWithLayout } from 'pages/_app';
import GrapeIllustration from 'public/illustrations/review-business/grape-illustrations-1.svg';

const WriteReview: NextPageWithLayout = () => {
  return (
    <main className="mt-10">
      {/* BG Image */}
      <div className="absolute bg-gray-100 -z-10 inset-0 h-[600px]" />
      <div className="flex items-start justify-between h-[500px] mb-4">
        <div className="mt-10">
          <h1 className="font-merriweather text-4xl font-bold w-[600px] leading-snug">
            Review and rate your favourite businesses
          </h1>
          <span className="inline-block font-merriweather mt-4 mb-6 font-semibold text-gray-500">
            Search for a business in order to create a review
          </span>
          <Searchbar
            placeholder1="Bajeko Sekuwa"
            placeholder2="Kathmandu, Kapan"
            className="max-w-2xl h-[60px] shadow-md rounded-md focus-within:shadow-lg transition-shadow"
          />
        </div>
        <Image
          src={GrapeIllustration}
          alt="illustration"
          width={400}
          height={400}
        />
      </div>
      <div className="mx-auto text-center mb-14">
        <h4 className="text-2xl font-medium mb-1">Latest Reviews</h4>
        <span className="inline-block text-gray-500">
          Checkout what people have been writing
        </span>
      </div>
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
