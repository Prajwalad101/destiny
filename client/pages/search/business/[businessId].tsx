import { useBusiness } from '@features/business-details/hooks';
import {
  BusinessInfoSection,
  BusinessReviewSection,
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

  const BusinessReviews = businessData.reviews || [];

  return (
    <ConditionalRender isLoading={isLoading} isError={isError}>
      <BusinessInfoSection business={businessData} />
      <BusinessReviewSection reviews={BusinessReviews} />
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
    <NavigationProvider>
      <Navbar theme="light" size="sm" />
      <Sidebar />
    </NavigationProvider>
    <AppLayout size="sm">{page}</AppLayout>
  </QueryProvider>
);
