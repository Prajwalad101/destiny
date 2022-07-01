import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';
import RatingIcons from '../../icons/ratings/RatingIcons';

interface IReviews {
  id: number;
  review: string;
}

export interface IBusinessCard {
  name: string;
  location: string;
  image: string;
  numReviews: number;
  avgRating: number;
  status?: string;
  reviews: IReviews[];
  type?: string[];
  isOpen?: boolean;
}
function BusinessCard(props: IBusinessCard) {
  return (
    <div className="font-rubik sm:flex">
      {/* Image */}
      <div className="relative h-[200px] w-full sm:w-56">
        <Image
          src={props.image}
          alt={props.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      {/* Body */}
      <div className="grow border-x-2 border-b-2 p-2 sm:border-l-0 sm:border-t-2 sm:p-3">
        <h3 className="mb-2 text-lg font-medium">{props.name}</h3>
        <div className="mb-2 flex items-center gap-4">
          <div className="flex items-center gap-3">
            <RatingIcons avgRating={props.avgRating} />
            <p className="text-sm text-secondarytext">({props.numReviews})</p>
          </div>
          <p className="text-[15px] font-medium text-secondarytext">
            {props.isOpen ? 'Open now' : 'Closed'}
          </p>
        </div>
        <p className="mb-4 text-sm text-secondarytext">{props.location}</p>
        {/* Horizontal Line */}
        <div className="mb-3 hidden border-[1px] sm:block"></div>
        {/* Reviews */}
        {props.reviews.map((review) => (
          <div key={review.id} className="mb-2 flex items-center gap-3">
            <FaQuoteLeft size={15} />
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
              &quot;{review.review}&quot;
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BusinessCard;
