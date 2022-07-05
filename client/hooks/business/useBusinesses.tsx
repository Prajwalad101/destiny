import { IBusiness } from '@destiny/types';
import { useQuery } from 'react-query';

interface Data {
  status: string;
  data: IBusiness[];
}

export const fetchBusinesses = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/business`);
  const data = await response.json();

  // check for error response
  if (!response.ok) {
    const error = data;
    throw new Error(error);
  }
  return data;
};

function useBusinesses() {
  const query = useQuery<Data, Error>('businesses', fetchBusinesses);
  return query;
}

export default useBusinesses;
