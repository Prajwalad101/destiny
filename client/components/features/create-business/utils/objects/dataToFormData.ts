import { MyFormValues } from '@features/create-business/types/interfaces';
import { buildFormData } from './buildFormData';

export function dataToFormData(data: MyFormValues) {
  const formData = new FormData();

  buildFormData(formData, data);
  return formData;
}
