import Image from 'next/image';
import { CSSProperties, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { classNames } from 'utils/css';

// type Percentage = `${string}%`;

interface ImageSliderProps {
  images: string[];
  // imageBreakpoint: ({ [key: number]: Percentage } | { default: Percentage })[];
  imageClassName: string;
}

// {default: 50%, 500: 33%}
// [{default: 50%}, {500: 33%}]

interface Style {
  slider: CSSProperties;
  image: CSSProperties;
}

// Allow users to specify the number of images to display at different screen sizes
// TODO: Get the current screen size
// TODO: Find out which breakpoint the size falls under

function ImageSlider({ images, imageClassName }: ImageSliderProps) {
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  // const windowDimensions = useWindowDimensions();

  const styles = calculateStyles({ sliderIndex });

  const handleLeft = () => {
    setSliderIndex((prevIndex) => {
      // prevent index from decreasing below 1
      if (prevIndex <= 0) return prevIndex;
      return --prevIndex;
    });
    return;
  };

  const handleRight = () => {
    setSliderIndex((prevIndex) => ++prevIndex);
    return;
  };

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Slider */}
      <div className="flex h-full w-full scroll-smooth" style={styles.slider}>
        {images.map((image, index) => (
          <div
            key={index}
            className={classNames(imageClassName, 'relative shrink-0')}
          >
            <Image
              src={image}
              alt="image"
              layout="fill"
              objectFit="cover"
              className="px-1"
            />
          </div>
        ))}
      </div>
      {/* Slider Control Buttons */}
      <LeftButton onClick={handleLeft} className="left-[5px]" />
      <RightButton onClick={handleRight} className="right-[5px]" />
    </div>
  );
}

type ButtonProps = React.HTMLProps<HTMLButtonElement>;

function LeftButton({ onClick, className = '' }: ButtonProps) {
  return (
    <div
      className={classNames(className, 'absolute top-[50%] translate-y-[-50%]')}
    >
      <button
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
        onClick={onClick}
        className="z-10 rounded-full bg-gray-50 p-2 transition-colors hover:bg-primaryred hover:text-xl hover:text-white"
      >
        <BiArrowBack size={20} className="rotate-180" />
      </button>
    </div>
  );
}

interface CalculateStylesProps {
  sliderIndex: number;
}

const calculateStyles = ({ sliderIndex }: CalculateStylesProps) => {
  const style: Style = {
    slider: {
      transform: `translate(${sliderIndex * -100}%)`,
      transition: 'transform 400ms ease-in-out',
    },
    image: {
      paddingLeft: '5px !important',
      paddingRight: '5px !important',
    },
  };

  return style;
};

export default ImageSlider;
