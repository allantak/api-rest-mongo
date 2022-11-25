import { Router } from 'express';
import multer from 'multer';
import path from 'path';

import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { listProductByCategory } from './app/useCases/categories/listProductByCategory';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { createOrder } from './app/useCases/orders/createOrder';
import { deleteOrder } from './app/useCases/orders/deleteOrder';
import { listOrder } from './app/useCases/orders/listOrder';
import { createProduct } from './app/useCases/products/createProducts';
import { listProducts } from './app/useCases/products/listProduct';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'upload'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  })
});

router.get('/categories', listCategories);

router.post('/categories', createCategory);

router.get('/categories/:categoryId/products', listProductByCategory);

router.get('/products', listProducts);

router.post('/products', upload.single('image'), createProduct);

router.get('/orders', listOrder);

router.post('/orders', createOrder);

router.patch('/orders/:orderId', changeOrderStatus);

router.delete('/orders/:orderId', deleteOrder);




