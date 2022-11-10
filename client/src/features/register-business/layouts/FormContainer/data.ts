import cities from '../../components/FormStep1/data/cities';

export type FormInputs = {
  name: string;
  description: string;
  address: string;
  city: typeof cities[number];
};

const defaultFormValues: FormInputs = {
  name: '',
  address: '',
  description: '',
  city: cities[0],
};

export default defaultFormValues;
