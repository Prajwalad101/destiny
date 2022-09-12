import { IBusiness } from '@destiny/common/types';

type BusinessFeatures = IBusiness['features'];
type BusinessPrice = IBusiness['price'];

export function buildBusinessQuery(
  sortField: string,
  filters: { features: BusinessFeatures; price: BusinessPrice },
  fields: string[]
) {
  let priceQuery = '',
    featuresQuery = '';

  const sortQuery = `sort=${sortField}`; // sortField is always defined

  priceQuery = `&price=${filters.price}`;

  // features can be an empty array
  if (filters.features?.length !== 0) {
    const features = filters.features?.join(',');
    featuresQuery = `&features=${features}`;
  }

  const fieldsQuery = '&fields=' + fields.join(',');

  // sort=-avgRating&price=cheap&features=delivery,events
  const apiQuery = ''.concat(sortQuery, priceQuery, featuresQuery, fieldsQuery);

  return apiQuery;
}
