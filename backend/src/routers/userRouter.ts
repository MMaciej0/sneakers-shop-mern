import express, { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { UserModel } from '../models/userModel';
import bcrypt from 'bcryptjs';
import { generateToken, isAuth } from '../utils';

export const userRouter = express.Router();

userRouter.use(
  '/login',
  asyncHandler(async (req: Request, res: Response) => {
    const user = await UserModel.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          shippingAddress: user.shippingAddress ?? null,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).json({ message: 'Invalid email or password.' });
  })
);

userRouter.post(
  '/register',
  asyncHandler(async (req: Request, res: Response) => {
    const user = await UserModel.create({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user),
    });
  })
);

userRouter.post(
  '/update',
  isAuth,
  asyncHandler(async (req: Request, res: Response) => {
    const user = await UserModel.findById(req.user._id);

    if (user) {
      await UserModel.updateOne(
        { _id: req.user._id },
        {
          $set: {
            email: req.body.email,
            name: req.body.name,
          },
        }
      );
      res.json(user);
      return;
    }
    res.status(401).json({ message: 'User does not exist' });
  })
);

userRouter.post(
  '/updateShippingAddress',
  isAuth,
  asyncHandler(async (req: Request, res: Response) => {
    const user = await UserModel.findById(req.user._id);
    console.log(req.body);
    if (user) {
      await UserModel.updateOne(
        { _id: req.user._id },
        {
          $set: {
            shippingAddress: req.body,
          },
        }
      );
      res.json(user);
      return;
    }
    res.status(401).json({ message: 'User does not exist' });
  })
);
