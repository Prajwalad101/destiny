import { IReview } from '@destiny/common/types';
import { IReviewFilterOptions } from '@features/business-details/types';
import { useQuery } from 'react-query';

export default function useReviews(filterOptions: IReviewFilterOptions) {
  // sort ratings array because order of keys in an array matters
  // modifying ratings from [1,2] to [2,1] should not trigger a refetch
  filterOptions?.ratings && filterOptions.ratings.sort((a, b) => b - a);

  const query = useQuery(
    ['reviews', filterOptions.businessId, filterOptions],
    () => fetchReviews(filterOptions),
    { staleTime: 1000 * 10 }
  );

  return query;
}

async function fetchReviews(
  filterOptions: IReviewFilterOptions
): Promise<IReview[]> {
  const URL = buildQueryURL(filterOptions);

  const response = await fetch(URL);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data.data;
}

function buildQueryURL(filterOptions: IReviewFilterOptions) {
  let URL = `${process.env.NEXT_PUBLIC_HOST}/api/reviews?business=${filterOptions.businessId}`;

  if (filterOptions.sort) {
    URL += `&sort=${filterOptions.sort}`;
  }
  if (filterOptions.ratings && filterOptions.ratings.length !== 0) {
    URL += `&rating[in]=${JSON.stringify(filterOptions.ratings)}`;
  }

  return URL;
}
