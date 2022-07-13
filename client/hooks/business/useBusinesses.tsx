import { IBusiness } from '@destiny/types';
import { QueryKey, useQuery } from 'react-query';
import { ISortItem } from '../../data/sortBusiness.data';

interface Data {
  status: string;
  data: IBusiness[];
}

export const fetchBusinesses = async ({ queryKey }: { queryKey: QueryKey }) => {
  const [, sortField] = queryKey;

  const sortString = `sort=${sortField}`;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/business?${sortString}`
  );
  const data = await response.json();

  // check for error response
  if (!response.ok) {
    const error = data;
    throw new Error(error);
  }
  return data;
};

function useBusinesses(selectedSort: ISortItem) {
  const query = useQuery<Data, Error>(
    ['businesses', selectedSort.sortField],
    fetchBusinesses,
    {
      staleTime: 10000,
    }
  );
  return query;
}

export default useBusinesses;
