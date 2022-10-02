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
    setSelectedIndex((prevIndex) => {
      if (prevIndex <= 1) return prevIndex;
      return --prevIndex;
    });
  };

  const handleRight = () => {
    setSelectedIndex((prevIndex) => {
      if (prevIndex >= images.length - 1) return prevIndex;
      return ++prevIndex;
    });
  };

  const selectedImage =
    images.find((_, index) => index === selectedIndex) || images[0];

  return (
    <Transition show={isOpen} as={Fragment}>
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
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>
        <div className="fixed inset-0">
          <div className="flex min-h-full justify-center p-6 items-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full p-4 rounded-sm h-[80vh] max-w-7xl bg-white">
                <div className="flex flex-col md:flex-row h-full gap-5">
                  {/* Main Image */}
                  <div className="relative h-full basis-[75%]">
                    <LeftButton onClick={handleLeft} />
                    <RightButton onClick={handleRight} />
                    <Image
                      src={selectedImage}
                      alt="business-image"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-sm"
                    />
                  </div>
                  {/* Scrollable Images */}
                  <div className="flex md:grid grid-cols-2 basis-[25%] gap-3 overflow-auto">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className="relative h-full w-1/2 sm:w-1/5 xs:w-1/3 md:w-full md:h-[150px] shrink-0 cursor-pointer"
                        onClick={() => handleImageClick(index)}
                      >
                        {index !== selectedIndex && (
                          <div className="absolute inset-0 bg-black/20 z-10 hover:bg-black/10 rounded-sm" />
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

const LeftButton = ({ className = '', onClick }: ButtonProps) => {
  return (
    <button
      className={classNames(
        'absolute left-3 top-1/2 cursor-pointer hover:opacity-100 -translate-y-1/2 z-10 bg-white opacity-80 rounded-full p-1',
        className
      )}
      onClick={onClick}
    >
      <BiChevronLeft size={30} />
    </button>
  );
};

const RightButton = ({ onClick, className = '' }: ButtonProps) => {
  return (
    <button
      className={classNames(
        'absolute right-3 top-1/2 cursor-pointer hover:opacity-100 -translate-y-1/2 z-10 bg-white opacity-80 rounded-full p-1',
        className
      )}
      onClick={onClick}
    >
      <BiChevronRight size={30} />
    </button>
  );
};
