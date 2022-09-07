import { ISelectedFilters } from '@features/search-business/types';

import { buildBusinessQuery } from '@features/search-business/utils/api';

export const fetchBusinesses = async (
  sortField: string,
  filters: ISelectedFilters,
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
