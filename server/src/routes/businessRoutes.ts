import express from 'express';
import businessController from '../controllers/businessController';

const router = express.Router();

router
  .route('/')
  .get(businessController.getAllBusinesses)
  .post(businessController.createBusiness);

router
  .route('/:id')
  .get(businessController.getBusiness)
  .patch(businessController.updateBusiness)
  .delete(businessController.deleteBusiness);

export default router;
