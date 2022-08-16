import { FieldHookConfig, useField } from 'formik';
import { classNames } from 'utils/css';

type MyTextInputProps = React.HTMLProps<HTMLInputElement> &
  FieldHookConfig<string>;

const MyTextInput = ({ className = '', ...props }: MyTextInputProps) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <input
        {...field}
        {...props}
        className={classNames(
          className,
          'mb-2 w-full rounded-md bg-gray-200 px-3 py-2.5'
        )}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-primaryred">*{meta.error}</div>
      ) : null}
    </div>
  );
};

export default MyTextInput;
