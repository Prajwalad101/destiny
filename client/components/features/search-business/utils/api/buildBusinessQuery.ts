import { IBusiness } from '@destiny/common/types';

type BusinessFeatures = IBusiness['features'];
type BusinessPrice = IBusiness['price'];

export function buildBusinessQuery(
  sortField: string | undefined,
  filters: { features: BusinessFeatures; price: BusinessPrice } | undefined,
  fields: string[] | undefined
) {
  let sortQuery = '',
    priceQuery = '',
    featuresQuery = '',
    fieldsQuery = '';

  if (sortField) {
    sortQuery = `sort=${sortField}`; // sortField is always defined
  }

  if (filters) {
    priceQuery = `&price=${filters.price}`;

    // features can be an empty array
    if (filters.features.length !== 0) {
      const features = filters.features?.join(',');
      featuresQuery = `&features=${features}`;
    }
  }

  if (fields) {
    fieldsQuery = '&fields=' + fields.join(',');
  }

  // sort=-avgRating&price=cheap&features=delivery,events
  const apiQuery = ''.concat(sortQuery, priceQuery, featuresQuery, fieldsQuery);

  return apiQuery;
}
