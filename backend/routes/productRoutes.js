import express from 'express';
import {createProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct} from '../controllers/productControllers.js';

const router = express.Router();

router.post('/create-product', createProduct);
router.get('/', getAllProducts);
router.get('/:id', getSingleProduct);
router.patch('/update-product/:id', updateProduct);





export default router;