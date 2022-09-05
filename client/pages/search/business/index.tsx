import {
  AppLayout,
  NavLayout,
  ProviderLayout,
  SearchBusinessLayout,
} from 'components/layout';
import SearchFilter from 'components/search-filter/SearchFilter';
import SortItems from 'components/sort/SortItems';
import { searchFilterData, sortItemData } from 'data';
import { useBusinesses } from 'hooks';
import { fetchBusinesses } from 'hooks/business/useBusinesses';
import { NextPageWithLayout } from 'pages/_app';
import { useEffect, useState } from 'react';
import { dehydrate, QueryClient } from 'react-query';
import { ISelectedFilters } from 'types/interfaces';

const SearchBusiness: NextPageWithLayout = () => {
  const [isFilter, setIsFilter] = useState(true);
  const [selectedSort, setSelectedSort] = useState(sortItemData[0]);
  const [selectedFilters, setSelectedFilters] = useState<ISelectedFilters>({
    features: [],
    price: null,
  });

  const sortField = selectedSort.sortField;
  const businessResult = useBusinesses(sortField, selectedFilters, isFilter);

  // when fetch settles, change the filter state back to false
  useEffect(() => {
    setIsFilter(false);
  }, [businessResult, setIsFilter]);

  const filterComponent = (
    <SearchFilter
      filterOption={searchFilterData.resturants}
      selectedFilters={selectedFilters}
      setSelectedFilters={setSelectedFilters}
      setIsFilter={setIsFilter}
    />
  );

  const sortComponent = (
    <SortItems
      sortItemData={sortItemData}
      selectedSort={selectedSort}
      setSelectedSort={setSelectedSort}
      setIsFilter={setIsFilter}
    />
  );
  return (
    <SearchBusinessLayout
      filterComponent={filterComponent}
      sortComponent={sortComponent}
      businessResult={businessResult}
    />
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  // to sort the initial query by the first item in the data
  // ** when updating initialData make sure to update on useBusinesses also
  const initialSortField = sortItemData[0].sortField;
  const initialFilters = { features: [], price: null };
  const initialFields = ['-description', '-price', '-tags', '-total_rating'];

  await queryClient.prefetchQuery(
    ['business', initialSortField, initialFilters, initialFields],
    () => fetchBusinesses(initialSortField, initialFilters, initialFields),
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
