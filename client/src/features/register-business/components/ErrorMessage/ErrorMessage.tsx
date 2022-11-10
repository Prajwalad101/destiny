import { FieldError } from 'react-hook-form';
import { classNames } from 'src/utils/tailwind';

interface ErrorMessageProps {
  className?: string;
  error: FieldError | undefined;
  // message: { [_key in FieldError['type']]?: string };
  validate: FieldError['type'][];
}

export default function ErrorMessage({
  className = '',
  error,
  validate,
}: ErrorMessageProps) {
  if (!error) return <></>;

  return (
    <div className={classNames(className)}>
      <p className="text-red-600">
        {validate.includes(error.type) && error.message}
        {/* {error.type === 'maxLength' && 'Description is too long '} */}
        {/* {error.type === 'minLength' && 'Description is too short '} */}
      </p>
    </div>
  );
}
