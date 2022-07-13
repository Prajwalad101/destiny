import Image from 'next/image';
import { useRef, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { useContainerDimensions } from '../../../hooks/lib/useContainerDimensions';
import { classNames } from '../../../utils/tailwind';

export interface ImageSliderProps {
  images: string[];
}

function ImageSlider({ images }: ImageSliderProps) {
  const componentRef = useRef<HTMLDivElement>(null);
  const { width } = useContainerDimensions(componentRef);

  const [sliderPosition, setSliderPosition] = useState(
    componentRef.current ? componentRef.current.scrollLeft : 0
  );

  const slideLeft = () => {
    // prevent slider position from decreasing below initial scroll position
    if (sliderPosition <= 0) {
      setSliderPosition(0);
      return;
    }

    if (componentRef.current) {
      componentRef.current.scrollLeft = sliderPosition - width;
    }
    setSliderPosition(sliderPosition - width);
  };

  const slideRight = () => {
    // prevent slider position from increasing greater than the slider itself
    // image width subtracted from total slider width because the last item should not be scrollable
    const totalWidth = images.length * width;
    const scrollableWidth = totalWidth - width;

    if (sliderPosition >= scrollableWidth) {
      setSliderPosition(scrollableWidth);
      return;
    }

    if (componentRef.current) {
      componentRef.current.scrollLeft = sliderPosition + width;
    }
    setSliderPosition(sliderPosition + width);
  };

  console.log(sliderPosition);

  return (
    <>
      <div className="relative w-full sm:w-56">
        <button
          className={classNames(
            sliderPosition === 0 ? 'cursor-default opacity-60' : '',
            'absolute top-[45%] left-2 z-10 text-white'
          )}
          onClick={() => slideLeft()}
        >
          <BsArrowLeftCircleFill size={25} />
        </button>
        <button
          className={classNames(
            sliderPosition >= images.length * width - width
              ? 'cursor-default opacity-60'
              : '',
            'absolute top-[45%] right-3 z-10 text-white'
          )}
          onClick={() => slideRight()}
        >
          <BsArrowRightCircleFill size={25} />
        </button>

        <div
          className="hide-scrollbar relative flex h-[200px] overflow-hidden scroll-smooth"
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
