import { BusinessImageModal } from '@features/business-details/components';
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
  const [isOpen, setIsOpen] = useState(true);

  const images = businessImages.map((image) => getPublicFilePath(image));

  return (
    <>
      <div className="relative group">
        <Slider
          numItems={images.length}
          className="shrink-0 w-full md:w-[400px] h-[300px] md:h-[400px] lg:w-[535px]"
        >
          {images.map((image, key) => (
            <div
              key={key}
              className="relative w-full h-full"
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
        <div className="group-hover:opacity-100 transition-opacity flex opacity-0 absolute bottom-3 left-5 gap-3 items-end text-gray-100 hover:underline cursor-pointer">
          <MdOutlinePhotoSizeSelectActual size={25} />
          <span className="inline-block" onClick={() => setIsOpen(true)}>
            View all {images.length} photos
          </span>
        </div>
      </div>
      <BusinessImageModal
        images={images}
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
      />
    </>
  );
}
