import { useState } from 'react';
import { classNames } from '../../../../utils/css';
import ProgressStatus from '../ui/ProgressStatus';
import { checkTranslate } from '../utils/tailwind';

type handleFunction = () => void;

interface FormSliderProps {
  children: (
    _handleLeft: handleFunction,
    _handleRight: handleFunction,
    _progressStatus: JSX.Element
  ) => JSX.Element;
}

function FormSlider({ children }: FormSliderProps) {
  const [formIndex, setFormIndex] = useState(0);

  const handleLeft = () => {
    if (!(formIndex <= 1)) {
      setFormIndex((prevIndex) => --prevIndex);
    }
  };

  const handleRight = () => {
    if (!(formIndex >= 3)) {
      setFormIndex((prevIndex) => ++prevIndex);
    }
  };

  const progressStatus = (
    <ProgressStatus className="mb-10" formStage={formIndex} />
  );

  return (
    <div className="overflow-hidden">
      <div
        className={classNames(
          checkTranslate(formIndex),
          'flex gap-10 duration-500'
        )}
      >
        {children(handleLeft, handleRight, progressStatus)}
      </div>
    </div>
  );
}

export default FormSlider;
