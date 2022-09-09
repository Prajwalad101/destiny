import { IReview } from '@destiny/types';
import RatingIcons from 'components/icons/ratings/RatingIcons';
import Slider from 'components/slider/Slider';
import Image from 'next/image';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { getRelativeDate } from 'utils/date';

const images = [
  'https://dummyimage.com/300.png/09f/fff&text=1',
  'https://dummyimage.com/300.png/09f/fff&text=2',
  'https://dummyimage.com/300.png/09f/fff&text=3',
  'https://dummyimage.com/300.png/09f/fff&text=4',
  'https://dummyimage.com/300.png/09f/fff&text=5',
  'https://dummyimage.com/300.png/09f/fff&text=6',
  'https://dummyimage.com/300.png/09f/fff&text=7',
  'https://dummyimage.com/300.png/09f/fff&text=8',
  'https://dummyimage.com/300.png/09f/fff&text=9',
];

function BusinessReviewSection({ reviews }: { reviews: IReview[] }) {
  // ! Temporary Fix
  const userProfileImg =
    'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';

  // If there are no reviews
  if (reviews.length === 0) {
    return (
      <div className="flex justify-center">
        <h2 className="font-rubik text-xl font-medium">No reviews found</h2>
      </div>
    );
  }

  return (
    <div className="mb-5 font-rubik">
      <h4 className="mb-5 text-xl font-medium text-gray-700">Top Reviews</h4>
      <div className="child-notlast:mb-7">
        {reviews.map((review) => (
          <div key={review._id.toString()}>
            {/* User Profile */}
            <div className="mb-2 flex items-center gap-3">
              <Image
                className="rounded-full"
                src={userProfileImg}
                alt="user-profile"
                width={35}
                height={35}
                objectFit="cover"
              />
              <span className="font-medium capitalize">sagar thapa</span>
            </div>
            {/* Rating, Relative Time */}
            <div className="mb-2 flex items-center gap-3">
              <RatingIcons avgRating={review.rating} />
              <span className="text-sm capitalize text-secondarytext">
                {getRelativeDate(review.createdAt)}
              </span>
            </div>
            {/* User Review */}
            <p className="mb-4">{review.review}</p>
            <div className="mb-4 h-[150px]">
              <Slider numItems={images.length}>
                {images.map((image, index) => (
                  <div key={index} className="relative w-1/3 sm:w-1/4 lg:w-1/5">
                    <Image
                      src={image}
                      alt="review-image"
                      layout="fill"
                      objectFit="cover"
                      className="px-1"
                    />
                  </div>
                ))}
              </Slider>
              {/* <ImageSlider
                images={images}
                className="w-1/3 sm:w-1/4 lg:w-1/5"
              /> */}
            </div>
            <Feedback likes={review.likes} />
            {/* Horizontal Line */}
            <div className={`border-b-[1px] border-gray-400`} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Feedback({ likes }: { likes: number }) {
  return (
    <div className="flex items-center gap-7">
      <div className="mb-4 flex items-center gap-2">
        <AiOutlineLike
          size={22}
          className="cursor-pointer hover:text-blue-500"
        />
        <span>{likes} likes</span>
      </div>
      <div className="mb-4 flex items-center gap-2">
        <AiOutlineDislike
          size={22}
          className="cursor-pointer hover:text-primaryred"
        />
      </div>
    </div>
  );
}

export default BusinessReviewSection;
