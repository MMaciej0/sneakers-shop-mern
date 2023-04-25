import express, { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel';
import { sampleProducts } from '../data';

export const seedRouter = express.Router();

seedRouter.get(
  '/',
  asyncHandler(async (req: Request, res: Response) => {
    await Product.deleteMany({});
    const products = await Product.insertMany(sampleProducts);
    res.json(products);
  })
);
