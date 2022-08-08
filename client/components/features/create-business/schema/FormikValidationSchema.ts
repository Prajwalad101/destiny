import * as Yup from 'yup';

export const validationSchema = Yup.object({
  businessName: Yup.string()
    .max(40, 'Must be 40 characters or less')
    .required('This field is required'),
  description: Yup.string()
    .max(250, 'Must be 250 characters or less')
    .required('This field is required'),
  address: Yup.string()
    .max(40, 'Must be 40 characters or less')
    .required('This field is required'),
});
