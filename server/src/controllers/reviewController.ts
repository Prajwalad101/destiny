import { NextFunction, Request, Response } from 'express';
import Review from '../models/reviewModel';
import { APIFeatures } from '../utils/apiFeatures';
import AppError from '../utils/appError';
import catchAsync from '../utils/catchAsync';

const getAllReviews = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    // if business exists on the body, filter based on that id
    const businessId = req.body.business;
    const filter = businessId ? { business: businessId } : {};

    const features = new APIFeatures(Review.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const review = await features.query;

    res.status(200).json({
      status: 'success',
      documentCount: review.length,
      data: review,
    });
  }
);

const getReview = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: review,
    });
  }
);

const createReview = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const newReview = await Review.create(req.body);

    res.status(201).json({
      status: 'success',
      data: newReview,
    });
  }
);

const updateReview = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const newReview = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!newReview) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: newReview,
    });
  }
);

const deleteReview = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const review = await Review.findByIdAndDelete(req.params.id);

    if (!review) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(204).json({});
  }
);

export default {
  getAllReviews,
  getReview,
  createReview,
  updateReview,
  deleteReview,
};
