import { Types } from 'mongoose';
import { IReview } from '../review/reviewInterface';

export interface IBusiness {
  _id: Types.ObjectId;
  name: string;
  description: string;
  price: string;
  createdAt?: Date;
  businessHours: { open: string; close: string };
  location: { type: 'Point'; coordinates: number[]; address?: string };
  tags: string[];
  images: string[];
  reviews: IReview[];
  total_rating: number;
  rating_count: number;
  avgRating: number;
}

export interface IBusinessCategory {
  name: string;
  subCategories: string[];
}
