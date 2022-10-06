import { IReview } from '@destiny/common/types';
import {
  BusinessImageModal,
  ReportUserDropdown,
  ReviewText,
} from '@features/business-details/components';
import RatingIcons from 'components/icons/ratings/RatingIcons';
import Image from 'next/image';
import { useState } from 'react';
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between">
        <div className="mb-3 flex items-center gap-5">
          <div className="h-[45px]">
            <Image
              className="rounded-full"
              src={userProfileImg}
              alt="user-profile"
              width={45}
              height={45}
              objectFit="cover"
            />
          </div>
          <div>
            <p className="pb-1 capitalize">sagar thapa</p>
            <p className="text-sm text-gray-500">
              {getRelativeDate(review.createdAt)}
            </p>
          </div>
        </div>
        <ReportUserDropdown />
      </div>
      <RatingIcons rating={review.rating} size={20} className="mb-4" />
      <ReviewText className="mb-8" />
      <div className="mb-8 flex gap-6 overflow-scroll">
        {images.map((image, index) => {
          if (index >= 2) {
            return;
          }
          return (
            <div
              key={index}
              className="group relative h-[150px] w-[240px] shrink-0 cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <div
                className={classNames(
                  'absolute z-20 h-full w-full rounded-sm hover:opacity-30',
                  index === 1 ? 'bg-black opacity-30' : 'bg-black opacity-0'
                )}
              />
              {index === 1 && (
                <p className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-xl tracking-wider text-white group-hover:underline">
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
      <BusinessImageModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        images={images}
      />
      {/* <p className="mb-5 leading-7 w-2/3">{review.review}</p> */}
      <Feedback likes={review.likes} />
      <div className="border border-gray-300" />
    </div>
  );
}

function Feedback({ likes }: { likes: number }) {
  return (
    <div className="mb-5 flex items-center gap-9">
      <div className="flex flex-col items-center gap-1">
        <BiLike size={24} className="cursor-pointer hover:text-blue-500" />
        <p className="text-gray-700">{likes}</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <BiHeart size={24} className="cursor-pointer hover:text-primaryred" />
        <p className="text-gray-700">8</p>
      </div>
    </div>
  );
}
