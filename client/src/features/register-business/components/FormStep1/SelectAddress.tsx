import { FormInputs } from '@features/register-business/layouts/FormContainer';
import {
  Control,
  UseFormRegister,
  UseFormSetValue,
  useFormState,
} from 'react-hook-form';
import { classNames } from 'src/utils/tailwind';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import MyListBox from '../Form/MyListBox/MyListBox';
import MyLabel from '../MyLabel/MyLabel';

interface SelectAddressProps {
  register: UseFormRegister<FormInputs>;
  setValue: UseFormSetValue<FormInputs>;
  control: Control<FormInputs>;
  className?: string;
}

const cities = [
  { name: 'Kathmandu' },
  { name: 'Pokhara' },
  { name: 'Butwal' },
  { name: 'Lalitpur' },
  { name: 'Bhaktapur' },
];

export default function SelectAddress({
  register,
  setValue,
  control,
}: SelectAddressProps) {
  const { errors } = useFormState({
    control,
    name: ['address', 'city', 'zipcode'],
  });

  return (
    <div className="mb-20 grid-cols-2 items-start gap-5 md:mb-28 md:grid lg:grid-cols-[2fr_3fr] lg:gap-24">
      <MyLabel
        name="address"
        sublabel="Provide the address, city and the zip code of your business"
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
        <div className="flex gap-7">
          <MyListBox setValue={setValue} name="city" list={cities} />
          <MyListBox setValue={setValue} name="zipcode" list={cities} />
        </div>
      </div>
    </div>
  );
}
