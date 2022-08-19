import { useMutation } from 'react-query';

function useSubmitForm() {
  const mutation = useMutation((newBusiness: FormData) => {
    return fetch(`${process.env.NEXT_PUBLIC_HOST}/api/business`, {
      method: 'POST',
      body: newBusiness,
    });
  });
  return mutation;
}

export default useSubmitForm;
