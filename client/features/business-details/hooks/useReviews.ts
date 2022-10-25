import { IReview } from '@destiny/common/types';
import { useQuery } from 'react-query';
import { getReviews } from '../utils/api';

export interface IReviewResponse {
  status: string;
  documentCount: number;
  data: IReview[];
}

export default function useReviews(businessId: string) {
  const query = useQuery<IReview[], Error>(
    ['reviews', businessId],
    () => getReviews(businessId),
    { staleTime: 1000 * 10 }
  );

  return query;
}
