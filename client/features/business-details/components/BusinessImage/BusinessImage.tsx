import { ImageGallery } from '@features/business-details/components';
import { MyModal } from 'components';
import Slider from 'components/slider/Slider';
import Image from 'next/image';
import { useState } from 'react';
import { MdOutlinePhotoSizeSelectActual } from 'react-icons/md';
import { getPublicFilePath } from 'utils/text';

interface BusinessImageProps {
  images: string[];
}

export default function BusinessImage({
  images: businessImages,
}: BusinessImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  const images = businessImages.map((image) => getPublicFilePath(image));

  return (
    <>
      <MyModal
        className="relative h-[80vh] w-full max-w-7xl"
        closeModal={() => setIsOpen(false)}
        isOpen={isOpen}
      >
        <ImageGallery images={images} />
      </MyModal>
      <div className="group relative">
        <Slider
          numItems={images.length}
          className="h-[300px] w-full shrink-0 md:h-[400px] md:w-[400px] lg:w-[535px]"
        >
          {images.map((image, key) => (
            <div
              key={key}
              className="relative h-full w-full"
              onClick={() => setIsOpen(true)}
            >
              <Image
                src={image}
                alt="business images"
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </Slider>
        <div className="absolute bottom-3 left-5 flex cursor-pointer items-end gap-3 text-gray-100 opacity-0 transition-opacity hover:underline group-hover:opacity-100">
          <MdOutlinePhotoSizeSelectActual size={25} />
          <span className="inline-block" onClick={() => setIsOpen(true)}>
            View all {images.length} photos
          </span>
        </div>
      </div>
    </>
  );
}
