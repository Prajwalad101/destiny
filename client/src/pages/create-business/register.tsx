import { Navbar } from '@features/create-business/components';
import { initialFormValues } from '@features/create-business/data';
import { useSubmitForm } from '@features/create-business/hooks';
import { FormContainer } from '@features/create-business/layouts';
import { formikValidationSchema } from '@features/create-business/schema';
import { MyFormValues } from '@features/create-business/types';
import { dataToFormData } from '@features/create-business/utils/objects/dataToFormData';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from 'pages/_app';
import { useEffect } from 'react';
import SecondaryButton from 'src/components/button/secondary/SecondaryButton';
import { QueryProvider } from 'src/components/context-provider';
import AppLayout from 'src/components/layout/app/AppLayout';
import { logMutationError } from 'src/utils/logger';

const RegisterBusiness: NextPageWithLayout = () => {
  const mutation = useSubmitForm();
  const router = useRouter();

  const handleSubmit = (values: MyFormValues) => {
    const formData = dataToFormData(values);

    mutation.mutate(formData);
  };

  const stringifiedMutation = JSON.stringify(mutation);

  useEffect(() => {
    const data = mutation.data?.data.data;
    const id = data?._id;

    if (mutation.isSuccess)
      router.push(`submit?status=success&id=${id}`, 'submit');
    if (mutation.isError) {
      logMutationError(mutation.error);
      router.push('submit?status=error', 'submit');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stringifiedMutation]);

  const submitButton = (
    <SecondaryButton
      className="mt-16 px-10 py-2"
      type="submit"
      disabled={mutation.isLoading}
    >
      Submit
    </SecondaryButton>
  );

  // change the cursor style when submitting form
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
        validationSchema={formikValidationSchema}
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
    <QueryProvider>
      <AppLayout size="sm">
        <Navbar />
        {page}
      </AppLayout>
    </QueryProvider>
  </>
);

export default RegisterBusiness;
