import { useMutation } from 'react-query';
import { IReviewFormValues } from '../types';
import { postReview } from '../utils/api';

export default function useSubmitReview(businessId: string) {
  const mutation = useMutation((newReviewData: IReviewFormValues) => {
    return postReview(businessId, newReviewData);
  });
  return mutation;
}
