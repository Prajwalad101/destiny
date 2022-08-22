import getUserCoordinates from '@features/create-business/utils/api/getUserCoordinates';
import PrimaryButton from 'components/button/primary/PrimaryButton';
import { useField } from 'formik';

function SelectGeolocation() {
  const [, meta, handler] = useField('location.coordinates');

  const handleClick = async () => {
    try {
      const res = await getUserCoordinates();
      console.log(res);
      handler.setValue([res.longitude, res.latitude]);
    } catch (err) {
      console.log(err);
    }
  };

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

export default SelectGeolocation;
