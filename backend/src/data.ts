import bcrypt from 'bcryptjs';
import { Product } from './models/productModel';
import { User } from './models/userModel';

export const sampleProducts: Product[] = [
  {
    name: 'REPOSTO',
    slug: 'reposto-trainers',
    image: '/images/product-1.jpg',
    category: 'Sport',
    brand: 'Nike',
    price: 79,
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, ducimus.',
    rating: 4.5,
    numReviews: 10,
    countInStock: [
      { size: 38, qty: 11 },
      { size: 39, qty: 5 },
      { size: 40, qty: 1 },
      { size: 41, qty: 0 },
      { size: 42, qty: 1 },
      { size: 43, qty: 1 },
    ],
  },
  {
    name: 'CROCOS',
    slug: 'crocos-trainers',
    image: '/images/product-2.jpg',
    category: 'Sport',
    brand: 'Lacoste',
    price: 117,
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, ducimus.',
    rating: 4.2,
    numReviews: 334,
    countInStock: [
      { size: 38, qty: 1 },
      { size: 39, qty: 2 },
      { size: 40, qty: 1 },
      { size: 41, qty: 4 },
      { size: 42, qty: 1 },
      { size: 43, qty: 1 },
    ],
  },
  {
    name: 'XT-WINGS 2',
    slug: 'xt-wings-trainers',
    image: '/images/product-3.jpg',
    category: 'Sport',
    brand: 'Salomon',
    price: 129,
    rating: 5.0,
    numReviews: 234,
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, ducimus.',
    countInStock: [
      { size: 38, qty: 11 },
      { size: 39, qty: 5 },
      { size: 40, qty: 1 },
      { size: 41, qty: 0 },
      { size: 42, qty: 1 },
      { size: 43, qty: 1 },
    ],
  },
  {
    name: 'MULTIX',
    slug: 'multix-unisex',
    image: '/images/product-4.jpg',
    category: 'Sport',
    price: 89,
    rating: 3.5,
    brand: 'Adidas',
    numReviews: 345,
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, ducimus.',
    countInStock: [
      { size: 38, qty: 11 },
      { size: 39, qty: 5 },
      { size: 40, qty: 1 },
      { size: 41, qty: 0 },
      { size: 42, qty: 1 },
      { size: 43, qty: 1 },
    ],
  },
  {
    name: 'NUCLEUS',
    slug: 'nucleus-trainers',
    category: 'Sport',
    image: '/images/product-5.jpg',
    price: 40,
    brand: 'Puma',
    rating: 2.5,
    numReviews: 35,
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, ducimus.',
    countInStock: [
      { size: 38, qty: 11 },
      { size: 39, qty: 5 },
      { size: 40, qty: 1 },
      { size: 41, qty: 0 },
      { size: 42, qty: 1 },
      { size: 43, qty: 1 },
    ],
  },
  {
    name: 'SUPER DELUX',
    slug: 'super-delux-trainers',
    category: 'Sport',
    image: '/images/product-6.jpg',
    price: 149,
    brand: 'EA7 Emporio Armani',
    rating: 1.5,
    numReviews: 666,
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, ducimus.',
    countInStock: [
      { size: 38, qty: 11 },
      { size: 39, qty: 5 },
      { size: 40, qty: 1 },
      { size: 41, qty: 0 },
      { size: 42, qty: 1 },
      { size: 43, qty: 1 },
    ],
  },
];

export const sampleUsers: User[] = [
  {
    name: 'Joe',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: true,
  },
  {
    name: 'John',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: false,
  },
];
