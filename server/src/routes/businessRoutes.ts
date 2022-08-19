import express from 'express';
import multer from 'multer';
import businessController from '../controllers/businessController';
import { multerUtils } from '../utils/multer/index';
import reviewRouter from './reviewRoutes';

const router = express.Router();

// parse formData
const upload = multer({
  storage: multerUtils.storage('./public/images/business/'),
});

router
  .route('/')
  .get(businessController.getAllBusinesses)
  .post(upload.array('images', 10), businessController.createBusiness);

router
  .route('/:id')
  .get(businessController.getBusiness)
  .patch(businessController.updateBusiness)
  .delete(businessController.deleteBusiness);

router.use('/:businessId/reviews', reviewRouter);

export default router;
