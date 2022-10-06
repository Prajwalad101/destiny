import { IReview } from '@destiny/common/types';
import { UserReview } from '@features/business-details/components';
import { SecondaryButton } from 'components';
import { Fragment } from 'react';
import { classNames } from 'utils/tailwind';

interface ReviewSectionProps {
  reviews: IReview[];
  className?: string;
}

export default function ReviewSection({
  reviews,
  className = '',
}: ReviewSectionProps) {
  // If there are no reviews
  if (reviews.length === 0) {
    return (
      <div className="flex justify-center">
        <h2 className="text-xl font-medium">No reviews found</h2>
      </div>
    );
  }

  return (
    <div className={classNames(className)}>
      <div className="mb-8 flex items-center justify-between">
        <h4 className="font-merriweather text-2xl font-bold">
          Reviews
          <span className="inline-block pl-4 text-gray-500">
            ({reviews.length})
          </span>
        </h4>
        <SecondaryButton className="px-6 py-2 sm:py-[10px]">
          Post Review
        </SecondaryButton>
      </div>

      <div className="child-notlast:mb-7">
        {reviews.map((review) => (
          <Fragment key={review._id.toString()}>
            <UserReview review={review} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
