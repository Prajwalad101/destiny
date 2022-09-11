import { BusinessFeatures } from '@destiny/common/data';
import { IReview, ValueOf } from '@destiny/common/types';

export interface IBusiness {
  _id: string;
  name: string;
  description: string;
  price: 'cheap' | 'medium' | 'high' | 'exclusive';
  createdAt?: Date;
  businessHours: { open: string; close: string };
  location: { type: 'Point'; coordinates: number[]; address?: string };
  category: string;
  subCategory: string;
  features: ValueOf<typeof BusinessFeatures>[];
  images: string[];
  reviews?: IReview[];
  total_rating: number;
  rating_count: number;
  avgRating: number;
}

export interface IBusinessCategory {
  name: string;
  subCategories: string[];
}
