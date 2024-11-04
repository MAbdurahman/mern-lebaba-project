import express from 'express';
import {createProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct} from '../controllers/productControllers.js';

const router = express.Router();

router.post('/create-product', createProduct);
router.get('/get-all-products', getAllProducts);





export default router;