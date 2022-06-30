import { IBusinessCard } from './BusinessCard';

const card1: IBusinessCard = {
  name: 'Laughing Bird Resturant and Bar',
  location: 'Kathmandu, Naya Baneshwor',
  image: '/images/business/amer.jpg',
  numReviews: 120,
  avgRating: 4.5,
  status: 'trending',
  reviews: [
    { id: 1, review: 'Nice ambience and great dining experience' },
    { id: 2, review: 'Friendly staff and resonable pricing' },
  ],
  type: ['resturant', 'bar'],
  isOpen: true,
};

export const mockBusinessCardProps = {
  card1,
};
