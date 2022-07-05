import { Types } from 'mongoose';
import { IReview } from '../review/reviewInterface';

export interface IBusiness {
  _id: Types.ObjectId;
  name: string;
  description: string;
  rating: number;
  createdAt?: Date;
  businessHours: { open: Date; close: Date };
  location: { type: string; coordinates: number[]; address?: string };
  tags: string[];
  images: string[];
  reviews: IReview[];
}
