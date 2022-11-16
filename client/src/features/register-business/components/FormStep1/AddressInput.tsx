import { FormInputs } from '@features/register-business/layouts/FormContainer';
import {
  Control,
  Controller,
  UseFormRegister,
  useFormState,
} from 'react-hook-form';
import { classNames } from 'src/utils/tailwind';
import { FieldLayout } from '../../layouts';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import MyLabel from '../MyLabel/MyLabel';
import SelectCity from './SelectCity';

interface AddressInputProps {
  register: UseFormRegister<FormInputs>;
  control: Control<FormInputs>;
  className?: string;
}

export default function AddressInput({ register, control }: AddressInputProps) {
  const { errors } = useFormState({ control, name: 'address' });

  return (
    <FieldLayout>
      <MyLabel
        name="address"
        sublabel="Provide the address and city of your business"
      />
      <div>
        <input
          {...register('address', {
            required: 'Address is required',
            maxLength: { value: 50, message: 'Address is too long' },
            minLength: { value: 5, message: 'Address is too short' },
          })}
          type="text"
          id="address"
          className={classNames(
            errors.address ? 'mb-2 ring-red-500' : 'mb-4 ring-blue-600',
            'w-full rounded-md border-2 border-gray-300 px-4 py-3 outline-none ring-offset-2 transition-all focus:ring-[3px]'
          )}
          placeholder="eg: Kapan, Baluwakhani"
        />
        <ErrorMessage
          className="mb-3"
          error={errors.address}
          validate={['required', 'maxLength', 'minLength']}
        />
        <Controller
          control={control}
          name="city"
          rules={{ required: 'Please select a city' }}
          render={({ field, fieldState }) => (
            <>
              <SelectCity
                error={fieldState.error}
                selected={field.value}
                onChange={field.onChange}
                className="mb-2 w-48"
              />
              <ErrorMessage error={fieldState.error} validate={['required']} />
            </>
          )}
        />
      </div>
    </FieldLayout>
  );
}
