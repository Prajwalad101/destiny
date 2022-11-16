import { FormInputs } from '@features/register-business/layouts/FormContainer';
import { Control, UseFormRegister } from 'react-hook-form';
import { classNames } from 'src/utils/tailwind';

interface FormStep2Props {
  register: UseFormRegister<FormInputs>;
  control: Control<FormInputs>;
  className?: string;
}
export default function FormStep2({
  register,
  control,
  className = '',
}: FormStep2Props) {
  return <div className={classNames(className)}>Form Step 2</div>;
}
