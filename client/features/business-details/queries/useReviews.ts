import { IReview } from '@destiny/common/types';
import { IReviewFilterOptions } from '@features/business-details/types';
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
  // sort ratings array because order of keys in an array matters
  // modifying ratings from [1,2] to [2,1] should not trigger a refetch
  filterOptions?.ratings && filterOptions.ratings.sort((a, b) => b - a);

  const query = useQuery<IReview[], Error>(
    ['reviews', businessId, filterOptions],
    () => getReviews(businessId, filterOptions),
    { staleTime: 1000 * 10 }
  );

  return query;
}

const getReviews = async (
  businessId: string,
  filterOptions?: IReviewFilterOptions
) => {
  let URL = `${process.env.NEXT_PUBLIC_HOST}/api/reviews?business=${businessId}`;

  if (filterOptions) {
    URL += getQueryURL(filterOptions);
  }

  const response = await fetch(URL);
  const data = await response.json();

  return data.data;
};

const getQueryURL = (filterOptions: IReviewFilterOptions) => {
  let URL = '';

  if (filterOptions.sort) {
    URL += `&sort=${filterOptions.sort}`;
  }
  if (filterOptions.ratings && filterOptions.ratings.length !== 0) {
    URL += `&rating[in]=${JSON.stringify(filterOptions.ratings)}`;
  }

  return URL;
};
