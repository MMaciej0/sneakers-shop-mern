import express, { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { isAuth } from '../utils';
import { OrderModel } from '../models/orderModel';
import { Product } from '../models/productModel';

export const orderRouter = express.Router();

orderRouter.post(
  '/',
  isAuth,
  asyncHandler(async (req: Request, res: Response) => {
    if (req.body.orderItems.length === 0) {
      res.status(400).json({ message: 'Your cart is empty' });
    } else {
      const order = await OrderModel.create({
        orderItems: req.body.orderItems.map((item: Product) => ({
          ...item,
          product: item._id,
        })),
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        shippingPrice: req.body.shippingPrice,
        taxPrice: req.body.taxPrice,
        totalPrice: req.body.totalPrice,
        user: req.user._id,
      });
      res.status(201).json({ message: 'Order Created', order: order });
    }
  })
);
