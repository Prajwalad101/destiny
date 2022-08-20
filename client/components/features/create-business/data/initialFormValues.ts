import { MyFormValues } from '@features/create-business';
import businessCategories from 'data/business/categoriesData';

export const initialFormValues: MyFormValues = {
  businessName: '',
  description: '',
  address: '',
  businessHours: {
    open: '1:00 AM',
    close: '1:00 PM',
  },
  category: businessCategories[0].name,
  subCategory: businessCategories[0].subCategories[0].name,
  features: [businessCategories[0].subCategories[0].features[0].name],
  images: [],
};
