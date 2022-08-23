import getUserCoordinates from '@features/create-business/utils/api/getUserCoordinates';
import PrimaryButton from 'components/button/primary/PrimaryButton';
import { useField } from 'formik';
import { useEffectAfterMount } from 'hooks';
import { useState } from 'react';

function SelectLocation() {
  const [, meta, handler] = useField('location.coordinates');
  const [coordinates, setCoordinates] = useState<number[]>([0, 0]);

  const handleClick = async () => {
    try {
      const res = await getUserCoordinates();
      setCoordinates([res.longitude, res.latitude]);
      handler.setValue([res.longitude, res.latitude]);
    } catch (err) {
      console.log(err);
    }
  };

  // validate field after selecting coordinates
  useEffectAfterMount(() => {
    handler.setTouched(true);
  }, [coordinates]);

  return (
    <div>
      <PrimaryButton
        className="mb-5 h-10 w-40"
        onClick={handleClick}
        type="button"
      >
        Set location
      </PrimaryButton>
      {meta.touched && meta.error ? (
        <p className="text-sm text-primaryred">*{meta.error[0]}</p>
      ) : null}
    </div>
  );
}

export default SelectLocation;
