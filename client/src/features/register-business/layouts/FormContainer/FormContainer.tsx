import { Breadcrumbs } from '@features/register-business/components';
import FormStep1 from '../FormStep1/FormStep1';

function FormContainer() {
  return (
    <div className="mt-20">
      <Breadcrumbs className="mb-20" />
      <FormStep1 />
    </div>
  );
}

export default FormContainer;
