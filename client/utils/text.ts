import { ISelectedFilters } from '../types/interfaces';

export function buildBusinessQuery(
  sortField: string,
  filters: ISelectedFilters,
  fieldsQuery: string
) {
  let priceQuery = '',
    tagsQuery = '';

  const sortQuery = `sort=${sortField}`; // sortField is always defined

  if (filters.price) {
    priceQuery = `&price=${filters.price}`;
  }

  if (filters.tags.length !== 0) {
    const tags = filters.tags.join(',');
    tagsQuery = `&tags=${tags}`;
  }

  // sort=-avgRating&price=cheap&tags=delivery,events
  const apiQuery = ''.concat(sortQuery, priceQuery, tagsQuery, fieldsQuery);

  return apiQuery;
}
