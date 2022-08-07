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
