import { useEffect, useReducer } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { Product } from '../types/Product';
import { ApiError } from '../types/ApiError';
import { getError } from '../utils';
import Loader from '../components/Loader';
import MessageBox from '../components/MessageBox';

type State = {
  products: Product[];
  loading: boolean;
  error: string;
};

type Action =
  | { type: 'FETCH_DATA' }
  | { type: 'FETCH_SUCCESS'; payload: Product[] }
  | { type: 'FETCH_ERROR'; payload: string };

const initialState = {
  products: [],
  loading: true,
  error: '',
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, loading: true };

    case 'FETCH_SUCCESS':
      return { ...state, loading: false, products: action.payload };

    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

const HomePage = () => {
  const [{ products, loading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: 'FETCH_DATA' });
      try {
        const products = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: products.data });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: getError(error as ApiError) });
      }
    };
    fetchProducts();
  }, []);

  return loading ? (
    <Loader />
  ) : error ? (
    <MessageBox variant="danger" text={error} />
  ) : (
    <div className="max-w-contentContainer mx-auto py-10 grid grid-cold-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {products.map((product) => (
        <ProductCard product={product} key={product.slug} />
      ))}
    </div>
  );
};

export default HomePage;
