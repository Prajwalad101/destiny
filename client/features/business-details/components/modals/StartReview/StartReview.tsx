import { useSubmitReview } from '@features/business-details/hooks';
import { IReviewFormValues } from '@features/business-details/types';
import { Dialog, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { buildFormData } from 'utils/browser';
import Buttons from './Buttons';
import ReviewInput from './ReviewInput';
import SelectRating from './SelectRating';
import UploadImages from './UploadImages';

interface StartReviewProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function StartReview({ isOpen, closeModal }: StartReviewProps) {
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
      data.images.forEach((image) => formData.append('image', image));
    }

    mutation.mutate(formData);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-6">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl">
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
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
