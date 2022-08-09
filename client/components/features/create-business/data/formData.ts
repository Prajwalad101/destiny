import { businessCategories } from '../../../../data/business/categories.data';
import { MyFormValues } from '../types/interfaces';

// Formik Initial values
export const initialValues: MyFormValues = {
  businessName: '',
  description: '',
  address: '',
  businessHours: {
    open: { hour: '9', minute: '30', timeOfDay: 'AM' },
    close: { hour: '10', minute: '00', timeOfDay: 'PM' },
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
  { name: '00' },
  { name: '05' },
  { name: '10' },
  { name: '15' },
  { name: '20' },
  { name: '25' },
  { name: '30' },
  { name: '35' },
  { name: '40' },
  { name: '45' },
  { name: '50' },
  { name: '55' },
];

export const timeOfDay = [{ name: 'AM' }, { name: 'PM' }];
