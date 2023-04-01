import { Product } from '../types/Product';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group overflow-hidden rounded-t-md my-10 shadow-lg cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full group-hover:scale-105 duration-200"
        />
      </div>

      <div className="p-4 text-lg">
        <h3 className="font-bold text-xl tracking-wide">{product.name}</h3>
        <p>{product.brand}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
