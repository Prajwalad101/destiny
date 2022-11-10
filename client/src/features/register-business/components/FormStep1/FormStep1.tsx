import { MyLabel, TimePicker } from '@features/register-business/components';
import { Control, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { FormInputs } from '../../layouts/FormContainer';
import DescriptionInput from './DescriptionInput';
import Header from './Header';
import NameInput from './NameInput';
import SelectAddress from './SelectAddress';

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
      <SelectAddress
        register={register}
        setValue={setValue}
        control={control}
      />
      {/* Working hours */}
      <div className="grid-cols-2 items-start gap-5 lg:grid lg:grid-cols-[2fr_3fr] lg:gap-24">
        <MyLabel
          className="!mb-10"
          name="working hours"
          sublabel="Choose the operating hours of your business"
        />
        <TimePicker className="max-w-xl grow" />
      </div>
    </div>
  );
}
