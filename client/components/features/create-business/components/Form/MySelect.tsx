import { FieldHookConfig, useField } from 'formik';
import { ClassAttributes, InputHTMLAttributes } from 'react';
import { classNames } from '../../../../../utils/css';

const MySelect = ({
  className = '',
  ...props
}: InputHTMLAttributes<HTMLSelectElement> &
  ClassAttributes<HTMLSelectElement> &
  FieldHookConfig<string>) => {
  const [field, meta] = useField(props);

  return (
    <>
      <select
        {...field}
        {...props}
        className={classNames(className, 'rounded-md bg-gray-200 px-3 py-2')}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-primaryred">*{meta.error}</div>
      ) : null}
    </>
  );
};

export default MySelect;
