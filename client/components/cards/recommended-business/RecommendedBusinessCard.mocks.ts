import { IRecommendBusinessCard } from './RecommendedBusinessCard';

const base: IRecommendBusinessCard = {
  name: 'Eat Greek',
  location: 'Kathmandu, Naya Baneshwor',
  image: '/images/business/amer.jpg',
  status: 'trending',
  total_rating: 30,
  rating_count: 9,
};
const card1: IRecommendBusinessCard = {
  name: 'Gole Sausages',
  location: 'Kathmandu, Kapan',
  image: '/images/business/amer.jpg',
  total_rating: 30,
  rating_count: 9,
};
const card2: IRecommendBusinessCard = {
  name: 'Bajeko Sekuwa',
  location: 'Kathmandu, Kapan',
  image: '/images/business/amer.jpg',
  total_rating: 30,
  rating_count: 9,
};

const card3: IRecommendBusinessCard = {
  name: 'Bajeko Sekuwa',
  location: 'Kathmandu, Kapan',
  image: '/images/business/amer.jpg',
  total_rating: 30,
  rating_count: 9,
};

export const mockRecommendBusinessCardProps = {
  base,
  card1,
  card2,
  card3,
};
