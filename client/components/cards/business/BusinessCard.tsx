import { IBusiness, IReview } from '@destiny/types';
import Link from 'next/link';
import { FaQuoteLeft } from 'react-icons/fa';
import { checkIsOpen } from '../../../utils/api';
import RatingIcons from '../../icons/ratings/RatingIcons';
import ImageSlider from '../../slider/image/ImageSlider';

export interface IBusinessCard {
  business: IBusiness;
}

function BusinessCard({ business }: IBusinessCard) {
  return (
    <Link href={`/search/business/${business._id}`}>
      <a>
        <div className="font-rubik transition-colors hover:bg-gray-50 sm:flex">
          <ImageSlider images={business.images} />
          {/* Body */}
          <div className="grow border-x-2 border-b-2 p-2 sm:border-l-0 sm:border-t-2 sm:p-3">
            <h3 className="mb-2 text-lg font-medium">{business.name}</h3>
            <div className="mb-2 flex items-center gap-4">
              <div className="flex items-center gap-3">
                <RatingIcons
                  totalRating={business.total_rating}
                  ratingCount={business.rating_count}
                />
                <p className="text-sm text-secondarytext">
                  ({business.rating_count})
                </p>
              </div>
              <p className="text-[15px] font-medium text-secondarytext">
                {checkIsOpen(business.businessHours) ? 'Open now' : 'Closed'}
              </p>
            </div>
            <p className="mb-4 text-sm text-secondarytext">
              {business.location.address}
            </p>
            {/* Horizontal Line */}
            <div className="mb-3 hidden border-[1px] sm:block"></div>
            {/* Reviews */}
            <Reviews reviews={business.reviews} />
          </div>
        </div>
      </a>
    </Link>
  );
}

const Reviews = ({ reviews }: { reviews: IReview[] }) => {
  if (reviews.length === 0) {
    return (
      <>
        <p className="mb-2 text-secondarytext">No reviews found</p>
        <p className="text-[10px] font-medium text-primaryred">
          /╲/\╭[ ☉ ﹏ ☉ ]╮/\╱\
        </p>
      </>
    );
  }

  return (
    <>
      {reviews.map((review) => (
        <div
          key={review._id.toString()}
          className="mb-2 flex items-center gap-3"
        >
          <FaQuoteLeft size={15} />
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
            &quot;{review.review}&quot;
          </p>
        </div>
      ))}
    </>
  );
};

export default BusinessCard;
