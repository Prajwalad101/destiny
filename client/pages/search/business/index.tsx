import { IBusiness } from '@destiny/types';
import { useState } from 'react';
import { dehydrate, QueryClient } from 'react-query';
import BusinessCard from '../../../components/cards/business/BusinessCard';
import AppLayout from '../../../components/layout/app/AppLayout';
import NavLayout from '../../../components/layout/navigation/NavLayout';
import SearchBusinessLayout from '../../../components/layout/pages/search-business/SearchBusinessLayout';
import ProviderLayout from '../../../components/layout/provider/ProviderLayout.';
import { sortItemData } from '../../../data/sortBusiness.data';
import { fetchBusinesses } from '../../../hooks/business/useBusinesses';
import { NextPageWithLayout } from '../../_app';

const SearchBusiness: NextPageWithLayout = () => {
  const [businessData, setBusinessData] = useState<IBusiness[]>([]);
  return (
    <SearchBusinessLayout setBusinessData={setBusinessData}>
      <>
        {businessData?.map((business) => (
          <div key={business._id.toString()} className="mb-4">
            <BusinessCard business={business} />
          </div>
        ))}
      </>
    </SearchBusinessLayout>
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  // to sort the initial query by the first item in the data
  const initialSortField = sortItemData[0].sortField;
  const initialFilters = { tags: [], price: null };

  await queryClient.prefetchQuery(
    ['business', initialSortField, initialFilters],
    () => fetchBusinesses(initialSortField, initialFilters),
    {
      staleTime: 10000,
    }
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default SearchBusiness;

SearchBusiness.getLayout = (page, pageProps) => (
  <ProviderLayout pageProps={pageProps}>
    <NavLayout>
      <AppLayout>{page}</AppLayout>
    </NavLayout>
  </ProviderLayout>
);
