import { Request, Response } from 'express';
import Business from '../models/business.model';

const getAllBusinesses = async (req: Request, res: Response) => {
  try {
    const allBusiness = await Business.find();
    res.json({
      status: 'success',
      data: allBusiness,
    });
  } catch (err) {
    res.json({
      status: 'error',
      message: err,
    });
  }
};

const createBusiness = async (req: Request, res: Response) => {
  try {
    const business = await Business.create(req.body);
    res.json({
      status: 'success',
      data: business,
    });
  } catch (err) {
    res.json({
      status: 'error',
      message: err,
    });
  }
};

const getBusiness = async (req: Request, res: Response) => {
  try {
    const business = await Business.findById(req.params.id);
    res.json({
      status: 'success',
      data: business,
    });
  } catch (err) {
    res.json({
      status: 'error',
      message: err,
    });
  }
};

const deleteBusiness = async (req: Request, res: Response) => {
  try {
    const business = await Business.findByIdAndDelete(req.params.id);
    res.json({
      status: 'success',
      data: business,
    });
  } catch (err) {
    res.json({
      status: 'error',
      message: err,
    });
  }
};

const updateBusiness = async (req: Request, res: Response) => {
  try {
    const business = await Business.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.json({
      status: 'success',
      data: business,
    });
  } catch (err) {
    res.json({
      status: 'error',
      message: err,
    });
  }
};

export default {
  getAllBusinesses,
  getBusiness,
  createBusiness,
  updateBusiness,
  deleteBusiness,
};
