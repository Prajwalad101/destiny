import express from 'express';
import businessController from '../controllers/businessController';
import uploadFiles from '../utils/multer/uploadFiles';
import reviewRouter from './reviewRoutes';

const router = express.Router();

router
  .route('/')
  .get(businessController.getAllBusinesses)
  .post(uploadFiles(), businessController.createBusiness);

router
  .route('/:id')
  .get(businessController.getBusiness)
  .patch(businessController.updateBusiness)
  .delete(businessController.deleteBusiness);

router.use('/:businessId/reviews', reviewRouter);

export default router;
