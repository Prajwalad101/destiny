import { IBusinessCard } from './RecommendedBusinessCard';

const base: IBusinessCard = {
  name: 'Eat Greek',
  location: 'Kathmandu, Naya Baneshwor',
  image: '/images/business/amer.jpg',
  numReviews: 120,
  avgRating: 4.5,
  status: 'trending',
};
const card1: IBusinessCard = {
  name: 'Gole Sausages',
  location: 'Kathmandu, Kapan',
  image: '/images/business/amer.jpg',
  numReviews: 11,
  avgRating: 4.5,
};
const card2: IBusinessCard = {
  name: 'Bajeko Sekuwa',
  location: 'Kathmandu, Kapan',
  image: '/images/business/amer.jpg',
  numReviews: 18,
  avgRating: 4.5,
};

const card3: IBusinessCard = {
  name: 'Bajeko Sekuwa',
  location: 'Kathmandu, Kapan',
  image: '/images/business/amer.jpg',
  numReviews: 18,
  avgRating: 4.5,
};

export const mockBusinessCardProps = {
  base,
  card1,
  card2,
  card3,
};
