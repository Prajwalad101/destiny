import { Control, UseFormRegister, useFormState } from 'react-hook-form';
import { classNames } from 'src/utils/tailwind';
import { FieldLayout } from '../../layouts';
import { FormInputs } from '../../layouts/FormContainer';
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
    <FieldLayout>
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
    </FieldLayout>
  );
}
