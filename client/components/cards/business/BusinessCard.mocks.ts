import { IBusinessCard } from './BusinessCard';

const base: IBusinessCard = {
  name: 'Eat Greek',
  location: 'Kathmandu, Naya Baneshwor',
  image: '/images/business/amer.jpg',
  numReviews: 120,
  avgRating: 4.5,
  status: 'trending',
};

export const mockBusinessCardProps = {
  base,
};
