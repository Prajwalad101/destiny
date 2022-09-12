import { IBusiness } from '@destiny/common/types';
import { IQueryData } from '@features/search-business/types';
import {
  buildBusinessQuery,
  fetchBusinesses,
} from '@features/search-business/utils/api';
import { useQuery } from 'react-query';

type Props = {
  sort: string; // sort items based on this field(eg:-createdAt)
  filters: Pick<IBusiness, 'features' | 'price'>; // filter items based on this property
  fields: string[]; // fields to select when fetching items
  enabled: boolean; // only fetch if true,
};

function useBusinesses(props?: Partial<Props>) {
  const queryURL = buildBusinessQuery(
    props?.sort,
    props?.filters,
    props?.fields
  );

  const query = useQuery<IQueryData, Error>(
    ['business', props?.sort, props?.filters, props?.fields],
    () => fetchBusinesses(queryURL),
    {
      enabled: props?.enabled || true, // only run when the filter button is clicked
      staleTime: 1000 * 10,
    }
  );

  return query;
}

export default useBusinesses;
