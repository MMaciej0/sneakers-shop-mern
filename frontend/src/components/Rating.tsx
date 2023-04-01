import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

type Props = {
  rating: number;
  reviews: number;
};

const Rating = ({ rating, reviews }: Props) => {
  return (
    <div className="flex py-1 items-center">
      <div className="flex text-highlight ">
        {rating >= 1 ? (
          <FaStar />
        ) : rating >= 0.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
        {rating >= 2 ? (
          <FaStar />
        ) : rating >= 1.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
        {rating >= 3 ? (
          <FaStar />
        ) : rating >= 2.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
        {rating >= 4 ? (
          <FaStar />
        ) : rating >= 3.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
        {rating >= 5 ? (
          <FaStar />
        ) : rating >= 4.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </div>
      {reviews > 0 && <span className="ml-2">{reviews} reviews</span>}
    </div>
  );
};

export default Rating;
