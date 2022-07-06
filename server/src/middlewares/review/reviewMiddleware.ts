import { NextFunction, Request, Response } from 'express';
import Business from '../../models/businessModel';
import Review from '../../models/reviewModel';
import catchAsync from '../../utils/catchAsync';

// updates the fields (rating_count, total_rating) when a review is created or updated
export const updateBusinessRating = catchAsync(
  async (req: Request, _res: Response, next: NextFunction) => {
    let total_rating = 0;

    // request body contains the new rating, set total_rating
    req.body.rating && (total_rating = req.body.rating);

    // increment rating_count by one
    // increment total_rating by new rating
    await Business.findOneAndUpdate(
      { _id: req.body.business },
      { $inc: { rating_count: 1, total_rating: total_rating } }
    );
    next();
  }
);

// updates the fields (rating_count, total_rating) when a review is deleted
export const deleteBusinessRating = catchAsync(
  async (req: Request, _res: Response, next: NextFunction) => {
    const reviewId = req.params.id;

    // find the rating of the review
    const review = await Review.findById(req.params.id);
    if (!review) {
      return next();
    }

    const rating = review.rating;

    // decrement rating_count by one
    // decrement total_rating by current rating
    await Business.findOneAndUpdate(
      { reviews: { id: reviewId } },
      { $inc: { rating_count: -1, total_rating: -rating } }
    );
    next();
  }
);

export const setBusinessId = catchAsync(
  async (req: Request, _res: Response, next: NextFunction) => {
    // if request body has no business property set,
    // create that property with businessId from params object
    if (!req.body.business) req.body.business = req.params.businessId;

    next();
  }
);
