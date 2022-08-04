import { Formik } from 'formik';
import { Navbar } from '../../components/features/create-business';
import Stage1 from '../../components/features/create-business/components/Form/Stages/Stage1';
import {
  initialValues,
  validationSchema,
} from '../../components/features/create-business/data/form.data';
import { MyFormValues } from '../../components/features/create-business/types/interfaces';
import AppLayout from '../../components/layout/app/AppLayout';
import { NextPageWithLayout } from '../_app';

const RegisterBusiness: NextPageWithLayout = () => {
  const handleSubmit = (values: MyFormValues) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Stage1 />
      </Formik>
    </div>
  );
};

RegisterBusiness.getLayout = (page) => (
  <>
    <Navbar />
    <AppLayout size="sm">{page}</AppLayout>
  </>
);

export default RegisterBusiness;
