import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import { productRouter } from './routers/productRouter';
import { seedRouter } from './routers/seedRouter';
import { userRouter } from './routers/userRouter';
import { orderRouter } from './routers/orderRouter';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mern-tut';
mongoose.set('strictQuery', true);

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('connected to mongo'))
  .catch(() => console.log('mongo error'));

const app = express();
const port = 4000;
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productRouter);
app.use('/api/seed', seedRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
