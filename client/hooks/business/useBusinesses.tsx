import { IBusiness } from '@destiny/types';
import { useQuery } from 'react-query';
import { ISelectedFilters } from '../../pages/search/business';
import { buildBusinessQuery } from '../../utils/text';

export interface Data {
  status: string;
  data: IBusiness[];
}

export const fetchBusinesses = async (
  sortField: string,
  filters: ISelectedFilters
) => {
  const query = buildBusinessQuery(sortField, filters);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/business?${query}`
  );

  const data = await response.json();

  // check for error response
  if (!response.ok) {
    const error = data;
    throw new Error(error);
  }
  return data;
};

function useBusinesses(sortField: string, selectedFilters: ISelectedFilters) {
  const query = useQuery<Data, Error>(
    ['business', sortField, selectedFilters],
    () => fetchBusinesses(sortField, selectedFilters),
    {
      enabled: false, // only run when the filter button is clicked
      staleTime: 10000,
    }
  );
  return query;
}

export default useBusinesses;
