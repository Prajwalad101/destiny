import { useWindowSize } from 'hooks';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { ButtonProps } from 'types/props/button/ButtonProps';
import { classNames } from 'utils/css';
import { getVisibleChildrenCount } from 'utils/dom';

interface ImageSliderProps {
  images: string[];
  imageClassName: string;
  single: boolean;
}

interface ImagesProps {
  images: string[];
  imageClassName: string;
  single?: boolean;
}

function ImageSlider({
  images,
  imageClassName,
  single = false,
}: ImageSliderProps) {
  const [sliderIndex, setSliderIndex] = useState<number>(1);
  const [isScrollBeginning, setIsScrollBeginning] = useState<boolean>(true);
  const [isScrollEnd, setIsScrollEnd] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  const handleLeft = () => {
    if (isScrollBeginning) return;
    setSliderIndex((prevIndex) => --prevIndex);
  };

  const handleRight = () => {
    if (isScrollEnd) return;
    setSliderIndex((prevIndex) => ++prevIndex);
  };

  // run useEffect on window resize
  const { width } = useWindowSize();

  // handle button visibility state to limit scrolling
  useEffect(() => {
    const containerElement = containerRef.current;
    const childElement = childRef.current;

    if (!containerElement || !childElement) return;

    // the number of visible children inside the scroll container
    const numVisibleChildren = getVisibleChildrenCount(
      containerElement,
      childElement
    );

    if (!numVisibleChildren) return;

    // prevent images from scrolling out of bounds
    if (sliderIndex * numVisibleChildren >= images.length) {
      setIsScrollEnd(true);
    } else {
      setIsScrollEnd(false);
    }

    if (sliderIndex <= 1) {
      setIsScrollBeginning(true);
    } else {
      setIsScrollBeginning(false);
    }
  }, [sliderIndex, images, width]);

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
          imageClassName={imageClassName}
          ref={childRef}
          single={single}
        />
      </div>
      {/* Slider Control Buttons */}
      {!isScrollBeginning && (
        <LeftButton onClick={handleLeft} className="left-[7px]" />
      )}
      {!isScrollEnd && (
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
    { images, imageClassName, single }: ImagesProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => (
    <>
      {images.map((image, index) => (
        <div
          ref={ref}
          key={index}
          className={classNames(imageClassName, 'relative shrink-0')}
        >
          <Image
            src={image}
            alt="image"
            layout="fill"
            objectFit="cover"
            className={!single ? 'px-1' : ''}
          />
        </div>
      ))}
    </>
  )
);

Images.displayName = 'Images';

const MemoizedImages = React.memo(Images);

export default ImageSlider;
