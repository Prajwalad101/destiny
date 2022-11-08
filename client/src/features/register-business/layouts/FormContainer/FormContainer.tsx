import { Breadcrumbs } from '@features/register-business/components';
import { PrimaryButton, SecondaryButton } from 'src/components';
import FormStep1 from '../FormStep1/FormStep1';

function FormContainer() {
  return (
    <div className="mt-16 mb-20">
      <Breadcrumbs />
      <FormStep1 className="mb-20 pt-10" />
      <div>
        <SecondaryButton className="mr-10 py-2 px-10">Cancel</SecondaryButton>
        <PrimaryButton className="px-10 py-2">Next</PrimaryButton>
      </div>
    </div>
  );
}

export default FormContainer;
