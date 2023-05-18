import express, { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { ProductModel } from '../models/productModel';
import { sampleProducts, sampleUsers } from '../data';
import User from '../models/userModel';

export const seedRouter = express.Router();

seedRouter.get(
  '/',
  asyncHandler(async (req: Request, res: Response) => {
    await ProductModel.deleteMany({});
    const products = await ProductModel.insertMany(sampleProducts);

    await User.deleteMany({});
    const users = await User.insertMany(sampleUsers);

    res.json({ products, users });
  })
);
