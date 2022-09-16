import { classNames } from 'utils/tailwind';

type MyLabelProps = React.HTMLProps<HTMLLabelElement>;

function MyLabel({ className = '', ...props }: MyLabelProps) {
  return (
    <label {...props} className={classNames('text-lg font-medium', className)}>
      {props.children}
    </label>
  );
}

export default MyLabel;
