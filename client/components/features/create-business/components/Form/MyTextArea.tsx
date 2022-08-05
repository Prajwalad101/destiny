import { FieldHookConfig, useField } from 'formik';
import { classNames } from '../../../../../utils/css';

type MyTextAreaProps = React.HTMLProps<HTMLTextAreaElement> &
  FieldHookConfig<string>;

const MyTextArea = ({ className = '', ...props }: MyTextAreaProps) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <textarea
        {...field}
        {...props}
        className={classNames(
          className,
          'mb-2 w-full rounded-md bg-gray-200 px-3 py-2.5'
        )}
      />
      {meta.touched && meta.error ? (
        <p className="text-sm text-primaryred">*{meta.error}</p>
      ) : null}
    </div>
  );
};

export default MyTextArea;
