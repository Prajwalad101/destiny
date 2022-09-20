import { useWindowSize } from 'hooks';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { ButtonProps } from 'types/props';
import { getVisibleChildrenCount } from 'utils/dom';
import { classNames } from 'utils/tailwind';

interface SliderProps {
  children: React.ReactNode;
  numItems: number;
  className?: string;
  LeftButton?: (_props: ButtonProps) => JSX.Element;
  RightButton?: (_props: ButtonProps) => JSX.Element;
}

function Slider({
  children,
  numItems,
  className = '',
  LeftButton,
  RightButton,
}: SliderProps) {
  // slider index increases or decreases on each button click
  const [sliderIndex, setSliderIndex] = useState<number>(1);
  const [numVisibleChildren, setNumVisibleChildren] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);

  // run useEffect logic on window resize
  const { width } = useWindowSize();

  // get the number of currently visible items on the slider
  useEffect(() => {
    const containerElement = containerRef.current;

    if (!containerElement) return;

    // the number of visible children inside the scroll container
    const numVisibleChildren = getVisibleChildrenCount({
      containerElement,
    });

    if (numVisibleChildren) {
      setNumVisibleChildren(numVisibleChildren);
    }
  }, [sliderIndex, width]);

  const handleLeft = () => {
    setSliderIndex((prevIndex) => --prevIndex);
  };

  const handleRight = () => {
    setSliderIndex((prevIndex) => ++prevIndex);
  };

  const leftButton = LeftButton ? (
    <LeftButton onClick={handleLeft} />
  ) : (
    <SliderLeftButton onClick={handleLeft} />
  );
  const rightButton = RightButton ? (
    <RightButton onClick={handleRight} />
  ) : (
    <SilderRightButton onClick={handleRight} />
  );

  return (
    <div className={classNames(className, 'relative overflow-hidden')}>
      {/* Slider */}
      <div
        ref={containerRef}
        // translate container based on slider index
        style={{
          transform: `translate(${(sliderIndex - 1) * -100}%)`,
          transition: 'transform 400ms ease-in-out',
        }}
        className="flex scroll-smooth child:shrink-0"
      >
        {children}
      </div>
      {/* Slider Control Buttons */}
      {sliderIndex > 1 && leftButton}
      {sliderIndex * numVisibleChildren < numItems && rightButton}
    </div>
  );
}

export default Slider;

const SliderLeftButton = ({ onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        'shadow-md left-[5px] absolute top-[50%] translate-y-[-50%]  z-10 rounded-full bg-gray-50 p-2 transition-colors hover:bg-primaryred hover:text-xl hover:text-white'
      }
    >
      <AiOutlineLeft size={20} />
    </button>
  );
};

const SilderRightButton = ({ onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        'absolute top-[50%] translate-y-[-50%] right-[5px] z-10 rounded-full bg-gray-50 p-2 transition-colors hover:bg-primaryred hover:text-xl hover:text-white shadow-md'
      }
    >
      <AiOutlineRight size={20} />
    </button>
  );
};
