import { Types } from 'mongoose';
import Image from 'next/image';
import { useRef } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useContainerDimensions } from '../../../hooks/lib/useContainerDimensions';

export interface ImageScrollProps {
  images: string[];
  businessId: Types.ObjectId;
}

function ImageScroll({ images, businessId }: ImageScrollProps) {
  const id = businessId.toString();
  const componentRef = useRef<HTMLDivElement>(null);
  const { width: imageWidth } = useContainerDimensions(componentRef);

  const slideLeft = () => {
    const slider = document.getElementById(id) as HTMLDivElement;
    slider.scrollLeft = slider.scrollLeft - imageWidth;
  };

  const slideRight = () => {
    const slider = document.getElementById(id) as HTMLDivElement;
    slider.scrollLeft = slider.scrollLeft + imageWidth;
  };

  return (
    <div className="relative w-full sm:w-56">
      {/* Left button */}
      <div
        className="absolute top-[38%] left-2 z-10 cursor-pointer rounded-full bg-white p-2 text-black hover:bg-primaryred hover:text-white"
        onClick={slideLeft}
      >
        <BiArrowBack size={23} />
      </div>
      {/* Right button */}
      <div
        className="absolute top-[38%] right-2 z-10 cursor-pointer rounded-full bg-white p-2 text-black hover:bg-primaryred hover:text-white"
        onClick={slideRight}
      >
        <BiArrowBack size={23} className="rotate-180" />
      </div>
      {/* Images */}
      <div
        className="hide-scrollbar relative flex h-[160px] gap-4 overflow-x-hidden scroll-smooth"
        id={id}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-[200px] shrink-0"
            ref={componentRef}
          >
            <Image
              src={image}
              alt="business-image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageScroll;
