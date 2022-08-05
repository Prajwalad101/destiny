import { Formik } from 'formik';
import {
  FormSlider,
  FormStep1,
  FormStep2,
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
      >
        {(formik) => (
          <FormSlider>
            {(handleLeft, handleRight, progressStatus) => (
              <>
                <FormStep1
                  handleRight={handleRight}
                  progressStatus={progressStatus}
                  formik={formik}
                />
                <FormStep2
                  handleRight={handleRight}
                  handleLeft={handleLeft}
                  progressStatus={progressStatus}
                />
              </>
            )}
          </FormSlider>
        )}
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
