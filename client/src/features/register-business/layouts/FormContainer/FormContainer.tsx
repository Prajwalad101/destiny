import { Breadcrumbs } from '@features/register-business/components';
import { useForm } from 'react-hook-form';
import { Divider, PrimaryButton, SecondaryButton } from 'src/components';
import FormStep1 from '../../components/FormStep1/FormStep1';
import defaultFormValues, { FormInputs } from './data';

function FormContainer() {
  const { register, setValue, control, handleSubmit } = useForm({
    mode: 'onBlur',
    defaultValues: defaultFormValues,
  });

  const onSubmit = (data: FormInputs) => {
    console.log(data);
  };

  return (
    <div className="xs:my-10 md:my-16">
      <Breadcrumbs />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormStep1
          setValue={setValue}
          control={control}
          register={register}
          className="mb-20 xs:pt-10"
        />
        <Divider className="mb-10" width={2} />
        <div className="flex flex-wrap gap-x-10 gap-y-5">
          <SecondaryButton className="py-2 px-10">Cancel</SecondaryButton>
          <PrimaryButton type="submit" className="px-10 py-2">
            Next
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
}

export default FormContainer;
