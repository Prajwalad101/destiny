import {
  BreadCrumbs,
  BusinessAttributes,
  CategoriesDropdown,
  LocationAndContact,
  OrderFood,
} from '@features/business-details/components';
import { useBusiness } from '@features/business-details/hooks';
import {
  BusinessInfoSection,
  CommunitySection,
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
  const { query } = useRouter();
  const businessId = query.businessId as string;

  const businessResult = useBusiness(businessId);
  const { isLoading, isError } = businessResult;

  const businessData = businessResult.data?.data;
  if (!businessData) return null;

  return (
    <ConditionalRender isLoading={isLoading} isError={isError}>
      <CategoriesDropdown />
      <BreadCrumbs />
      <BusinessInfoSection
        business={businessData}
        className="mt-4 mb-7 md:mb-16"
      />
      <div className="flex flex-col items-start gap-x-16 gap-y-7 md:flex-row-reverse">
        <OrderFood />
        <div className="w-full overflow-y-auto">
          <BusinessAttributes attributes={businessData.features} />
          <LocationAndContact className="mb-10 md:mb-16" />
          <CommunitySection className="mb-10" />
        </div>
      </div>
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
