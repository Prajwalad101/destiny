import { IRecommendBusinessCard } from './RecommendedBusinessCard';

const base: IRecommendBusinessCard = {
  name: 'Eat Greek',
  location: 'Kathmandu, Naya Baneshwor',
  image: '/images/business/amer.jpg',
  numReviews: 120,
  avgRating: 4.5,
  status: 'trending',
};
const card1: IRecommendBusinessCard = {
  name: 'Gole Sausages',
  location: 'Kathmandu, Kapan',
  image: '/images/business/amer.jpg',
  numReviews: 11,
  avgRating: 4.5,
};
const card2: IRecommendBusinessCard = {
  name: 'Bajeko Sekuwa',
  location: 'Kathmandu, Kapan',
  image: '/images/business/amer.jpg',
  numReviews: 18,
  avgRating: 4.5,
};

const card3: IRecommendBusinessCard = {
  name: 'Bajeko Sekuwa',
  location: 'Kathmandu, Kapan',
  image: '/images/business/amer.jpg',
  numReviews: 18,
  avgRating: 4.5,
};

export const mockRecommendBusinessCardProps = {
  base,
  card1,
  card2,
  card3,
};
