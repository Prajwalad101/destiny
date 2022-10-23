import { IReview } from '@destiny/common/types';
import { useQuery } from 'react-query';
import { getReviews } from '../utils/api';

export interface IData {
  status: string;
  data: IReview[];
}

export default function useReviews(businessId: string) {
  const query = useQuery<IData, Error>(
    ['reviews', businessId],
    () => getReviews(businessId),
    { staleTime: 1000 * 10 }
  );

  return query;
}
