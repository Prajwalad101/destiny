import { IData } from '@features/business-details/hooks/useReviews';
import axios from 'axios';

async function getReviews(businessId: string) {
  const response = await axios.get<IData>(
    `${process.env.NEXT_PUBLIC_HOST}/api/business/${businessId}/reviews`
  );

  return response.data;
}

export default getReviews;
