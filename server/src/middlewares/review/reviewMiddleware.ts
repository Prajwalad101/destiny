import { NextFunction, Request, Response } from 'express';
import Business from '../../models/businessModel';
import Review from '../../models/reviewModel';
import AppError from '../../utils/appError';
import catchAsync from '../../utils/catchAsync';

// increments the fields (rating_count, total_rating) when a review is created
export const incrementBusinessRating = catchAsync(
  async (req: Request, _res: Response, next: NextFunction) => {
    // throw error if businessId is not provided
    if (!req.body.business)
      return next(new AppError('No business id found', 400));

    // throw error if rating is not provided
    if (!req.body.rating) return next(new AppError('No rating found', 400));

    // increment rating_count by one
    // increment total_rating by new rating
    await Business.findOneAndUpdate(
      { _id: req.body.business },
      { $inc: { rating_count: 1, total_rating: req.body.rating } }
    );
    next();
  }
);

// updates the field (total_rating) when a review is updated
export const updateBusinessRating = catchAsync(
  async (req: Request, _res: Response, next: NextFunction) => {
    if (!req.body.rating) return next();

    // throw error if businessId is not given (make businessId mandatory)
    if (!req.body.business)
      return next(new AppError('No business id found.', 400));

    // get the old rating and update new rating based on that
    const review = await Review.findById(req.params.id);
    if (!review) return next();

    const incrementBy = req.body.rating - review.rating;
    console.log(incrementBy);

    // increment total_rating by new rating
    await Business.findOneAndUpdate(
      { _id: req.body.business },
      { $inc: { total_rating: incrementBy } }
    );
    next();
  }
);

// updates the fields (rating_count, total_rating) when a review is deleted
export const deleteBusinessRating = catchAsync(
  async (req: Request, _res: Response, next: NextFunction) => {
    // find the rating of the review
    const review = await Review.findById(req.params.id);
    if (!review) return next();

    const rating = review.rating;

    // decrement rating_count by one
    // decrement total_rating by current rating
    await Business.findOneAndUpdate(
      { _id: review.business },
      { $inc: { rating_count: -1, total_rating: -rating } }
    );
    next();
  }
);

export const setBusinessId = catchAsync(
  async (req: Request, _res: Response, next: NextFunction) => {
    // if request body has no business property set,
    // create that property with businessId from params object
    if (!req.body.business && req.params.businessId)
      req.body.business = req.params.businessId;

    next();
  }
);
