import axios from 'axios';
import { useMutation } from 'react-query';

function useSubmitForm() {
  const mutation = useMutation((newBusiness: FormData) =>
    axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/business`, newBusiness)
  );
  return mutation;
}

export default useSubmitForm;
