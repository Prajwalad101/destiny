import express from 'express';
import reviewController from '../controllers/reviewController';

const router = express.Router({ mergeParams: true });

// This router is only mounted on the business router
router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(reviewController.createReview);

export default router;
