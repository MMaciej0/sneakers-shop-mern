import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '../hooks/productsHooks';
import MessageBox from '../components/MessageBox';
import { getError } from '../utils';
import { ApiError } from '../types/ApiError';
import Loader from '../components/Loader';
import Button from '../components/Button';

const SingleProductPage = () => {
  const { slug } = useParams();
  const { data: product, error, isLoading } = useGetProductQuery(slug!);
  return isLoading ? (
    <Loader />
  ) : error ? (
    <MessageBox variant="danger" text={getError(error as ApiError)} />
  ) : !product ? (
    <MessageBox variant="danger" text="Product not found." />
  ) : (
    <div className="max-w-contentContainer mx-auto px-2 py-6 lg:grid grid-cols-2">
      <div className="rounded overflow-hidden">
        <img
          className="w-full h-full object-contain md:max-h-[50vh] lg:max-h-[80vh]"
          src={product.image}
          alt={product.name}
        />
      </div>
      {/* product info */}
      <div className="md:ml-6">
        <ul className="flex flex-col justify-center space-y-2 py-4">
          <li className="border-b-primary/20 border-b-[2px] w-full py-2 text-lg md:text-xl tracking-wide font-bold">
            <h1>{product.name}</h1>
          </li>
          <li className="border-b-primary/20 border-b-[2px] w-full py-2 text-lg md:text-xl tracking-wide font-semibold">
            <h3>{product.brand}</h3>
          </li>
          <li className="border-b-primary/20 border-b-[2px] w-full py-2 text-lg md:text-xl tracking-wide font-semibold">
            <h3>${product.price}</h3>
          </li>
          <li className="border-b-primary/20 border-b-[2px] w-full py-2 text-lg md:text-xl">
            <h3>{product.description}</h3>
          </li>
        </ul>
        {/* product action */}
        <div className="flex flex-col justify-center py-6">
          {/* size selection */}
          <Button label="Add to cart" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
