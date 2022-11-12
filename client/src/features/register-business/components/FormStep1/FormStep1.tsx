import { Control, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { FormInputs } from '../../layouts/FormContainer';
import AddressInput from './AddressInput';
import DescriptionInput from './DescriptionInput';
import Header from './Header';
import NameInput from './NameInput';
import WorkingHours from './WorkingHours';

interface FormStep1Props {
  register: UseFormRegister<FormInputs>;
  setValue: UseFormSetValue<FormInputs>;
  control: Control<FormInputs>;
  className?: string;
}

export default function FormStep1({
  setValue,
  control,
  register,
  className = '',
}: FormStep1Props) {
  return (
    <div className={className}>
      <Header />
      <NameInput register={register} control={control} />
      <DescriptionInput register={register} control={control} />
      <AddressInput register={register} setValue={setValue} control={control} />
      <WorkingHours setValue={setValue} control={control} />
    </div>
  );
}
