import mongoose from 'mongoose';
import { IBusinessCard } from './BusinessCard';

const card1: IBusinessCard = {
  business: {
    _id: new mongoose.Types.ObjectId(),
    name: 'Vidoo',
    description: 'Primary hyperparathyroidism',
    createdAt: new Date(),
    businessHours: { open: '9:15', close: '21:00' },
    location: {
      type: 'Point',
      coordinates: [24.67964, 38.253338],
      address: '52 Clove Alley',
    },
    tags: ['tmbq', 'rvz', 'evlem', 'opb'],
    images: [
      'http://dummyimage.com/138x100.png/ff4444/ffffff',
      'http://dummyimage.com/183x100.png/5fa2dd/ffffff',
      'http://dummyimage.com/145x100.png/dddddd/000000',
    ],
    reviews: [
      {
        review: 'Nice ambience and great dining experience',
        rating: 4,
        _id: new mongoose.Types.ObjectId(),
        business: new mongoose.Types.ObjectId(),
      },
    ],
    total_rating: 32,
    rating_count: 7,
  },
};

export const mockBusinessCardProps = {
  card1,
};
