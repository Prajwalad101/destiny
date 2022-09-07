import { IQueryData, ISelectedFilters } from '@features/search-business/types';
import { fetchBusinesses } from '@features/search-business/utils/api';
import { useQuery } from 'react-query';

function useBusinesses(
  sortField: string,
  selectedFilters: ISelectedFilters,
  isFilter: boolean
) {
  // ** when updating initialFields make sure to update on getServerSideProps also
  const initialFields = ['-description', '-price', '-tags', '-total_rating'];

  const query = useQuery<IQueryData, Error>(
    ['business', sortField, selectedFilters, initialFields],
    () => fetchBusinesses(sortField, selectedFilters, initialFields),
    {
      enabled: isFilter, // only run when the filter button is clicked
      staleTime: 1000 * 10,
    }
  );

  return query;
}

export default useBusinesses;
