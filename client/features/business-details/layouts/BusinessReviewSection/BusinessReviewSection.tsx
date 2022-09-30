import { IReview } from '@destiny/common/types';
import { UserReview } from '@features/business-details/components';
import PrimaryButton from 'components/button/primary/PrimaryButton';
import React from 'react';

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
        <h2 className="text-xl font-medium">No reviews found</h2>
      </div>
    );
  }

  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-8">
        <h4 className="text-2xl font-bold font-merriweather">
          Reviews
          <span className="text-gray-500 inline-block pl-4">
            ({reviews.length})
          </span>
        </h4>
        <PrimaryButton
          className="bg-black hover:bg-gray-800 px-6 py-2 sm:py-[10px] border-black hover:border-gray-800
          rounded-[3px]"
        >
          Post Review
        </PrimaryButton>
      </div>

      <div className="child-notlast:mb-7">
        {reviews.map((review) => (
          <React.Fragment key={review._id.toString()}>
            <UserReview review={review} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default BusinessReviewSection;
