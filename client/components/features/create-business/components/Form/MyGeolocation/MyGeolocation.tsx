import useUserCoordinates from '@features/create-business/hooks/useUserCoordinates';
import PrimaryButton from 'components/button/primary/PrimaryButton';
import { useField } from 'formik';
import { useState } from 'react';

function MyGeolocation() {
  const [isSelect, setIsSelect] = useState(false);
  const [latitude, longitude, _error] = useUserCoordinates(isSelect);
  const [_field, _meta, handler] = useField('location');

  const handleClick = () => {
    setIsSelect(true);
    handler.setValue({ type: 'Point', coordinates: [longitude, latitude] });
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
