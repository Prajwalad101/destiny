import { useSubmitReview } from '@features/business-details/hooks';
import { IReviewFormValues } from '@features/business-details/types';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import AddRating from './AddRating';
import AddReviewBody from './AddReviewBody';
import Buttons from './Buttons';
import UploadPhotos from './UploadPhotos';

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

  const { handleSubmit } = formMethods;

  const onSubmit: SubmitHandler<IReviewFormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className=" rounded-sm bg-white p-5 md:p-8">
      <h3 className="mb-5 font-merriweather  text-[22px] font-bold md:mb-7">
        Start your review
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AddReviewBody {...formMethods} />
        <AddRating {...formMethods} />
        <UploadPhotos />
        <Buttons onClick={closeModal} />
      </form>
    </div>
  );
}
