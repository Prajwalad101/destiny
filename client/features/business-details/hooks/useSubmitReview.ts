import { IReview } from '@destiny/common/types';
import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

interface Data {
  status: string;
  data: IReview;
}

export default function useSubmitReview(businessId: string) {
  const queryClient = useQueryClient();

  return useMutation(
    (reviewForm: FormData) => postReview(businessId, reviewForm),
    {
      onSuccess(data, variables, context) {
        return queryClient.invalidateQueries([]);
      },
    }
  );
}

async function postReview(businessId: string, reviewData: FormData) {
  const response = await axios.post<Data>(
    `${process.env.NEXT_PUBLIC_HOST}/api/business/${businessId}/reviews`,
    reviewData
  );
  return response;
}
