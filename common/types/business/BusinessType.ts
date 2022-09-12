import { ValueOf } from '@destiny/types';

const businessTypes = {
  resturant: 'resturant',
  cafe: 'cafe',
  fastfood: 'fast food',
  hotel: 'hotel',
  bakery: 'bakery',
  gym: 'gym',
  futsal: 'futsal',
  tennis: 'tennis',
  zumba: 'zumba',
  swimming: 'swimming',
  plumbing: 'plumbing',
  electricity: 'electricity',
  cleaning: 'cleaning',
  repairs: 'repairs',
  entertainment: 'entertainment',
  shopping: 'shopping',
  essential: 'essential',
  vehicle: 'vehicles',
};

export type BusinessType = ValueOf<typeof businessTypes>;

export default businessTypes;
