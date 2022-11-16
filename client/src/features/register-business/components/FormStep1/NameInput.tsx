import { FormInputs } from '@features/register-business/layouts/FormContainer';
import { Control, UseFormRegister, useFormState } from 'react-hook-form';
import { classNames } from 'src/utils/tailwind';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import MyLabel from '../MyLabel/MyLabel';

interface NameInputProps {
  register: UseFormRegister<FormInputs>;
  control: Control<FormInputs>;
  className?: string;
}

export default function NameInput({ register, control }: NameInputProps) {
  const { errors } = useFormState({ control, name: 'name' });

  return (
    <div className="mt-12 mb-16 grid-cols-2 items-start gap-5 md:my-24 md:grid lg:grid-cols-[2fr_3fr] lg:gap-24">
      <MyLabel
        name="business name"
        sublabel="Provide the full name of your business"
      />
      <div>
        <input
          {...register('name', {
            required: 'Business name is required',
            maxLength: { value: 50, message: 'Business name is too long' },
            minLength: { value: 4, message: 'Business name is too short' },
          })}
          type="text"
          id="business name"
          className={classNames(
            errors.name ? 'ring-red-500' : 'ring-blue-600',
            'mb-2 w-full rounded-md border-2 border-gray-300 px-4 py-3 outline-none ring-offset-1 transition-all focus:ring-[3px]'
          )}
          placeholder="eg: The Burger House"
        />
        <ErrorMessage
          error={errors.name}
          validate={['required', 'maxLength', 'minLength']}
        />
      </div>
    </div>
  );
}
