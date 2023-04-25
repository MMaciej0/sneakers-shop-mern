import express, { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel';

export const productRouter = express.Router();

productRouter.get(
  '/',
  asyncHandler(async (req: Request, res: Response) => {
    const products = await Product.find();
    res.json(products);
  })
);

productRouter.get(
  '/:slug',
  asyncHandler(async (req: Request, res: Response) => {
    const product = await Product.findOne({ slug: req.params.slug });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  })
);
