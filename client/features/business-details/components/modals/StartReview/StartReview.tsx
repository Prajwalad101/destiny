import { useSubmitReview } from '@features/business-details/hooks';
import { IReviewFormValues } from '@features/business-details/types';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { buildFormData } from 'utils/browser';
import Buttons from './Buttons';
import ReviewInput from './ReviewInput';
import SelectRating from './SelectRating';
import UploadImages from './UploadImages';

interface StartReviewProps {
  closeModal: () => void;
}

export default function StartReview({ closeModal }: StartReviewProps) {
  const { query } = useRouter();
  const businessId = query.businessId as string;

  const mutation = useSubmitReview(businessId);

  const formMethods = useForm<IReviewFormValues>({
    defaultValues: { review: '', rating: 0 },
  });

  const onSubmit: SubmitHandler<IReviewFormValues> = (data) => {
    const formData = new FormData();
    buildFormData({ formData, data: data });

    if (data.images) {
      data.images.forEach((image) => formData.append('images', image));
    }
  };

  return (
    <div className=" rounded-sm bg-white p-5 md:p-8">
      <h3 className="mb-5 font-merriweather  text-[22px] font-bold md:mb-7">
        Start your review
      </h3>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <ReviewInput {...formMethods} />
        <SelectRating {...formMethods} />
        <UploadImages {...formMethods} />
        <Buttons onClick={closeModal} />
      </form>
    </div>
  );
}
