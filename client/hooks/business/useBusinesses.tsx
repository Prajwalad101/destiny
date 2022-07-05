import { useQuery } from 'react-query';

export const fetchBusinesses = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/business`);
  const data = await response.json();

  // check for error response
  if (!response.ok) {
    const error = data;
    throw error;
  }
  return data;
};

function useBusinesses(STALE_TIME: number) {
  const query = useQuery('businesses', fetchBusinesses, {
    staleTime: STALE_TIME,
  });
  return query;
}

export default useBusinesses;
