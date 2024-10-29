import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const JWT_SECRET = process.env.JWT_SECRET;

const generateToken = async (userId) => {
   try {
      const user = await User.findById(userId);
      if (!user) {
         throw new Error("User not found!");
      }

      return jwt.sign({userId: user._id, role: user.role}, JWT_SECRET, {
         expiresIn: "1h",
      });
   } catch (err) {}
};

export default generateToken;