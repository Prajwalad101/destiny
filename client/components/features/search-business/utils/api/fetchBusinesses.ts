import { IBusiness } from '@destiny/common/types';
import { buildBusinessQuery } from '@features/search-business/utils/api';

type BusinessFeatures = IBusiness['features'];
type BusinessPrice = IBusiness['price'];

export const fetchBusinesses = async (
  sortField: string,
  filters: { features: BusinessFeatures; price: BusinessPrice },
  fields: string[]
) => {
  const query = buildBusinessQuery(sortField, filters, fields);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/business?${query}`
  );

  const data = await response.json();

  // check for error response
  if (!response.ok) {
    const error = data;
    throw new Error(error);
  }
  return data;
};
