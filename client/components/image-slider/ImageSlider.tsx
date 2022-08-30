import Image from 'next/image';
import { CSSProperties, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { classNames } from 'utils/css';

interface ImageSliderProps {
  images: string[];
}

interface Style {
  slider: CSSProperties;
}

function ImageSlider({ images }: ImageSliderProps) {
  const [sliderIndex, setSliderIndex] = useState<number>(0);

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
          <div key={index} className="relative w-[200px] shrink-0">
            <Image src={image} alt="image" layout="fill" objectFit="cover" />
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
  };
  return style;
};

export default ImageSlider;
