import { IReviewFormValues } from '@features/business-details/types';
import { UseFormReturn, useWatch } from 'react-hook-form';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AddReviewBodyProps = UseFormReturn<IReviewFormValues, any>;

export default function AddReviewBody({
  register,
  formState: { errors },
  control,
}: AddReviewBodyProps) {
  const review = useWatch({ control, name: 'review' });

  return (
    <div className="relative mb-2 md:mb-5">
      <textarea
        {...register('review', {
          required: true,
          minLength: 10,
          maxLength: 1000,
        })}
        id="review"
        placeholder="Write about your experience"
        rows={7}
        className="mb-3 h-[120px] w-full rounded-md bg-gray-200 p-4 ring-blue-500 ring-offset-2 focus:outline-none focus:ring sm:h-auto"
      />
      {/* Errors */}
      {errors.review?.type === 'required' && (
        <p
          role="alert"
          className="absolute bottom-1 left-0 text-sm text-red-600"
        >
          * This is a required field
        </p>
      )}
      {errors.review?.type === 'minLength' && (
        <p
          role="alert"
          className="absolute bottom-1 left-0 text-sm text-red-600"
        >
          * Your review is too short
        </p>
      )}
      {errors.review?.type === 'maxLength' && (
        <p
          role="alert"
          className="absolute bottom-1 left-0 text-sm text-red-600"
        >
          * Your review is too long
        </p>
      )}
      <p className="text-right text-sm text-gray-600">{review.length} / 1000</p>
    </div>
  );
}
