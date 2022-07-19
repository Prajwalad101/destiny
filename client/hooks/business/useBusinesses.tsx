import { IBusiness } from '@destiny/types';
import { useQuery } from 'react-query';
import { ISelectedFilters } from '../../types/interfaces';
import { buildBusinessQuery } from '../../utils/text';

export interface Data {
  status: string;
  data: IBusiness[];
}

export const fetchBusinesses = async (
  sortField: string,
  filters: ISelectedFilters
) => {
  const fieldsQuery = '&fields=-description,-price,-tags,-total_rating';

  const query = buildBusinessQuery(sortField, filters, fieldsQuery);

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

function useBusinesses(
  sortField: string,
  selectedFilters: ISelectedFilters,
  isFilter: boolean
) {
  const query = useQuery<Data, Error>(
    ['business', sortField, selectedFilters],
    () => fetchBusinesses(sortField, selectedFilters),
    {
      enabled: isFilter, // only run when the filter button is clicked
      staleTime: 10000,
    }
  );
  return query;
}

export default useBusinesses;
