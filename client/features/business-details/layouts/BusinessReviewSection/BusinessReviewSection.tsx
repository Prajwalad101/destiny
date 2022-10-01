import { IReview } from '@destiny/common/types';
import { UserReview } from '@features/business-details/components';
import PrimaryButton from 'components/button/primary/PrimaryButton';
import React from 'react';

function BusinessReviewSection({ reviews }: { reviews: IReview[] }) {
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
          className="bg-black hover:bg-gray-700 px-6 py-2 sm:py-[10px] border-black hover:border-gray-700
          rounded-[3px] hover:shadow-lg"
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
