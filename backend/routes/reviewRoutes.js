import express from 'express';
import {createReview, getAllReviews, getUserReviews} from '../controllers/reviewControllers.js';

const router = express.Router();

router.post('/create-review', createReview);
router.get('/all-reviews', getAllReviews);
router.get('/:userId', getUserReviews);

export default router;