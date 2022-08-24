import {
  FormContainer,
  MyFormValues,
  Navbar,
  useSubmitForm,
  validationSchema,
} from '@features/create-business';

import { initialFormValues } from '@features/create-business/data';
import { dataToFormData } from '@features/create-business/utils/objects/dataToFormData';
import SecondaryButton from 'components/button/secondary/SecondaryButton';
import AppLayout from 'components/layout/app/AppLayout';
import ProviderLayout from 'components/layout/provider/ProviderLayout.';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from 'pages/_app';
import { useEffect } from 'react';
import { handleMutationError } from 'utils/logger';

const RegisterBusiness: NextPageWithLayout = () => {
  const mutation = useSubmitForm();
  const router = useRouter();

  const handleSubmit = (values: MyFormValues) => {
    const formData = dataToFormData(values);
    console.log(JSON.stringify(values, null, 2));

    mutation.mutate(formData);
    // router.push('submit');
  };

  useEffect(() => {
    handleMutationError(mutation.error);
  }, [mutation]);

  const submitButton = (
    <SecondaryButton
      className="mt-16 px-10 py-2"
      type="submit"
      disabled={mutation.isLoading}
    >
      Submit
    </SecondaryButton>
  );

  useEffect(() => {
    if (mutation.isLoading) {
      document.body.style.cursor = 'progress';
    } else {
      document.body.style.cursor = 'default';
    }
  }, [mutation.isLoading]);

  return (
    <>
      <Formik
        initialValues={initialFormValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={true}
      >
        <FormContainer submitButton={submitButton} />
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
