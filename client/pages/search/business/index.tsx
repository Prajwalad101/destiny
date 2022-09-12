import { IBusiness } from '@destiny/common/types';
import { SearchFilter, SortItems } from '@features/search-business/components';
import {
  searchFilterOptions,
  sortItemData,
} from '@features/search-business/data';
import { useBusinesses } from '@features/search-business/hooks';
import { SearchBusinessSection } from '@features/search-business/layouts';
import {
  buildBusinessQuery,
  fetchBusinesses,
} from '@features/search-business/utils/api';
import { AppLayout, NavLayout, ProviderLayout } from 'components/layout';
import { NextPageWithLayout } from 'pages/_app';
import { useEffect, useState } from 'react';
import { dehydrate, QueryClient } from 'react-query';

// only query for these fields when fetching businesses
const businessFields = ['-description', '-price', '-tags', '-total_rating'];

const SearchBusiness: NextPageWithLayout = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [selectedSort, setSelectedSort] = useState(sortItemData[0]);
  const [selectedFilters, setSelectedFilters] = useState<
    Pick<IBusiness, 'features' | 'price'>
  >({
    features: [],
    price: 'medium',
  });

  const sortField = selectedSort.sortField;
  const businessResult = useBusinesses({
    sort: sortField,
    filters: selectedFilters,
    enabled: isEnabled,
    fields: businessFields,
  });

  // when fetch settles, change the filter state back to false
  useEffect(() => {
    setIsEnabled(false);
  }, [businessResult]);

  const filterComponent = (
    <SearchFilter
      //! Temporary Fix: This can lead to run time error
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      filterBy={searchFilterOptions.resturant!}
      selectedFilters={selectedFilters}
      setSelectedFilters={setSelectedFilters}
      setIsEnabled={setIsEnabled}
    />
  );

  const sortComponent = (
    <SortItems
      {...{ sortItemData, selectedSort, setSelectedSort, setIsEnabled }}
    />
  );

  return (
    <SearchBusinessSection
      {...{ filterComponent, sortComponent, businessResult }}
    />
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  // to sort the initial query by the first item in the data
  const initialSortField = sortItemData[0].sortField;

  const initialFilters: {
    features: IBusiness['features'];
    price: IBusiness['price'];
  } = { features: [], price: 'medium' };

  const queryURL = buildBusinessQuery(
    initialSortField,
    initialFilters,
    businessFields
  );

  await queryClient.prefetchQuery(
    ['business', initialSortField, initialFilters, businessFields],
    () => fetchBusinesses(queryURL),
    { staleTime: 1000 * 10 }
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
