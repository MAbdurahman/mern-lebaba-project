import Order from './../models/orderModel.js';
import verifyTokenMiddleware from '../middlewares/verifyTokenMiddleware.js';
import verifyAdminMiddleware from '../middlewares/verifyAdminMiddleware.js';



export const creatCheckoutSession = async (req, res) => {

   res.status(201).send({
      message: 'Checkout session created!'
   })
}//end of createCheckoutSession Function

export const confirmPayment = async (req, res) => {

   res.status(20).send({
      message: 'Payment was successfully confirmed!'
   })
}//end of confirmPayment Function

export const getAllOrders = async (req, res) => {

   res.status(200).send({
      message: 'Received all orders',
   })
}//end of getAllOrders Function

export const getOrdersByEmail = async (req, res) => {

   res.status(200).send({
      message: 'Received orders by the email',
   })
}//end of getOrdersByEmail Function

export const getOrdersById = async (req, res) => {
   res.status(200).send({
      message: 'Received orders by Id',
   })
}//end of getOrderById Function

export const updateOrder = async (req, res) => {
   res.status(200).send({
      message: 'order updated by Id',
   })
}//end of updateOrder Function

export const deleteOrder = async (req, res) => {
   res.status(200).send({
      message: 'order deleted by Id',
   })
}//end of deleteOrder Function