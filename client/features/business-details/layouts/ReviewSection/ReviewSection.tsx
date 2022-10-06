import { Ratings, UserReview } from '@features/business-details/components';
import { useBusiness } from '@features/business-details/hooks';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { classNames } from 'utils/tailwind';

interface ReviewSectionProps {
  className?: string;
}

export default function ReviewSection({ className = '' }: ReviewSectionProps) {
  const { query } = useRouter();
  const businessId = query.businessId as string;

  const result = useBusiness(businessId);
  const businessData = result.data?.data;

  if (!businessData) return <></>;

  const reviews = businessData.reviews || [];

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
      <Ratings
        avgRating={businessData.avgRating}
        numReviews={businessData.rating_count}
        className="mb-12"
      />

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
