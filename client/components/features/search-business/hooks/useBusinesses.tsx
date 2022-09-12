import { IBusiness } from '@destiny/types';
import { IQueryData } from '@features/search-business/types';
import { fetchBusinesses } from '@features/search-business/utils/api';
import { useQuery } from 'react-query';

type Props = {
  sort: string; // sort items based on this field(eg:-createdAt)
  filters: Pick<IBusiness, 'features' | 'price'>; // filter items based on this property
  fields: string[]; // fields to select when fetching items
  enabled: boolean; // only fetch if true,
};

function useBusinesses({ sort, filters, fields, enabled }: Props) {
  const query = useQuery<IQueryData, Error>(
    ['business', sort, filters, fields],
    () => fetchBusinesses(sort, filters, fields),
    {
      enabled: enabled, // only run when the filter button is clicked
      staleTime: 1000 * 10,
    }
  );

  return query;
}

export default useBusinesses;
