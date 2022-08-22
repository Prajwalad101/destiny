import { MyFormValues } from '@features/create-business/types/MyFormValues';
import { buildFormData } from './buildFormData';

export function dataToFormData(data: MyFormValues) {
  const formData = new FormData();

  buildFormData(formData, data);
  return formData;
}
