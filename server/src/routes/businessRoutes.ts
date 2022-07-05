import express from 'express';
import businessController from '../controllers/businessController';
import reviewRouter from './reviewRoutes';

const router = express.Router();

router
  .route('/')
  .get(businessController.getAllBusinesses)
  .post(
    businessController.formatBusinessDate,
    businessController.createBusiness
  );

router
  .route('/:id')
  .get(businessController.getBusiness)
  .patch(
    businessController.formatBusinessDate,
    businessController.updateBusiness
  )
  .delete(businessController.deleteBusiness);

router.use('/:businessId/reviews', reviewRouter);

export default router;
