import ProductCard from '../components/ProductCard';
import { sampleProducts } from '../data';

const HomePage = () => {
  return (
    <div className="max-w-contentContainer mx-auto py-10 grid grid-cold-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 cursor-pointer">
      {sampleProducts.map((product) => (
        <ProductCard product={product} key={product.slug} />
      ))}
    </div>
  );
};

export default HomePage;
