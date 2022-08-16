import {
  FormContainer,
  formData,
  MyFormValues,
  Navbar,
  validationSchema,
} from '@features/create-business';
import AppLayout from 'components/layout/app/AppLayout';
import { Formik } from 'formik';
import { NextPageWithLayout } from 'pages/_app';

const RegisterBusiness: NextPageWithLayout = () => {
  const handleSubmit = (values: MyFormValues) => {
    alert(JSON.stringify(values, null, 2));
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

RegisterBusiness.getLayout = (page) => (
  <>
    <Navbar />
    <AppLayout size="sm">{page}</AppLayout>
  </>
);

export default RegisterBusiness;
