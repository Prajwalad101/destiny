import ConditionalRender from 'components/conditional-render/ConditionalRender';
import { AppLayout, NavLayout, ProviderLayout } from 'components/layout';
import BusinessInfoSection from 'components/sections/business/info/BusinessInfoSection';
import BusinessReviewSection from 'components/sections/business/review/BusinessReviewSection';
import useBusiness, { fetchBusiness } from 'hooks/business/useBusiness';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient } from 'react-query';
import { NextPageWithLayout } from '../../_app';

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
  <ProviderLayout pageProps={pageProps}>
    <NavLayout>
      <AppLayout size="sm">{page}</AppLayout>
    </NavLayout>
  </ProviderLayout>
);
