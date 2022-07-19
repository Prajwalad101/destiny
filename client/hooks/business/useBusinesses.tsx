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
  filters: ISelectedFilters,
  fields: string[]
) => {
  const query = buildBusinessQuery(sortField, filters, fields);

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
  // ** when updating initialFields make sure to update on getServerSideProps also
  const initialFields = ['-description', '-price', '-tags', '-total_rating'];

  const query = useQuery<Data, Error>(
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
