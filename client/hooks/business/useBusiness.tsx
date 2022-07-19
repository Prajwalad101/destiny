import { IBusiness } from '@destiny/types';
import { useQuery } from 'react-query';

export interface Data {
  status: string;
  data: IBusiness;
}

export const fetchBusiness = async (businessId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/business/${businessId}`
  );

  const data = await response.json();

  if (!response.ok) {
    const error = data;
    throw new Error(error);
  }

  return data;
};

function useBusiness(businessId: string) {
  const query = useQuery<Data, Error>(
    ['business', businessId],
    () => fetchBusiness(businessId),
    { staleTime: 10000 }
  );

  return query;
}

export default useBusiness;
