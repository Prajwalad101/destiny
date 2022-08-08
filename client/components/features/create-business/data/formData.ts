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
  { id: 1, name: '1' },
  { id: 2, name: '2' },
  { id: 3, name: '3' },
  { id: 4, name: '4' },
  { id: 5, name: '5' },
  { id: 6, name: '6' },
  { id: 7, name: '7' },
  { id: 8, name: '8' },
  { id: 9, name: '9' },
  { id: 10, name: '10' },
  { id: 11, name: '11' },
  { id: 12, name: '12' },
  { id: 13, name: '13' },
  { id: 14, name: '14' },
  { id: 15, name: '15' },
  { id: 16, name: '16' },
  { id: 17, name: '17' },
  { id: 18, name: '18' },
  { id: 19, name: '19' },
  { id: 20, name: '20' },
  { id: 21, name: '21' },
  { id: 22, name: '22' },
  { id: 23, name: '23' },
  { id: 24, name: '24' },
];

export const minutes = [
  { id: 1, name: '00' },
  { id: 2, name: '05' },
  { id: 3, name: '10' },
  { id: 4, name: '15' },
  { id: 5, name: '20' },
  { id: 6, name: '25' },
  { id: 7, name: '30' },
  { id: 8, name: '35' },
  { id: 9, name: '40' },
  { id: 10, name: '45' },
  { id: 11, name: '50' },
  { id: 12, name: '55' },
];
