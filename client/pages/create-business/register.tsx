import { Formik } from 'formik';
import {
  FormContainer,
  initialValues,
  MyFormValues,
  Navbar,
  validationSchema,
} from '../../components/features/create-business';
import AppLayout from '../../components/layout/app/AppLayout';
import { NextPageWithLayout } from '../_app';

const RegisterBusiness: NextPageWithLayout = () => {
  const handleSubmit = (values: MyFormValues) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
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
