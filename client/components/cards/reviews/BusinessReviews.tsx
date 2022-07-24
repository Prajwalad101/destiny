import { IReview } from '@destiny/types';
import Image from 'next/image';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { getRelativeDate } from '../../../utils/date';
import RatingIcons from '../../icons/ratings/RatingIcons';
import ImageScroll from '../../image/scroll/ImageScroll';

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

function BusinessReviews({ reviews }: { reviews: IReview[] }) {
  return (
    <div className="mb-5 font-rubik">
      <h4 className="mb-5 text-xl font-medium text-gray-700">Top Reviews</h4>
      <div className="child-notlast:mb-7">
        {reviews.map((review) => (
          <div key={review._id.toString()}>
            {/* Use Profile */}
            <div className="mb-2 flex items-center gap-3">
              <Image
                className="rounded-full"
                src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
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
            <ImageScroll
              noItems={images.length}
              initialItems={3}
              className="mb-4"
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="slider-img relative h-[150px] shrink-0"
                >
                  <Image
                    src={image}
                    key={index}
                    alt="image"
                    layout="fill"
                    className="slider-next-img"
                    objectFit="cover"
                  />
                </div>
              ))}
            </ImageScroll>
            <Feedback likes={review.likes} />
            {/* Horizontal Line */}
            <div className={`border-b-[1px] border-gray-400`} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Feedback({ likes }: { likes: number | undefined }) {
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

export default BusinessReviews;
