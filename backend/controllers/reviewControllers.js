import Review from '../models/reviewModel.js';
import Product from '../models/productModel.js';
import {messageHandler} from '../utils/messageHandlerUtils.js';


export const createReview = async (req, res) => {

   res.status(201).send({
      success: true,
      message: 'Review created successfully.'
   })

}//end of createReview Function

export const getAllReviews = async (req, res) => {

   res.status(200).send({
      success: true,
      message: 'All reviews retrieved successfully.'
   })

}//end of getAllReviews Function


export const getUserReviews = async (req, res) => {

   res.status(200).send({
      success: true,
      message: 'User reviews retrieved successfully.'
   })

}//end of getUserReviews Function