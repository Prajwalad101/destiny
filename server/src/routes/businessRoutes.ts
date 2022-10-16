import express from 'express';
import businessController from '../controllers/businessController';
import uploadFiles from '../utils/multer/uploadFiles';
import reviewRouter from './reviewRoutes';

const router = express.Router();

// path to store business images
const filePath = '../client/public/uploads/images/business/';

router
  .route('/')
  .get(businessController.getAllBusinesses)
  .post(
    uploadFiles({ path: filePath, maxCount: 20, fieldName: 'image' }),
    businessController.createBusiness
  );

router
  .route('/:id')
  .get(businessController.getBusiness)
  .patch(businessController.updateBusiness)
  .delete(businessController.deleteBusiness);

router.use('/:businessId/reviews', reviewRouter);

export default router;
