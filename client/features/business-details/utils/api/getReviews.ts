import { IReviewResponse } from '@features/business-details/hooks/useReviews';
import axios from 'axios';

async function getReviews(businessId: string) {
  const response = await axios.get<IReviewResponse>(
    `${process.env.NEXT_PUBLIC_HOST}/api/business/${businessId}/reviews`
  );

  return response.data.data;
}

export default getReviews;
