import { IBusiness } from '@destiny/common/types';

type BusinessFeatures = IBusiness['features'];
type BusinessPrice = IBusiness['price'];

export function buildBusinessQuery(
  sortField: string,
  filters: { features: BusinessFeatures | null; price: BusinessPrice | null },
  fields: string[]
) {
  let priceQuery = '',
    featuresQuery = '';

  const sortQuery = `sort=${sortField}`; // sortField is always defined

  if (filters.price) {
    priceQuery = `&price=${filters.price}`;
  }

  if (filters.features) {
    const features = filters.features.join(',');
    featuresQuery = `&features=${features}`;
  }

  const fieldsQuery = '&fields=' + fields.join(',');

  // sort=-avgRating&price=cheap&features=delivery,events
  const apiQuery = ''.concat(sortQuery, priceQuery, featuresQuery, fieldsQuery);

  return apiQuery;
}
