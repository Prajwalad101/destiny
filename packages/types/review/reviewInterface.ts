import { Types } from 'mongoose';

export interface IReview {
  _id: Types.ObjectId;
  review: string;
  rating: number;
  likes: number;
  dislikes: number;
  business: Types.ObjectId;
  createdAt: string;
}
