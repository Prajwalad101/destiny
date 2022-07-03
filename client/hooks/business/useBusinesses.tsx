import { useQuery } from 'react-query';

const fetchBusinesses = async () => {
  const response = await fetch('/api/business');
  const data = await response.json();

  // check for error response
  if (!response.ok) {
    const error = data;
    throw error;
  }
  return data;
};

function useBusinesses() {
  const query = useQuery('businesses', fetchBusinesses);

  return query;
}

export default useBusinesses;
