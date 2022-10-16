import express from 'express';
import reviewController from '../controllers/reviewController';
import {
  deleteBusinessRating,
  incrementBusinessRating,
  setBusinessId,
  updateBusinessRating,
} from '../middlewares/review/reviewMiddleware';
import uploadFiles from '../utils/multer/uploadFiles';

// This router is also mounted on the business router
const router = express.Router({ mergeParams: true });

// attaches the businessId params property to the request body
router.use(setBusinessId);

// multer middleware to process files
const upload = uploadFiles({
  path: '../client/public/uploads/images/reviews/',
  maxCount: 10,
  fieldName: 'image',
});

router.route('/').get(reviewController.getAllReviews).post(
  upload,
  setBusinessId, // set id again since, multer creates a new req.body object
  incrementBusinessRating,
  reviewController.createReview
);

router
  .route('/:id')
  .get(reviewController.getReview)
  .patch(updateBusinessRating, reviewController.updateReview)
  .delete(deleteBusinessRating, reviewController.deleteReview);

export default router;
