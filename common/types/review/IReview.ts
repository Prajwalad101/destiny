import { Types } from 'mongoose';

export interface IReview {
  _id: string;
  review: string;
  rating: number;
  likes: number;
  dislikes: number;
  business: Types.ObjectId;
  createdAt: string;
}
