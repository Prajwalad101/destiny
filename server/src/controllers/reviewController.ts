import { NextFunction, Request, Response } from 'express';
import Review from '../models/reviewModel';
import catchAsync from '../utils/catchAsync';

const getAllReviews = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    // if businessId is passed on url, get reviews for that business
    const filter = req.params.businessId
      ? { business: req.params.businessId }
      : {};

    const review = await Review.find(filter);

    res.status(201).json({
      status: 'success',
      data: review,
    });
  }
);

const createReview = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    // check if req already contains the business get reviews for
    if (!req.body.business) req.body.business = req.params.businessId;

    const newReview = await Review.create(req.body);

    res.status(201).json({
      status: 'success',
      data: newReview,
    });
  }
);

export default { getAllReviews, createReview };
