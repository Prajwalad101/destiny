import {
  FormContainer,
  formData,
  MyFormValues,
  useSubmitForm,
  validationSchema,
} from '@features/create-business';
import { buildFormData } from 'components/features/create-business/utils/objects/buildFormData';
import { Formik } from 'formik';
import { NextPageWithLayout } from 'pages/_app';

const RegisterBusiness: NextPageWithLayout = () => {
  const mutation = useSubmitForm();

  const handleSubmit = (values: MyFormValues) => {
    const formData = new FormData();

    // add all images to form data
    for (const file of values.images) {
      formData.append('images', file);
    }
    // add remaining form fields to form data
    buildFormData(formData, values);

    mutation.mutate(formData);
  };

  return (
    <>
      <Formik
        initialValues={formData.initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={true}
      >
        <FormContainer />
      </Formik>
    </>
  );
};

export default RegisterBusiness;
