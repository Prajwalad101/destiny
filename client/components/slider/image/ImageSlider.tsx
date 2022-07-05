import Image from 'next/image';
import { useRef } from 'react';
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
      <div
        className="hide-scrollbar flex h-[200px] w-full overflow-scroll scroll-smooth sm:w-56"
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
      <button onClick={() => slideLeft('scroll', width)}>Scroll Left</button>
      <button onClick={() => slideRight('scroll', width)}>Scroll Right</button>
    </>
  );
}

export default ImageSlider;
