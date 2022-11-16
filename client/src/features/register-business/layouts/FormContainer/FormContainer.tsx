import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Divider, PrimaryButton, SecondaryButton } from 'src/components';
import { Breadcrumbs, FormStep1, FormStep2, Header } from '../../components';
import { defaultFormValues, FormInputs } from './data';

function FormContainer() {
  const [step, setStep] = useState(1);

  const { register, control, handleSubmit } = useForm({
    mode: 'onBlur',
    defaultValues: defaultFormValues,
  });

  const onSubmit = (data: FormInputs) => {
    if (step < 4) {
      setStep((prev) => ++prev);
      return;
    }
    console.log('Data', data);
  };

  const handleBack = () => {
    if (step === 1) {
      // TODO: handle logic to cancel form
      return;
    }
    setStep((prev) => --prev);
  };

  return (
    <div className="xs:my-10 md:my-16">
      <Breadcrumbs step={step} />
      <Header step={step} />
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && (
          <FormStep1
            control={control}
            register={register}
            className="mb-20 xs:pt-10"
          />
        )}
        {step === 2 && (
          <FormStep2
            control={control}
            register={register}
            className="mb-20 xs:pt-10"
          />
        )}
        <Divider className="mb-10" width={2} />
        <div className="flex flex-wrap gap-x-10 gap-y-5">
          <SecondaryButton
            type="button"
            onClick={handleBack}
            className="py-2 px-10"
          >
            {step === 1 ? 'Cancel' : 'Back'}
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
