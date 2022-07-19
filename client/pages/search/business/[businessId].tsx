import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient } from 'react-query';
import AppLayout from '../../../components/layout/app/AppLayout';
import NavLayout from '../../../components/layout/navigation/NavLayout';
import ProviderLayout from '../../../components/layout/provider/ProviderLayout.';
import useBusiness, {
  fetchBusiness,
} from '../../../hooks/business/useBusiness';
import { NextPageWithLayout } from '../../_app';

const Business: NextPageWithLayout = () => {
  const router = useRouter();
  const { query } = router;
  const businessId = query.businessId as string;

  const businessResult = useBusiness(businessId);

  if (businessResult.isLoading) {
    return <div>Loading data</div>;
  }

  if (businessResult.isError) {
    return (
      <div>
        <h4>Error while fetching business data</h4>
        <p>{businessResult.error.message}</p>
      </div>
    );
  }

  if (businessResult.isIdle) {
    return <div>Idling</div>;
  }

  return (
    <div>
      <button onClick={() => router.back()}>GO BACK</button>
      {businessResult.data?.data.name}
    </div>
  );
};

export default Business;

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

Business.getLayout = (page, pageProps) => (
  <ProviderLayout pageProps={pageProps}>
    <NavLayout>
      <AppLayout>{page}</AppLayout>
    </NavLayout>
  </ProviderLayout>
);
