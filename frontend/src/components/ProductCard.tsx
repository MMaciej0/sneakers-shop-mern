import { Link } from 'react-router-dom';
import { Product } from '../types/Product';
import Rating from './Rating';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link to={`/products/${product.slug}`}>
      <div className="group overflow-hidden rounded-t-md my-10 shadow-lg cursor-pointer">
        <div className="overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="object-contain w-full h-full group-hover:scale-105 duration-200"
          />
        </div>

        <div className="p-4 text-lg">
          <h3 className="font-bold text-xl tracking-wide">{product.name}</h3>
          <p>{product.brand}</p>
          <p>${product.price}</p>
          <Rating rating={product.rating} reviews={product.numReviews} />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
