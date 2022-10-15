import { IReviewFormValues } from '@features/business-details/types';
import { UseFormReturn, useFormState, useWatch } from 'react-hook-form';
import { classNames } from 'utils/tailwind';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AddReviewBodyProps = UseFormReturn<IReviewFormValues, any>;

export default function AddReviewBody({
  register,
  control,
}: AddReviewBodyProps) {
  const { errors } = useFormState({ control });
  const review = useWatch({ control, name: 'review' });

  return (
    <div className="mb-2 md:mb-5">
      <textarea
        {...register('review', {
          required: true,
          minLength: 10,
          maxLength: 1000,
        })}
        id="review"
        placeholder="Write about your experience"
        rows={7}
        className={classNames(
          'mb-4 h-[120px] w-full rounded-md bg-gray-200 p-4  ring-offset-2 focus:outline-none focus:ring sm:h-auto',
          errors.review ? 'ring-red-500' : 'ring-blue-500'
        )}
      />
      <div className="flex items-center justify-between">
        <p role="alert" className="text-sm text-red-600">
          {errors.review?.type === 'required' && '* This is a required field'}
          {errors.review?.type === 'maxLength' && '* Your review is too long'}
          {errors.review?.type === 'minLength' && '* Your review is too short'}
        </p>
        <p className="text-right text-sm text-gray-600">
          {review.length} / 1000
        </p>
      </div>
      {/* Errors */}
    </div>
  );
}
