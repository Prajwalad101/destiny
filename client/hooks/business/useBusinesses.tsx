import { IBusiness } from '@destiny/types';
import { Dispatch, SetStateAction } from 'react';
import { useQuery } from 'react-query';
import { ISelectedFilters } from '../../pages/search/business';
import { buildBusinessQuery } from '../../utils/text';

interface Data {
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

function useBusinesses(
  sortField: string,
  selectedFilters: ISelectedFilters,
  isFilter: boolean,
  setIsFilter: Dispatch<SetStateAction<boolean>>
) {
  const query = useQuery<Data, Error>(
    ['businesses', sortField, selectedFilters],
    () => fetchBusinesses(sortField, selectedFilters),
    {
      enabled: isFilter,
      staleTime: 10000,
      onSettled: () => setIsFilter(false),
    }
  );
  return query;
}

export default useBusinesses;
