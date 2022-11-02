import { IReview } from '@destiny/common/types';
import { IReviewFilterOptions } from '@features/business-details/types';
import { getReviews } from '@features/business-details/utils/api';
import { useQuery } from 'react-query';

export interface IReviewResponse {
  status: string;
  documentCount: number;
  data: IReview[];
}

export default function useReviews(
  businessId: string,
  filterOptions?: IReviewFilterOptions
) {
  const query = useQuery<IReview[], Error>(
    ['reviews', businessId, filterOptions],
    () => getReviews(businessId, filterOptions),
    { staleTime: 1000 * 10 }
  );

  return query;
}
