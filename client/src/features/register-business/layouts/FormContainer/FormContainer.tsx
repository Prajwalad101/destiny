import { Breadcrumbs } from '@features/register-business/components';
import { Divider, PrimaryButton, SecondaryButton } from 'src/components';
import FormStep1 from '../FormStep1/FormStep1';

function FormContainer() {
  return (
    <div className="xs:my-10 md:my-16">
      <Breadcrumbs />
      <FormStep1 className="mb-20 xs:pt-10" />
      <Divider className="mb-10" width={2} />
      <div className="flex flex-wrap gap-x-10 gap-y-5">
        <SecondaryButton className="py-2 px-10">Cancel</SecondaryButton>
        <PrimaryButton className="px-10 py-2">Next</PrimaryButton>
      </div>
    </div>
  );
}

export default FormContainer;
