import { useRouter } from 'next/router';
import { useState } from 'react';
import { dehydrate, QueryClient } from 'react-query';
import AppLayout from '../../../components/layout/app/AppLayout';
import NavLayout from '../../../components/layout/navigation/NavLayout';
import ProviderLayout from '../../../components/layout/provider/ProviderLayout.';
import BusinessListSection from '../../../components/sections/business-list/BusinessListSection';
import SortItems from '../../../components/sort/SortItems';
import { sortItemData } from '../../../data/sortBusiness.data';
import { fetchBusinesses } from '../../../hooks/business/useBusinesses';
import { NextPageWithLayout } from '../../_app';

const SearchBusiness: NextPageWithLayout = () => {
  const router = useRouter();
  const { name, city } = router.query;

  const [selectedSort, setSelectedSort] = useState(sortItemData[0]);

  return (
    <div className="mt-5 flex gap-8 md:mt-10">
      <div className="hidden h-[600px] w-[400px] bg-gray-300 lg:block" />
      <div className="min-w-0 grow">
        <div className="mb-7 flex flex-col justify-between gap-x-3 gap-y-4 sm:mr-10 sm:flex-row sm:items-center md:mb-10">
          {/* Heading */}
          <h2 className="font-merriweather text-2xl font-bold">
            Top <span className="capitalize">{name}</span> in{' '}
            <span className="capitalize">{city}</span>
          </h2>
          {/* Sort Menu */}
          <div className="w-72">
            <SortItems
              sortItemData={sortItemData}
              selectedSort={selectedSort}
              setSelectedSort={setSelectedSort}
            />
          </div>
        </div>
        <BusinessListSection selectedSort={selectedSort} />
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  // to sort the initial query by the first item in the data
  const initialSortField = sortItemData[0].sortField;

  await queryClient.prefetchQuery(
    ['businesses', initialSortField],
    fetchBusinesses,
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
