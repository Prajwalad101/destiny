import { Formik } from 'formik';
import { Navbar } from '../../components/features/create-business';
import Stage1 from '../../components/features/create-business/components/Form/Stages/Stage1';
import Stage2 from '../../components/features/create-business/components/Form/Stages/Stage2';
import {
  initialValues,
  validationSchema,
} from '../../components/features/create-business/data/form.data';
import FormSlider from '../../components/features/create-business/layouts/FormSlider';
import { MyFormValues } from '../../components/features/create-business/types/interfaces';
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
                <Stage1
                  handleRight={handleRight}
                  progressStatus={progressStatus}
                  formik={formik}
                />
                <Stage2
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
