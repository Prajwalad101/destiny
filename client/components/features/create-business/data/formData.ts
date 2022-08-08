import { businessCategories } from '../../../../data/business/categories.data';
import { MyFormValues } from '../types/interfaces';

// Formik Initial values
export const initialValues: MyFormValues = {
  businessName: '',
  description: '',
  address: '',
  businessHours: {
    openHour: ['9', '00'],
    closeHour: ['21', '00'],
  },
  category: businessCategories[0].name,
};

export const hours = [
  { name: '1' },
  { name: '2' },
  { name: '3' },
  { name: '4' },
  { name: '5' },
  { name: '6' },
  { name: '7' },
  { name: '8' },
  { name: '9' },
  { name: '10' },
  { name: '11' },
  { name: '12' },
  { name: '13' },
  { name: '14' },
  { name: '15' },
  { name: '16' },
  { name: '17' },
  { name: '18' },
  { name: '19' },
  { name: '20' },
  { name: '21' },
  { name: '22' },
  { name: '23' },
  { name: '24' },
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
