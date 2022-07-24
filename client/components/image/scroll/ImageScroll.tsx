import { useEffect, useRef, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import useIsomorphicLayoutEffect from '../../../hooks/useIsomorphicLayoutEffect';
import { classNames, getCalculatedValue } from '../../../utils/css';

interface ImageScrollProps {
  noItems: number;
  initialItems?: number;
  children: React.ReactNode;
  className?: string;
}

// * uses additional css from slider.css

function ImageScroll({
  noItems,
  initialItems,
  children,
  className = '',
}: ImageScrollProps) {
  const scrollRef = useRef<HTMLInputElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0); // slider always starts from beginning
  const [isScrollEnd, setIsScrollEnd] = useState(false);

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

  // checks for end of the items list
  const isEnd = () => {
    if (!scrollRef.current) {
      return;
    }

    const itemsPerScreen = getComputedStyle(scrollRef.current).getPropertyValue(
      '--items-per-screen'
    );

    // only works for addition of two values between parenthesis
    const items = getCalculatedValue(itemsPerScreen);

    if (!items) {
      return;
    }

    const maxIndex = Math.ceil(noItems / items);

    // scrollIndex starts at 0
    if (scrollIndex + 1 >= maxIndex) {
      setIsScrollEnd(true);
      return;
    }

    setIsScrollEnd(false);
    return;
  };

  // sets a default no-items depending on props
  useEffect(() => {
    if (!initialItems) {
      return;
    }

    scrollRef.current?.style.setProperty(
      '--initial-items',
      String(initialItems)
    );
  }, [initialItems]);

  // check for scroll end state before rendering
  useIsomorphicLayoutEffect(() => {
    isEnd();
  }, [scrollIndex]);

  return (
    <div
      className={classNames('relative flex w-full overflow-hidden', className)}
    >
      {/* Scroll Component */}
      <div className="slider flex w-full" ref={scrollRef}>
        {/* Images */}
        {children}
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
          isScrollEnd ? 'hidden' : 'block'
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
