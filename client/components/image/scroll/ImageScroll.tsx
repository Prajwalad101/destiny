import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { classNames } from '../../../utils/css';

interface ImageScrollProps {
  images: string[];
  minItems?: number;
}

function ImageScroll({ images, minItems }: ImageScrollProps) {
  const scrollRef = useRef<HTMLInputElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0); // slider always starts from beginning

  const handleRight = () => {
    if (!scrollRef.current) {
      return;
    }
    scrollRef.current.style.setProperty(
      '--slider-index',
      String(scrollIndex + 1)
    );

    setScrollIndex(scrollIndex + 1);
  };

  const handleLeft = () => {
    if (!scrollRef.current) {
      return;
    }

    scrollRef.current.style.setProperty(
      '--slider-index',
      String(scrollIndex - 1)
    );

    setScrollIndex(scrollIndex - 1);
  };

  // sets a default items-per screen depending on props
  useEffect(() => {
    if (!minItems) {
      return;
    }

    scrollRef.current?.style.setProperty('--no-items', String(minItems));
  }, [minItems]);

  // checks for end of the items list
  const isEnd = () => {
    if (!scrollRef.current) {
      return;
    }
    const itemsPerScreen = getComputedStyle(scrollRef.current).getPropertyValue(
      '--items-per-screen'
    );

    const maxIndex = Math.ceil(images.length / parseInt(itemsPerScreen));

    // scrollIndex starts at 0
    if (scrollIndex + 1 >= maxIndex) {
      return true;
    }

    return false;
  };

  return (
    <div className="relative flex w-full overflow-hidden ">
      {/* Scroll Component */}
      <div className="slider flex w-full" ref={scrollRef}>
        {images.map((image, index) => (
          <div
            key={index}
            className="slider-img relative aspect-square shrink-0"
          >
            <Image
              src={image}
              key={index}
              alt="image"
              layout="fill"
              className="pl-1 pr-1"
            />
          </div>
        ))}
      </div>
      {/* Left Button */}
      <div
        className={classNames(
          'absolute top-[50%] left-[5px] z-10 translate-y-[-50%]',
          scrollIndex === 0 ? 'hidden' : 'block'
        )}
      >
        <SlideButton onClick={handleLeft}>
          <BiArrowBack size={20} />
        </SlideButton>
      </div>
      {/* Right Button */}
      <div
        className={classNames(
          'absolute top-[50%] right-[5px] z-10 translate-y-[-50%]',
          isEnd() ? 'hidden' : 'block'
        )}
      >
        <SlideButton onClick={handleRight}>
          <BiArrowBack size={20} className="rotate-180" />
        </SlideButton>
      </div>
    </div>
  );
}

interface SlideButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

function SlideButton({ children, onClick }: SlideButtonProps) {
  return (
    <button
      onClick={onClick}
      className="z-10 rounded-full bg-gray-50 p-2 hover:bg-primaryred hover:text-xl hover:text-white"
    >
      {children}
    </button>
  );
}

export default ImageScroll;
