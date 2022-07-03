import { Types } from 'mongoose';

export interface IBusiness {
  name: string;
  description: string;
  rating: number;
  createdAt: Date;
  businessHours: { open: string; close: string };
  location: { type: string; coordinates: number[]; address: string };
  tags: string[];
  images: string[];
}

export interface IReview {
  review: string;
  rating: number;
  likes: number;
  dislikes: number;
  business: Types.ObjectId;
}
