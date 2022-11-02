import { IReviewFilterOptions } from '@features/business-details/types';

async function getReviews(
  businessId: string,
  filterOptions?: IReviewFilterOptions
) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/reviews?business=${businessId}&sort=${filterOptions?.sort}`
  );

  const data = await response.json();
  return data.data;
}

export default getReviews;
