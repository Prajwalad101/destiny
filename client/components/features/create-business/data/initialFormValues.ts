import { MyFormValues } from '@features/create-business/types';
import businessCategories from 'data/business/categoriesData';

export const initialFormValues: MyFormValues = {
  name: '',
  description: '',
  businessHours: {
    open: '1:00 AM',
    close: '1:00 PM',
  },
  category: businessCategories[0].name,
  subCategory: businessCategories[0].subcategories[0].name,
  features: [businessCategories[0].subcategories[0].features[0].name],
  images: [],
  location: { type: 'Point', coordinates: [0, 0], address: '' },
};
