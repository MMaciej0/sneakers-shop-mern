import express, { Request, Response } from 'express';
import cors from 'cors';
import { sampleProducts } from './data';
import { Product } from './types/Product';

const app = express();
const port = 4000;
app.use(cors());

const products: Product[] = sampleProducts;

app.get('/api/products', (req: Request, res: Response) => {
  res.json(products);
});

app.get('/api/products/:slug', (req: Request, res: Response) => {
  res.json(products.find((product) => product.slug === req.params.slug));
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
