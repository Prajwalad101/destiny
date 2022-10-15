import { IReviewFormValues } from '@features/business-details/types';
import { UseFormReturn, useFormState, useWatch } from 'react-hook-form';
import { classNames } from 'utils/tailwind';
import InputError from './InputError';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ReviewInputProps = UseFormReturn<IReviewFormValues, any>;

export default function ReviewInput({ register, control }: ReviewInputProps) {
  const { errors } = useFormState({ control });
  const review = useWatch({ control, name: 'review' });

  return (
    <div className="">
      <div className="mb-3 flex items-center gap-3">
        <p className="text-lg font-medium">Review</p>
        <Error errorType={errors.review?.type} />
      </div>
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
      <p className="grow text-right text-sm text-gray-600">
        {review.length} / 1000
      </p>
    </div>
  );
}

function Error({ errorType }: { errorType: string | undefined }) {
  return (
    <>
      {errorType === 'required' && (
        <InputError className="pt-[2px]">(*Required)</InputError>
      )}
      {errorType === 'maxLength' && (
        <InputError className="pt-[3px]">(*Too long)</InputError>
      )}
      {errorType === 'minLength' && (
        <InputError className="pt-[3px]">(*Too short)</InputError>
      )}
    </>
  );
}
