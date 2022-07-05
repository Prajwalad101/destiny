import { NextFunction, Request, Response } from 'express';
import Business from '../models/businessModel';
import AppError from '../utils/appError';
import catchAsync from '../utils/catchAsync';
import { setDate } from '../utils/date';

// changes businessHours from string to date format with the same value
const formatBusinessDate = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  if (!req.body.businessHours) {
    next();
  }

  const businessHours = req.body.businessHours;
  const { open, close } = businessHours;

  const openDate = setDate(open);
  const closeDate = setDate(close);

  businessHours.open = openDate;
  businessHours.close = closeDate;

  next();
};

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
      return next(new AppError('No document found with that ID', 404));
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
      return next(new AppError('No document found with that ID', 404));
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
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(204).json({
      status: 'success',
    });
  }
);

export default {
  formatBusinessDate,
  getAllBusinesses,
  getBusiness,
  createBusiness,
  updateBusiness,
  deleteBusiness,
};
