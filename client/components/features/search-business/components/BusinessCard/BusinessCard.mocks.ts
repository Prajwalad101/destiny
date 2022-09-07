import { BusinessCardProps } from '@features/search-business/types';

const card1: BusinessCardProps = {
  business: {
    _id: '6dfj5kivfk5ji98ekd',
    name: 'Vidoo',
    description: 'Primary hyperparathyroidism',
    createdAt: new Date(),
    businessHours: { open: '9:15', close: '21:00' },
    location: {
      type: 'Point',
      coordinates: [24.67964, 38.253338],
      address: '52 Clove Alley',
    },
    features: ['tmbq', 'rvz', 'evlem', 'opb'],
    images: [
      'http://dummyimage.com/138x100.png/ff4444/ffffff',
      'http://dummyimage.com/183x100.png/5fa2dd/ffffff',
      'http://dummyimage.com/145x100.png/dddddd/000000',
    ],
    reviews: [
      {
        review: 'Nice ambience and great dining experience',
        rating: 4,
        _id: '488djkg9kjksd',
        business: 'dk39dfjk6393ljd',
        createdAt: '2021-08-01',
        likes: 0,
        dislikes: 0,
      },
    ],
    category: 'Food and Drinks',
    subCategory: 'Resturants',
    total_rating: 32,
    rating_count: 7,
    price: 'medium',
    avgRating: 4,
  },
};

export const mockBusinessCardProps = {
  card1,
};
