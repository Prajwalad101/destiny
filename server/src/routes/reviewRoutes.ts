import express from 'express';
import reviewController from '../controllers/reviewController';
import {
  deleteBusinessRating,
  incrementBusinessRating,
  setBusinessId,
  updateBusinessRating,
} from '../middlewares/review/reviewMiddleware';

// This router is also mounted on the business router
const router = express.Router({ mergeParams: true });

// attaches the businessId params property to the request body
router.use(setBusinessId);

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(incrementBusinessRating, reviewController.createReview);

router
  .route('/:id')
  .get(reviewController.getReview)
  .patch(updateBusinessRating, reviewController.updateReview)
  .delete(deleteBusinessRating, reviewController.deleteReview);

export default router;
