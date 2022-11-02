import { IReviewFilterOptions } from '@features/business-details/types';

async function getReviews(
  businessId: string,
  filterOptions?: IReviewFilterOptions
) {
  let URL = `${process.env.NEXT_PUBLIC_HOST}/api/reviews?business=${businessId}`;

  if (filterOptions) {
    URL += getQueryURL(filterOptions);
  }

  const response = await fetch(URL);
  const data = await response.json();

  return data.data;
}

function getQueryURL(filterOptions: IReviewFilterOptions) {
  let URL = '';

  if (filterOptions.sort) {
    URL += `&sort=${filterOptions.sort}`;
  }
  if (filterOptions.ratings && filterOptions.ratings.length !== 0) {
    URL += `&rating[in]=${JSON.stringify(filterOptions.ratings)}`;
  }

  return URL;
}

export default getReviews;
