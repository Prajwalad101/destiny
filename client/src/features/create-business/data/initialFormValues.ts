import { MyFormValues } from '@features/create-business/types';
import { categoryDropdownData } from 'src/data';

export const initialFormValues: MyFormValues = {
  name: '',
  description: '',
  businessHours: {
    open: '1:00 AM',
    close: '1:00 PM',
  },
  category: categoryDropdownData[0].name,
  subCategory: categoryDropdownData[0].subcategories[0].name,
  features: [categoryDropdownData[0].subcategories[0].features[0].name],
  images: [],
  location: { type: 'Point', coordinates: [0, 0], address: '' },
};
