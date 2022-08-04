import * as Yup from 'yup';
import { MyFormValues } from '../types/interfaces';

export const initialValues: MyFormValues = {
  businessName: '',
  description: '',
  address: '',
  businessHours: {
    openHour: ['9', '00'],
    closeHour: ['21', '00'],
  },
};

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
  businessHours: Yup.object({
    openWeek: Yup.string().required('This field is required'),
  }),
});

export const hours = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
];

export const minutes = [
  '00',
  '05',
  '10',
  '15',
  '20',
  '25',
  '30',
  '35',
  '40',
  '45',
  '50',
  '55',
];
