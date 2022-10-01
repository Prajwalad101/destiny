import {
  BreadCrumbs,
  BusinessAttributes,
  CategoriesDropdown,
  LocationAndContact,
  Ratings,
} from '@features/business-details/components';
import { useBusiness } from '@features/business-details/hooks';
import {
  BusinessInfoSection,
  QASection,
  ReviewSection,
} from '@features/business-details/layouts';
import { fetchBusiness } from '@features/business-details/utils/api';
import ConditionalRender from 'components/conditional-render/ConditionalRender';
import { NavigationProvider, QueryProvider } from 'components/context-provider';
import { AppLayout } from 'components/layout';
import { Navbar, Sidebar } from 'components/navigation';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from 'pages/_app';
import { dehydrate, QueryClient } from 'react-query';

const Business: NextPageWithLayout = () => {
  const router = useRouter();
  const { query } = router;
  const businessId = query.businessId as string;

  const businessResult = useBusiness(businessId);
  const { isLoading, isError } = businessResult;

  const businessData = businessResult.data?.data;
  if (businessData === undefined) {
    return null;
  }

  const reviews = businessData.reviews || [];

  return (
    <ConditionalRender isLoading={isLoading} isError={isError}>
      <CategoriesDropdown />
      <BreadCrumbs />
      <BusinessInfoSection
        business={businessData}
        className="mt-4 mb-7 md:mb-12"
      />
      <BusinessAttributes
        attributes={businessData.features}
        className="mb-12 md:mb-24"
      />
      <div className="flex flex-col md:flex-row gap-5 lg:gap-10 md:items-start mb-10 md:mb-16">
        <LocationAndContact className="flex-1" />
        <Ratings
          className="flex-1"
          avgRating={businessData.avgRating}
          numReviews={businessData.rating_count}
        />
      </div>
      <div className="border border-gray-200 mb-8" />
      <QASection businessName={businessData.name} className="mb-8" />
      <div className="border border-gray-200 mb-8" />
      <ReviewSection reviews={reviews} className="mb-10" />
    </ConditionalRender>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.params;
  const businessId = params?.businessId as string;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    ['business', businessId],
    () => fetchBusiness(businessId),
    { staleTime: 1000 * 10 }
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Business;

Business.getLayout = (page, pageProps) => (
  <QueryProvider pageProps={pageProps}>
    <AppLayout size="sm">
      <NavigationProvider>
        <Navbar theme="light" />
        <Sidebar />
      </NavigationProvider>
      {page}
    </AppLayout>
  </QueryProvider>
);
