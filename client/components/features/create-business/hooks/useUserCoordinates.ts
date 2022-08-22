import { useEffect, useState } from 'react';

type setCoordFn = (_state: number | undefined) => void;
type setErrorFn = (_state: string | undefined) => void;

interface GetUserCoordinatesProps {
  geolocation: Geolocation;
  setLatitude: setCoordFn;
  setLongitude: setCoordFn;
  setError: setErrorFn;
}

const getUserCoordinates = ({
  geolocation,
  setLatitude,
  setLongitude,
  setError,
}: GetUserCoordinatesProps) => {
  if (!geolocation) {
    setError('Cannot set location in your browser.');
    return;
  }

  geolocation.getCurrentPosition(
    (position) => {
      const { coords } = position;
      setLatitude(coords.latitude);
      setLongitude(coords.longitude);
    },
    (_error) =>
      setError(
        'Something went wrong while getting your position. Please try again later'
      )
  );
};

function useUserCoordinates(isSelect?: boolean) {
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const geolocation = navigator.geolocation;
    // only get coordinates if true or undefined
    if (isSelect === false) return;

    getUserCoordinates({
      geolocation,
      setLatitude,
      setLongitude,
      setError,
    });
  }, [isSelect]);

  return [latitude, longitude, error];
}

export default useUserCoordinates;
