import { NextFunction, Request, Response } from 'express';
import Review from '../models/reviewModel';
import catchAsync from '../utils/catchAsync';

const getAllReviews = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const review = await Review.find();

    res.status(201).json({
      status: 'success',
      data: review,
    });
  }
);

const createReview = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const review = await Review.create(req.body);

    res.status(201).json({
      status: 'success',
      data: review,
    });
  }
);

export default { getAllReviews, createReview };
