import {
  Ratings,
  SortReview,
  StartReview,
  UserReview,
} from '@features/business-details/components';
import { useBusiness } from '@features/business-details/hooks';
import { MyModal, Portal, SecondaryButton } from 'components';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { classNames } from 'utils/tailwind';

interface ReviewSectionProps {
  className?: string;
}

export default function ReviewSection({ className = '' }: ReviewSectionProps) {
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

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
    <>
      <MyModal
        isOpen={reviewModalOpen}
        closeModal={() => setReviewModalOpen(false)}
        className="w-full max-w-3xl"
      >
        <StartReview closeModal={() => setReviewModalOpen(false)} />
      </MyModal>
      <div className={classNames(className)}>
        <Portal selector="#start-review-button">
          <SecondaryButton
            className="px-6 py-2 sm:py-[10px]"
            onClick={() => setReviewModalOpen(true)}
          >
            Start Review
          </SecondaryButton>
        </Portal>

        <div className="mb-7 flex flex-wrap-reverse items-center justify-between gap-y-5 gap-x-2">
          <SortReview />
          {/* Search bar */}
          <div className="relative mr-[2px] flex w-max items-center">
            <input
              type="text"
              className="rounded-[4px] border border-gray-500 px-5 py-[9px]"
              placeholder="Search for reviews"
            />
            <AiOutlineSearch className="absolute right-4 shrink-0" size={20} />
          </div>
        </div>
        <div className="mb-7 border-b border-gray-300" />
        <Ratings
          avgRating={businessData.avgRating}
          numReviews={businessData.rating_count}
          className="mb-7"
        />
        <div className="mb-10 border-b border-gray-300" />
        <div className="child-notlast:mb-7">
          {reviews.map((review) => (
            <Fragment key={review._id.toString()}>
              <UserReview review={review} />
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
