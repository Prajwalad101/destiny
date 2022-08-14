import businessCategories from '../../../../data/business/categoriesData';
import { MyFormValues } from '../types/interfaces';

// Formik Initial values
export const initialValues: MyFormValues = {
  businessName: '',
  description: '',
  address: '',
  businessHours: {
    open: { hour: '1', minute: '00', timeOfDay: 'AM' },
    close: { hour: '1', minute: '00', timeOfDay: 'AM' },
  },
  category: businessCategories[0].name,
  subCategory: businessCategories[0].subCategories[0].name,
  features: [businessCategories[0].subCategories[0].features[0].name],
  images: [],
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
