/**
 * Provides a way to add data from a form into the FormData instance object
 * @param formData instance object of FormData
 * @param data data to append to formData
 * @param parentKey parentKey of the object(if any)
 * @returns formData with all data appended to
 */
export function buildFormData(
  formData: FormData,
  data: object,
  parentKey?: string
) {
  if (data instanceof File || data instanceof Date) return;

  // check if the data is object
  if (typeof data === 'object') {
    Object.keys(data).forEach((key) => {
      buildFormData(
        formData,
        data[key as keyof typeof data],
        parentKey ? `${parentKey}[${key}]` : key
      );
    });
  } else {
    if (!parentKey) return;
    const value = data === null ? '' : data;
    formData.append(parentKey, value);
  }
}
