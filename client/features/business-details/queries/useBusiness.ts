import { IBusiness } from '@destiny/common/types';
import { useQuery } from 'react-query';

export interface Data {
  status: string;
  data: IBusiness;
}

export default function useBusiness(businessId: string) {
  const query = useQuery<Data, Error>(
    ['business', businessId],
    () => fetchBusiness(businessId),
    { staleTime: 1000 * 10 }
  );

  return query;
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
