import { ISelectedFilters } from 'types/interfaces';

export function buildBusinessQuery(
  sortField: string,
  filters: ISelectedFilters,
  fields: string[]
) {
  let priceQuery = '',
    featuresQuery = '';

  const sortQuery = `sort=${sortField}`; // sortField is always defined

  if (filters.price) {
    priceQuery = `&price=${filters.price}`;
  }

  if (filters.features.length !== 0) {
    const features = filters.features.join(',');
    featuresQuery = `&features=${features}`;
  }

  const fieldsQuery = '&fields=' + fields.join(',');

  // sort=-avgRating&price=cheap&features=delivery,events
  const apiQuery = ''.concat(sortQuery, priceQuery, featuresQuery, fieldsQuery);

  return apiQuery;
}
