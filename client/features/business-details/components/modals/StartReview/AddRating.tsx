import { IReviewFormValues } from '@features/business-details/types';
import { UseFormReturn, useFormState } from 'react-hook-form';
import { BsStar, BsStarFill } from 'react-icons/bs';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AddRatingProps = UseFormReturn<IReviewFormValues, any>;

export default function AddRating({
  setValue,
  getValues,
  register,
  control,
}: AddRatingProps) {
  const { errors } = useFormState({ control });

  const getStarIcon = (ratingNo: number) => (
    <>
      <div
        onClick={() => setValue('rating', ratingNo, { shouldValidate: true })}
        className="group cursor-pointer px-1"
      >
        <BsStar
          size={22}
          className="star-empty group-hover:hidden"
          style={getValues('rating') >= ratingNo ? { display: 'none' } : {}}
        />
        <BsStarFill
          size={22}
          className="star-full text-primaryred group-hover:block"
          style={getValues('rating') >= ratingNo ? { display: 'block' } : {}}
        />
      </div>
    </>
  );

  return (
    <div className="mb-10">
      <div>
        <input
          type="number"
          hidden
          readOnly
          {...register('rating', { min: 1, max: 5 })}
        />
      </div>
      <p className="mb-3 text-lg font-medium">Rating</p>
      <div className="ratings mb-3 flex flex-row-reverse justify-end text-gray-700">
        <span className="ml-3 inline-block">({getValues('rating')}/5)</span>
        {getStarIcon(5)}
        {getStarIcon(4)}
        {getStarIcon(3)}
        {getStarIcon(2)}
        {getStarIcon(1)}
      </div>
      {errors.rating?.type === 'min' && (
        <p role="alert" className="text-sm text-red-600">
          * Rating should at least be 1
        </p>
      )}
    </div>
  );
}
