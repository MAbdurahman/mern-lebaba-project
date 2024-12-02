import Order from './../models/orderModel.js';
import verifyTokenMiddleware from '../middlewares/verifyTokenMiddleware.js';
import verifyAdminMiddleware from '../middlewares/verifyAdminMiddleware.js';
import {messageHandler} from '../utils/messageHandlerUtils.js';

export const creatCheckoutSession = async (req, res) => {
   const {products} = req.body;

   try {
      const lineItems = products.map((product) => ({
         price_data: {
            currency: "usd",
            product_data: {
               name: product.name,
               images: [product.image],
            },
            unit_amount: Math.round(product.price * 100),
         },
         quantity: product.quantity,
      }));

      const session = await stripe.checkout.sessions.create({
         payment_method_types: ["card"],
         line_items: lineItems,
         mode: "payment",
         success_url:
            `http://localhost:5173/success?session_id={CHECKOUT_SESSION_ID}`,
         cancel_url: `http://localhost:5173/cancel`,
      });
      res.json({ id: session.id });
   } catch(err) {
      console.log('error creating checkout session', err.message);
      messageHandler(res, 'Error creating checkout session', false, 500);
   }

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