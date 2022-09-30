import { IReview } from '@destiny/common/types';
import RatingIcons from 'components/icons/ratings/RatingIcons';
import Image from 'next/image';
import { BiHeart, BiLike } from 'react-icons/bi';
import { getRelativeDate } from 'utils/date';
import { classNames } from 'utils/tailwind';

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

const userProfileImg =
  'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';

interface UserReviewProps {
  review: IReview;
}

export default function UserReview({ review }: UserReviewProps) {
  return (
    <div>
      <div className="flex items-start gap-5 mb-3">
        <div className="shrink-0">
          <Image
            className="rounded-full"
            src={userProfileImg}
            alt="user-profile"
            width={50}
            height={50}
            objectFit="cover"
          />
        </div>
        <div>
          <p className="capitalize pb-1">sagar thapa</p>
          <p className="capitalize text-gray-500">
            {getRelativeDate(review.createdAt)}
          </p>
        </div>
      </div>
      <RatingIcons rating={review.rating} size={20} className="mb-6" />
      <div className="flex gap-6 mb-6">
        {images.map((image, index) => {
          if (index >= 2) {
            return;
          }
          return (
            <div
              key={index}
              className="relative w-[240px] h-[150px] shrink-0 group cursor-pointer"
            >
              <div
                className={classNames(
                  'absolute w-full h-full rounded-sm z-20 hover:opacity-30',
                  index === 1 ? 'bg-black opacity-30' : 'bg-black opacity-0'
                )}
              />
              {index === 1 && (
                <p className="absolute z-20 text-white text-xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 tracking-wider group-hover:underline">
                  + {images.length - 2} more
                </p>
              )}

              <Image
                key={index}
                src={image}
                alt="review-image"
                layout="fill"
                objectFit="cover"
                className="rounded-sm"
              />
            </div>
          );
        })}
      </div>
      <p className="mb-5 leading-7 w-2/3">{review.review}</p>
      <Feedback likes={review.likes} />
      <div className="border border-gray-300" />
    </div>
  );
}

function Feedback({ likes }: { likes: number }) {
  return (
    <div className="flex items-center gap-9">
      <div className="mb-4 flex items-center flex-col gap-1">
        <BiLike size={24} className="cursor-pointer hover:text-blue-500" />
        <p className="text-gray-700">{likes}</p>
      </div>
      <div className="mb-4 flex flex-col items-center gap-1">
        <BiHeart size={24} className="cursor-pointer hover:text-primaryred" />
        <p className="text-gray-700">8</p>
      </div>
    </div>
  );
}
