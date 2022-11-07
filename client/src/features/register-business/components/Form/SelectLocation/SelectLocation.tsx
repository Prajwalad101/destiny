import { getUserCoordinates } from '@features/register-business/utils/api';
import { useField } from 'formik';
import { useState } from 'react';
import PrimaryButton from 'src/components/button/primary/PrimaryButton';
import { useEffectAfterMount } from 'src/hooks';

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
