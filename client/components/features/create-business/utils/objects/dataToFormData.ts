import { MyFormValues } from '@features/create-business/types/MyFormValues';
import { buildFormData } from './buildFormData';

export function dataToFormData(data: MyFormValues) {
  const formData = new FormData();

  buildFormData(formData, data);

  // add all images to form data
  for (const file of data.images) {
    formData.append('image', file);
  }

  //! Fix: Price is not uploaded by user
  formData.append('price', 'medium');

  return formData;
}
