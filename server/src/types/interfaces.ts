import { Types } from 'mongoose';

export interface IBusiness {
  name: string;
  description: string;
  rating: number;
  createdAt: Date;
}

export interface IReview {
  review: string;
  rating: number;
  likes: number;
  dislikes: number;
  business: Types.ObjectId;
}
