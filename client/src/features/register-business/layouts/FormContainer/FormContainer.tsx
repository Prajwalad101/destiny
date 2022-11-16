import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Divider, PrimaryButton, SecondaryButton } from 'src/components';
import { Breadcrumbs, FormStep1, FormStep2, Header } from '../../components';
import defaultFormValues, { FormInputs } from './data';

function FormContainer() {
  const [formStep, setFormStep] = useState(1);

  const { register, control, handleSubmit } = useForm({
    mode: 'onBlur',
    defaultValues: defaultFormValues,
  });

  const onSubmit = (data: FormInputs) => {
    if (formStep < 4) {
      setFormStep((prevState) => ++prevState);
      return;
    }
    console.log('Data', data);
  };

  const handleBack = () => {
    if (formStep === 1) {
      return;
    }
    setFormStep((prevStep) => --prevStep);
  };

  return (
    <div className="xs:my-10 md:my-16">
      <Breadcrumbs />
      <Header formStep={formStep} />
      <form onSubmit={handleSubmit(onSubmit)}>
        {formStep === 1 && (
          <FormStep1
            control={control}
            register={register}
            className="mb-20 xs:pt-10"
          />
        )}
        {formStep === 2 && <FormStep2 />}
        <Divider className="mb-10" width={2} />
        <div className="flex flex-wrap gap-x-10 gap-y-5">
          <SecondaryButton
            type="button"
            onClick={handleBack}
            className="py-2 px-10"
          >
            {formStep === 1 ? 'Cancel' : 'Back'}
          </SecondaryButton>
          <PrimaryButton type="submit" className="px-10 py-2">
            Next
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
}

export default FormContainer;
