import { IReview } from '@destiny/common/types';
import { IReviewFormValues } from '@features/business-details/types';
import axios from 'axios';

interface Data {
  status: string;
  data: IReview;
}

async function postReview(businessId: string, reviewData: IReviewFormValues) {
  const response = await axios.post<Data>(
    `${process.env.NEXT_PUBLIC_HOST}/api/business/${businessId}/reviews`,
    reviewData
  );
  return response;
}

export default postReview;
