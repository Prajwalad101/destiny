import { IBusiness } from '@destiny/types';
import { fetchBusiness } from '@features/business-details/utils/api';
import { useQuery } from 'react-query';

export interface Data {
  status: string;
  data: IBusiness;
}

function useBusiness(businessId: string) {
  const query = useQuery<Data, Error>(
    ['business', businessId],
    () => fetchBusiness(businessId),
    { staleTime: 1000 * 10 }
  );

  return query;
}

export default useBusiness;
