import { NextFunction, Request, Response } from 'express';
import Business from '../models/businessModel';
import AppError from '../utils/appError';
import catchAsync from '../utils/catchAsync';

const getAllBusinesses = catchAsync(async (req: Request, res: Response) => {
  try {
    const allBusiness = await Business.find();
    res.json({
      status: 'success',
      data: allBusiness,
    });
  } catch (err) {
    res.status(200).json({
      status: 'error',
      message: err,
    });
  }
});

const createBusiness = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const business = await Business.create(req.body);
    res.status(201).json({
      status: 'success',
      data: business,
    });
  }
);

const getBusiness = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const business = await Business.findById(req.params.id).populate('reviews');
    if (!business) {
      return next(new AppError('No business found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: business,
    });
  }
);

const updateBusiness = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const business = await Business.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!business) {
      return next(new AppError('No business found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: business,
    });
  }
);

const deleteBusiness = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const business = await Business.findByIdAndDelete(req.params.id);

    if (!business) {
      return next(new AppError('No business found with that ID', 404));
    }

    res.status(204).json({
      status: 'success',
    });
  }
);

export default {
  getAllBusinesses,
  getBusiness,
  createBusiness,
  updateBusiness,
  deleteBusiness,
};
