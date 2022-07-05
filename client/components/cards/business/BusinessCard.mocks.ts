import mongoose from 'mongoose';
import { IBusinessCard } from './BusinessCard';

const card1: IBusinessCard = {
  business: {
    _id: new mongoose.Types.ObjectId(),
    name: 'Laughing Bird Resturant and Bar',
    description: 'The best resturant',
    createdAt: new Date(),
    businessHours: { open: '9:15', close: '8:00' },
    rating: 4.5,
    location: {
      type: 'Point',
      coordinates: [123, 3232],
      address: 'Naya Baneshwor, Kathmandu',
    },
    tags: ['resturant', 'business'],
    images: ['/images/business/amer.jpg'],
    reviews: [
      {
        review: 'Nice ambience and great dining experience',
        rating: 4,
        _id: new mongoose.Types.ObjectId(),
        business: new mongoose.Types.ObjectId(),
      },
    ],
    isOpen: true,
  },
};

export const mockBusinessCardProps = {
  card1,
};
