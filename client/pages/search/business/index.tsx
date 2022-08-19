import { useEffect, useState } from 'react';
import { dehydrate, QueryClient } from 'react-query';
import AppLayout from '../../../components/layout/app/AppLayout';
import NavLayout from '../../../components/layout/navigation/NavLayout';
import SearchBusinessLayout from '../../../components/layout/pages/search-business/SearchBusinessLayout';
import ProviderLayout from '../../../components/layout/provider/ProviderLayout.';
import SearchFilter from '../../../components/search-filter/SearchFilter';
import SortItems from '../../../components/sort/SortItems';
import searchFilterData from '../../../data/searchFilter';
import { sortItemData } from '../../../data/sortItem';
import useBusinesses, {
  fetchBusinesses,
} from '../../../hooks/business/useBusinesses';
import { ISelectedFilters } from '../../../types/interfaces';
import { NextPageWithLayout } from '../../_app';

const SearchBusiness: NextPageWithLayout = () => {
  const [isFilter, setIsFilter] = useState(true);
  const [selectedSort, setSelectedSort] = useState(sortItemData[0]);
  const [selectedFilters, setSelectedFilters] = useState<ISelectedFilters>({
    tags: [],
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
  const initialFilters = { tags: [], price: null };
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
