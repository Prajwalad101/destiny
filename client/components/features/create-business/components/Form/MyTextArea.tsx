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
      <label htmlFor={props.id || props.name} className="font-semibold">
        {label}
      </label>
      <p>{subLabel}</p>
      <textarea
        {...field}
        {...props}
        className="w-full rounded-md bg-gray-200 px-3 py-2"
      />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};

export default MyTextArea;
