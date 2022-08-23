import {
  FormContainer,
  MyFormValues,
  Navbar,
  useSubmitForm,
  validationSchema,
} from '@features/create-business';

import { initialFormValues } from '@features/create-business/data';
import { dataToFormData } from '@features/create-business/utils/objects/dataToFormData';
import AppLayout from 'components/layout/app/AppLayout';
import ProviderLayout from 'components/layout/provider/ProviderLayout.';
import { Formik } from 'formik';
import { NextPageWithLayout } from 'pages/_app';
import { useEffect } from 'react';
import { handleMutationError } from 'utils/logger';

const RegisterBusiness: NextPageWithLayout = () => {
  const mutation = useSubmitForm();

  const handleSubmit = (values: MyFormValues) => {
    const formData = dataToFormData(values);
    console.log(JSON.stringify(values, null, 2));

    // mutation.mutate(formData);
  };

  useEffect(() => {
    handleMutationError(mutation.error);
  }, [mutation]);

  return (
    <>
      <Formik
        initialValues={initialFormValues}
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
    <ProviderLayout>
      <Navbar />
      <AppLayout size="sm">{page}</AppLayout>
    </ProviderLayout>
  </>
);

export default RegisterBusiness;
