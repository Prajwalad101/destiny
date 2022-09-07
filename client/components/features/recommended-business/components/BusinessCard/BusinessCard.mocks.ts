import { BusinessCardProps } from '@features/recommended-business/types';

const base: BusinessCardProps = {
  name: 'Eat Greek',
  location: 'Kathmandu, Naya Baneshwor',
  image: '/images/business/amer.jpg',
  status: 'trending',
  total_rating: 30,
  rating_count: 9,
};
const card1: BusinessCardProps = {
  name: 'Gole Sausages',
  location: 'Kathmandu, Kapan',
  image: '/images/business/amer.jpg',
  total_rating: 30,
  rating_count: 9,
};
const card2: BusinessCardProps = {
  name: 'Bajeko Sekuwa',
  location: 'Kathmandu, Kapan',
  image: '/images/business/amer.jpg',
  total_rating: 30,
  rating_count: 9,
};

const card3: BusinessCardProps = {
  name: 'Bajeko Sekuwa',
  location: 'Kathmandu, Kapan',
  image: '/images/business/amer.jpg',
  total_rating: 30,
  rating_count: 9,
};

export const mockBusinessCardProps = {
  base,
  card1,
  card2,
  card3,
};
