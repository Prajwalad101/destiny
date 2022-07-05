import Image from 'next/image';
import { useRef } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { useContainerDimensions } from '../../../hooks/lib/useContainerDimensions';

export interface IImageSlider {
  images: string[];
}

const slideLeft = (id: string, width: number) => {
  const slider = document.getElementById(id) as HTMLDivElement;
  slider.scrollLeft = slider.scrollLeft - width;
};

const slideRight = (id: string, width: number) => {
  const slider = document.getElementById(id) as HTMLDivElement;
  slider.scrollLeft = slider.scrollLeft + width;
};

function ImageSlider({ images }: IImageSlider) {
  const componentRef = useRef<HTMLDivElement>(null);
  const { width } = useContainerDimensions(componentRef);

  return (
    <>
      <div className="relative w-full sm:w-56">
        <button
          className="absolute top-[45%] left-2 z-10 text-white"
          onClick={() => slideLeft('scroll', width)}
        >
          <BsArrowLeftCircleFill size={25} />
        </button>
        <button
          className="absolute top-[45%] right-3 z-10 text-white"
          onClick={() => slideRight('scroll', width)}
        >
          <BsArrowRightCircleFill size={25} />
        </button>

        {/* TODO: Make the id unique for every slider component */}
        <div
          className="hide-scrollbar relative flex h-[200px] overflow-hidden scroll-smooth"
          id="scroll"
          ref={componentRef}
        >
          {images.map((image, index) => (
            <div key={index} className="relative w-full shrink-0">
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
    </>
  );
}

export default ImageSlider;
