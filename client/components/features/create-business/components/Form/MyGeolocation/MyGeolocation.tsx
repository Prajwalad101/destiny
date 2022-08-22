import useUserCoordinates from '@features/create-business/hooks/useUserCoordinates';
import PrimaryButton from 'components/button/primary/PrimaryButton';
import { useField } from 'formik';
import { useState } from 'react';

function MyGeolocation() {
  const [isSelect, setIsSelect] = useState(false);
  const [latitude, longitude, _error] = useUserCoordinates(isSelect);
  const [, , typeHandler] = useField('location.type');
  const [, , coordinateHandler] = useField('location.coordinates');

  const handleClick = () => {
    setIsSelect(true);
    typeHandler.setValue('Point');
    coordinateHandler.setValue([longitude, latitude]);
  };

  return (
    <>
      <PrimaryButton className="h-10 w-40" onClick={handleClick} type="button">
        Set location
      </PrimaryButton>
    </>
  );
}

export default MyGeolocation;
