import { useWindowSize } from 'hooks';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { ButtonProps } from 'types/props/button/ButtonProps';
import { getVisibleChildrenCount } from 'utils/dom';
import { classNames } from 'utils/tailwind';

interface ImageSliderProps {
  images: string[];
  className: string;
}

interface ImagesProps {
  images: string[];
  className: string;
  numVisibleChildren: number;
}

function ImageSlider({ images, className }: ImageSliderProps) {
  // slider index increases or decreases on each button click
  const [sliderIndex, setSliderIndex] = useState<number>(1);
  const [numVisibleChildren, setNumVisibleChildren] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  // run useEffect logic on window resize
  const { width } = useWindowSize();

  // get the number of currently visible images on the slider
  useEffect(() => {
    const containerElement = containerRef.current;
    const childElement = childRef.current;

    if (!containerElement || !childElement) return;

    // the number of visible children inside the scroll container
    const numVisibleChildren = getVisibleChildrenCount({
      containerElement,
      childElement,
    });

    if (numVisibleChildren) {
      setNumVisibleChildren(numVisibleChildren);
    }
  }, [sliderIndex, images, width]);

  const handleLeft = () => {
    setSliderIndex((prevIndex) => --prevIndex);
  };

  const handleRight = () => {
    setSliderIndex((prevIndex) => ++prevIndex);
  };

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Slider */}
      <div
        ref={containerRef}
        // translate container based on slider index
        style={{
          transform: `translate(${(sliderIndex - 1) * -100}%)`,
          transition: 'transform 400ms ease-in-out',
        }}
        className="flex h-full w-full scroll-smooth"
      >
        <MemoizedImages
          images={images}
          className={className}
          ref={childRef}
          numVisibleChildren={numVisibleChildren}
        />
      </div>
      {/* Slider Control Buttons */}
      {sliderIndex > 1 && (
        <LeftButton onClick={handleLeft} className="left-[7px]" />
      )}
      {sliderIndex * numVisibleChildren < images.length && (
        <RightButton onClick={handleRight} className="right-[7px]" />
      )}
    </div>
  );
}

function LeftButton({ onClick, className = '' }: ButtonProps) {
  return (
    <div
      className={classNames(className, 'absolute top-[50%] translate-y-[-50%]')}
    >
      <button
        type="button"
        onClick={onClick}
        className={
          'z-10 rounded-full bg-gray-50 p-2 transition-colors hover:bg-primaryred hover:text-xl hover:text-white'
        }
      >
        <BiArrowBack size={20} />
      </button>
    </div>
  );
}

function RightButton({ onClick, className = '' }: ButtonProps) {
  return (
    <div
      className={classNames(className, 'absolute top-[50%] translate-y-[-50%]')}
    >
      <button
        type="button"
        onClick={onClick}
        className="z-10 rounded-full bg-gray-50 p-2 transition-colors hover:bg-primaryred hover:text-xl hover:text-white"
      >
        <BiArrowBack size={20} className="rotate-180" />
      </button>
    </div>
  );
}

const Images = React.forwardRef(
  (
    { images, className, numVisibleChildren }: ImagesProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => (
    <>
      {images.map((image, index) => (
        <div
          ref={ref}
          key={index}
          className={classNames(className, 'relative shrink-0')}
        >
          <Image
            src={image}
            alt="image"
            layout="fill"
            objectFit="cover"
            className={numVisibleChildren !== 1 ? 'px-1' : ''}
          />
        </div>
      ))}
    </>
  )
);

Images.displayName = 'Images';

const MemoizedImages = React.memo(Images);

export default ImageSlider;
