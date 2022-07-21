import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useContainerDimensions } from '../../../hooks/lib/useContainerDimensions';
import { classNames } from '../../../utils/tailwind';

export interface ImageScrollProps {
  images: string[];
}

function ImageScroll({ images }: ImageScrollProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const { width: imageWidth } = useContainerDimensions(imageRef);
  const { width: containerWidth } = useContainerDimensions(imageContainerRef);
  const [scrollPos, setScrollPos] = useState(0);
  const [scrollStatus, setScrollStatus] = useState<string>('start');

  const slideLeft = () => {
    if (!imageContainerRef.current) {
      return;
    }

    // 12 is the padding around container edge (scroll through that space too)
    const newPosition = scrollPos - containerWidth - 12;

    imageContainerRef.current.scrollLeft = newPosition;
    setScrollPos(newPosition);
  };

  const slideRight = () => {
    if (!imageContainerRef.current) {
      return;
    }

    // 12 is the padding around container edge (scroll through that space too)
    const newPosition = scrollPos + containerWidth + 12;
    imageContainerRef.current.scrollLeft = newPosition;

    setScrollPos(newPosition);
  };

  // prevent scroll value from getting greater or smaller than scroll menu container
  useEffect(() => {
    if (scrollPos <= 0) {
      console.log('Setting scroll to start');

      if (scrollPos !== 0) {
        setScrollPos(0);
      }
      setScrollStatus('start');
      return;
    }

    // num of visible images on the screen width
    const noImagesPerContainer = Math.floor(containerWidth / imageWidth);

    // Math.ceil to account for odd number of images
    const numContainers = Math.ceil(images.length / noImagesPerContainer);

    const totalWidth = numContainers * containerWidth; // total width of the scroll menu

    const scrollableWidth = totalWidth - containerWidth; // width that can be scrolled

    if (scrollPos >= scrollableWidth) {
      console.log('Setting scroll to end');
      if (scrollPos !== scrollableWidth) {
        setScrollPos(scrollableWidth);
      }

      setScrollStatus('end');
      return;
    }
    // set a default scroll status as empty(between scrolls)
    setScrollStatus('');
  }, [scrollPos, containerWidth, imageWidth, images.length]);

  console.log('Scroll Pos', scrollPos);

  return (
    <div className="relative w-full sm:w-56">
      {/* Left button */}
      <div
        className={classNames(
          scrollStatus === 'start' ? 'hidden' : 'block',
          'absolute top-[38%] left-2 z-10 cursor-pointer rounded-full bg-white p-2 text-black hover:bg-primaryred hover:text-white'
        )}
        onClick={slideLeft}
      >
        <BiArrowBack size={20} />
      </div>
      {/* Right button */}
      <div
        className={classNames(
          scrollStatus === 'end' ? 'hidden' : 'block',
          'absolute top-[38%] right-2 z-10 cursor-pointer rounded-full bg-white p-2 text-black hover:bg-primaryred hover:text-white'
        )}
        onClick={slideRight}
      >
        <BiArrowBack size={20} className="rotate-180" />
      </div>
      {/* Images */}
      <div
        className="hide-scrollbar relative flex h-[160px] gap-[2%] overflow-x-hidden scroll-smooth"
        ref={imageContainerRef}
      >
        {images.map((image, index) => (
          <div key={index} className="relative w-[49%] shrink-0" ref={imageRef}>
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
