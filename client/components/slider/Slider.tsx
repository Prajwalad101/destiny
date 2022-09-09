import { useWindowSize } from 'hooks';
import React, { useEffect, useRef, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { ButtonProps } from 'types/props/button/ButtonProps';
import { getVisibleChildrenCount } from 'utils/dom';
import { classNames } from 'utils/tailwind';

interface SliderProps {
  children: React.ReactNode;
  numItems: number;
  className?: string;
  leftButton?: JSX.Element;
  rightButton?: JSX.Element;
}

function Slider({
  children,
  numItems,
  className = '',
  leftButton,
  rightButton,
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

  // if slide button is defined, attach a div with onClick handler
  // if not defined, use the default buttons
  leftButton = leftButton ? (
    <div onClick={handleLeft}>{leftButton}</div>
  ) : (
    <SliderButton onClick={handleLeft} className="left-[7px]">
      <BiArrowBack size={20} />
    </SliderButton>
  );

  rightButton = rightButton ? (
    <div onClick={handleRight}>{rightButton}</div>
  ) : (
    <SliderButton onClick={handleRight} className="right-[7px] ">
      <BiArrowBack size={20} className="rotate-180" />{' '}
    </SliderButton>
  );

  return (
    <div
      className={classNames(
        className,
        'relative h-full w-full overflow-hidden'
      )}
    >
      {/* Slider */}
      <div
        ref={containerRef}
        // translate container based on slider index
        style={{
          transform: `translate(${(sliderIndex - 1) * -100}%)`,
          transition: 'transform 400ms ease-in-out',
        }}
        className="flex h-full w-full scroll-smooth child:shrink-0"
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

function SliderButton({ onClick, className = '', children }: ButtonProps) {
  return (
    <div
      className={classNames(
        className,
        'absolute top-[50%] translate-y-[-50%] '
      )}
    >
      <button
        type="button"
        onClick={onClick}
        className={
          'z-10 rounded-full bg-gray-50 p-2 transition-colors hover:bg-primaryred hover:text-xl hover:text-white'
        }
      >
        {/* <BiArrowBack size={20} /> */}
        {children}
      </button>
    </div>
  );
}
