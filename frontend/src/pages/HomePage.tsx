import ProductCard from '../components/cards/ProductCard';
import Loader from '../components/Loader';
import MessageBox from '../components/MessageBox';
import { useGetProductsQuery } from '../hooks/fetch/productsHooks';
import { getError } from '../utils';
import { ApiError } from '../types/ApiError';

const HomePage = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  return isLoading ? (
    <Loader />
  ) : error ? (
    <MessageBox variant="danger" text={getError(error as ApiError)} />
  ) : (
    <div className="max-w-contentContainer px-4 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {products?.map((product) => (
        <ProductCard product={product} key={product.slug} />
      ))}
    </div>
  );
};

export default HomePage;
