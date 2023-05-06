import express, { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel';
import { sampleProducts, sampleUsers } from '../data';
import User from '../models/userModel';

export const seedRouter = express.Router();

seedRouter.get(
  '/',
  asyncHandler(async (req: Request, res: Response) => {
    await Product.deleteMany({});
    const products = await Product.insertMany(sampleProducts);

    await User.deleteMany({});
    const users = await User.insertMany(sampleUsers);

    res.json({ products, users });
  })
);
