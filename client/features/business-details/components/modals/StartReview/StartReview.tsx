import { Dialog, Transition } from '@headlessui/react';
import { PrimaryButton, SecondaryButton } from 'components';
import { Fragment, useState } from 'react';
import { BsImages, BsStar, BsStarFill } from 'react-icons/bs';

interface StartReviewProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function StartReview({ isOpen, closeModal }: StartReviewProps) {
  const [rating, _setRating] = useState(0);

  const getStarIcon = (rating: number) => (
    <div className="group cursor-pointer px-1" id={rating.toString()}>
      <BsStar size={22} className="star-empty group-hover:hidden" />
      <BsStarFill
        size={22}
        className="star-full text-primaryred group-hover:block"
      />
    </div>
  );

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
              <Dialog.Panel className="w-full max-w-3xl rounded-sm bg-white p-5 md:p-8">
                <h3 className="mb-5 font-merriweather  text-[22px] font-bold md:mb-7">
                  Start your review
                </h3>
                <div className="mb-2 md:mb-5">
                  <label htmlFor="review" className="mb-3 inline-block">
                    Write about your experience
                  </label>
                  <textarea
                    id="review"
                    rows={7}
                    className="mb-3 h-[120px] w-full rounded-md bg-gray-200 px-3 py-2 ring-blue-500 ring-offset-2 focus:outline-none focus:ring sm:h-auto"
                  />
                  <p className="text-right text-sm text-gray-600">0 / 500</p>
                </div>
                <div className="mb-9">
                  <p className="mb-3">Add rating</p>
                  <div className="ratings flex flex-row-reverse justify-end text-gray-700">
                    <span className="ml-3 inline-block">({rating}/5)</span>
                    {getStarIcon(1)}
                    {getStarIcon(2)}
                    {getStarIcon(3)}
                    {getStarIcon(4)}
                    {getStarIcon(5)}
                  </div>
                </div>
                <div className="mb-10 md:mb-16">
                  <p className="mb-3">Upload photos</p>
                  <div className="flex w-full flex-col items-center justify-center gap-4 rounded-md border-2 border-dashed border-gray-500 py-5 md:py-10">
                    <BsImages size={40} />
                    <div className="text-center">
                      <p className="mb-1 cursor-pointer underline hover:text-gray-700">
                        Click to upload
                      </p>
                      <p className="hidden text-gray-700 md:block">
                        or drag and drop images
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-start justify-end gap-4">
                  <SecondaryButton
                    className="h-[45px] w-[120px]"
                    onClick={closeModal}
                  >
                    Cancel
                  </SecondaryButton>
                  <PrimaryButton className="h-[45px] w-[120px]">
                    Post
                  </PrimaryButton>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
