/************************* imports *************************/
import bodyParser from 'body-parser';
import colors from 'colors';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

/************************* setup config file *************************/
if (process.env.NODE_ENV !== 'production') {
   dotenv.config({path: 'backend/config/config.env'})
}
/************************* variables *************************/
const app = express();
colors.enabled = true;

/************************* middlewares *************************/
if (process.env.NODE_ENV === 'development') {
   app.use(morgan('dev'));
}
app.use(helmet());
app.use(
   cors({
      origin: process.env.FRONTEND_URL,
      methods: ["GET", "POST", "DELETE", "PUT"],
      allowedHeaders: [
         "Content-Type",
         "Authorization",
         "Cache-Control",
         "Expires",
         "Pragma",
      ],
      credentials: true,
   })
);
app.use(express.json()); // for parsing application/json
app.use(express.json({limit: '25mb'})); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/************************* import all routes *************************/
import homeRoute from '../routes/homeRoute.js';
import userRoutes from '../routes/userRoutes.js';
import productRoutes from '../routes/productRoutes.js';
import reviewRoutes from '../routes/reviewRoutes.js';
import orderRoutes from '../routes/orderRoutes.js';

/****************************** routes ******************************/
app.use('/', homeRoute);
app.use('/api/v1.0/users', userRoutes);
app.use('/api/v1.0/products', productRoutes);
app.use('/api/v1.0/reviews', reviewRoutes);
app.use('/api/v1.0/orders', orderRoutes);

export default app;