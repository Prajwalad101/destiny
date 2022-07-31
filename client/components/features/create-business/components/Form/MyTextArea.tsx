import { FieldHookConfig, useField } from 'formik';
import { ClassAttributes, InputHTMLAttributes } from 'react';
import { OtherProps } from '../../types/interfaces';

const MyTextArea = ({
  label,
  subLabel,
  ...props
}: InputHTMLAttributes<HTMLTextAreaElement> &
  ClassAttributes<HTMLTextAreaElement> &
  FieldHookConfig<string> &
  OtherProps) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="mb-3">
        <label htmlFor={props.id || props.name} className="text-lg font-medium">
          {label}
        </label>
        <p className="mt-1 text-gray-500">{subLabel}</p>
      </div>
      <textarea
        {...field}
        {...props}
        className="mb-2 w-full rounded-md bg-gray-200 px-3 py-2"
      />
      {meta.touched && meta.error ? (
        <p className="text-sm text-primaryred">*{meta.error}</p>
      ) : null}
    </>
  );
};

export default MyTextArea;
