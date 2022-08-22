import axios from 'axios';

export default function handleMutationError(error: unknown) {
  if (axios.isAxiosError(error)) {
    console.log(error.response?.data);
  }
}
