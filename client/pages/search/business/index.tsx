import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  dehydrate,
  QueryClient,
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from 'react-query';
import AppLayout from '../../../components/layout/app/AppLayout';
import NavLayout from '../../../components/layout/navigation/NavLayout';
import ProviderLayout from '../../../components/layout/provider/ProviderLayout.';
import SearchFilter from '../../../components/search-filter/SearchFilter';
import BusinessListSection from '../../../components/sections/business-list/BusinessListSection';
import SortItems from '../../../components/sort/SortItems';
import searchFilterData from '../../../data/searchFilter.data';
import { sortItemData } from '../../../data/sortBusiness.data';
import { Data, fetchBusinesses } from '../../../hooks/business/useBusinesses';
import { NextPageWithLayout } from '../../_app';

export interface ISelectedFilters {
  tags: string[];
  price: string | null;
}

const SearchBusiness: NextPageWithLayout = () => {
  const router = useRouter();
  const { name, city } = router.query;

  const [selectedSort, setSelectedSort] = useState(sortItemData[0]);
  const [selectedFilters, setSelectedFilters] = useState<ISelectedFilters>({
    tags: [],
    price: null,
  });
  const [refetch, setRefetch] =
    useState<
      | null
      | (<TPageData>(
          _options?:
            | (RefetchOptions & RefetchQueryFilters<TPageData>)
            | undefined
        ) => Promise<QueryObserverResult<Data, Error>>)
    >(null);

  const getRefetch = (
    refetchFn: <TPageData>(
      _options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
    ) => Promise<QueryObserverResult<Data, Error>>
  ) => {
    setRefetch(() => refetchFn);
  };

  return (
    <div className="mt-5 flex gap-10 md:mt-10">
      <SearchFilter
        filterOption={searchFilterData.resturants}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        refetch={refetch}
      />
      <div className="min-w-0 grow">
        <div className="mb-7 sm:mr-5 md:mb-10">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
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
                refetch={refetch}
              />
            </div>
          </div>
        </div>
        <BusinessListSection
          sortField={selectedSort.sortField}
          selectedFilters={selectedFilters}
          getRefetch={getRefetch}
        />
      </div>
    </div>
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
