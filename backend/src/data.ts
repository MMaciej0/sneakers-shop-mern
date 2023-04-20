import { Product } from './types/Product';

export const sampleProducts: Product[] = [
  {
    name: 'REPOSTO',
    slug: 'reposto-trainers',
    image: '/images/product-1.jpg',
    category: 'Sport',
    brand: 'Nike',
    price: 79,
    countInStock: 0,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet est exercitationem odio minima aliquam aperiam.',
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: 'CROCOS',
    slug: 'crocos-trainers',
    image: '/images/product-2.jpg',
    category: 'Sport',
    brand: 'Lacoste',
    price: 117,
    countInStock: 10,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet est exercitationem odio minima aliquam aperiam.',
    rating: 4.2,
    numReviews: 334,
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
    countInStock: 50,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet est exercitationem odio minima aliquam aperiam.',
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
    countInStock: 50,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet est exercitationem odio minima aliquam aperiam.',
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
    countInStock: 23,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet est exercitationem odio minima aliquam aperiam.',
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
    countInStock: 67,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet est exercitationem odio minima aliquam aperiam.',
  },
];
