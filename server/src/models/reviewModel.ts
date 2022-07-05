import { IReview } from '@destiny/types';
import { model, Schema } from 'mongoose';

const reviewSchema = new Schema<IReview>(
  {
    review: {
      type: String,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: [true, 'Rating cannot be empty'],
    },
    likes: Number,
    dislikes: Number,
    business: {
      type: Schema.Types.ObjectId,
      ref: 'Business',
      required: [true, 'A review must include a business'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Review = model<IReview>('Review', reviewSchema);

export default Review;
