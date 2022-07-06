import { IBusiness } from '@destiny/types';
import mongoose from 'mongoose';

const businessSchema = new mongoose.Schema<IBusiness>(
  {
    name: {
      type: String,
      unique: true,
      required: [true, 'A business must contain a name'],
    },
    description: {
      type: String,
      required: [true, 'A business must contain a description'],
    },
    businessHours: {
      open: {
        type: String,
        required: true,
      },
      close: {
        type: String,
        required: true,
      },
    },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
      address: String,
    },
    tags: {
      type: [String],
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    total_rating: { type: Number, default: 0 },
    rating_count: { type: Number, default: 0 },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

businessSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'business',
  localField: '_id',
});

businessSchema.pre('find', function (next) {
  this.populate({
    path: 'reviews',
    select: 'review -business',
    perDocumentLimit: 2,
    options: { sort: { likes: -1, createdAt: -1 } },
  });

  next();
});

businessSchema.pre('findOne', function (next) {
  this.populate({
    path: 'reviews',
    select: 'review likes createdAt -business',
    options: { sort: '-likes' },
    perDocumentLimit: 10,
  });

  next();
});

const Business = mongoose.model<IBusiness>('Business', businessSchema);

export default Business;
