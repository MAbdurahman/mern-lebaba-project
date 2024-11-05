import jwt from 'jsonwebtoken';
import {messageHandler} from '../utils/messageHandlerUtils.js';

const JWT_SECRET = process.env.JWT_SECRET_KEY;

export const verifyToken = (req, res, next) => {
   try {
      const token = req.cookies.token;
      // const token = req.headers["authorization"].split(" ")[1]
      if(!token) {
         return messageHandler(res, 'Unauthorized - Invalid Token!', false, 401);
      }

      const decoded = jwt.verify(token, JWT_SECRET);
      if(!decoded){
         return messageHandler(res, 'Unauthorized - Invalid Token!', false, 401);
      }
      req.userId = decoded.userId;
      req.role = decoded.role;
      next();

   } catch (err) {
      console.error('Error verifying token', err.message);
      return messageHandler(res, err.message, false, 401);
   }
}

export default verifyToken;