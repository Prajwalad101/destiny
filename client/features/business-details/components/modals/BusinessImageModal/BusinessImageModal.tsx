import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { ButtonProps } from 'types/props';
import { classNames } from 'utils/tailwind';

interface BusinessImageModalProps {
  isOpen: boolean;
  closeModal: () => void;
  images: string[];
}

export default function BusinessImageModal({
  isOpen,
  closeModal,
  images,
}: BusinessImageModalProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
  };

  const handleLeft = () => {
    setSelectedIndex((prevIndex) => --prevIndex);
  };

  const handleRight = () => {
    setSelectedIndex((prevIndex) => ++prevIndex);
  };

  const selectedImage =
    images.find((_, index) => index === selectedIndex) || images[0];

  return (
    <Transition show={isOpen} as={Fragment}>
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
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>
        <div className="fixed inset-0">
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
              <Dialog.Panel className="relative h-[80vh] w-full max-w-7xl rounded-sm bg-white p-4">
                <div className="flex h-full flex-col gap-5 md:flex-row">
                  {/* Main Image */}
                  <div className="relative h-full basis-[75%]">
                    <LeftButton
                      onClick={handleLeft}
                      disabled={selectedIndex <= 0}
                    />
                    <RightButton
                      onClick={handleRight}
                      disabled={selectedIndex >= images.length - 1}
                    />
                    <Image
                      src={selectedImage}
                      alt="business-image"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-sm"
                    />
                  </div>
                  {/* Scrollable Images */}
                  <div className="flex basis-[25%] grid-cols-2 gap-3 overflow-auto md:grid">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className="relative h-full w-1/2 shrink-0 cursor-pointer xs:w-1/3 sm:w-1/5 md:h-[150px] md:w-full"
                        onClick={() => handleImageClick(index)}
                      >
                        {index !== selectedIndex && (
                          <div className="absolute inset-0 z-10 rounded-sm bg-black/20 hover:bg-black/10" />
                        )}

                        <Image
                          key={index}
                          src={image}
                          alt="business-image"
                          layout="fill"
                          objectFit="cover"
                          className="rounded-sm"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

const LeftButton = ({ className = '', onClick, disabled }: ButtonProps) => {
  return (
    <button
      className={classNames(
        className,
        'absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-1',
        disabled
          ? 'cursor-default opacity-40'
          : 'cursor-pointer opacity-80 hover:opacity-100'
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <BiChevronLeft size={30} />
    </button>
  );
};

const RightButton = ({ onClick, className = '', disabled }: ButtonProps) => {
  return (
    <button
      className={classNames(
        className,
        'absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-1',
        disabled
          ? 'cursor-default opacity-40'
          : 'cursor-pointer opacity-80 hover:opacity-100'
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <BiChevronRight size={30} />
    </button>
  );
};
