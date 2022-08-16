import { classNames } from 'utils/css';

type MyLabelProps = React.HTMLProps<HTMLLabelElement>;

function MyLabel({ className = '', ...props }: MyLabelProps) {
  return (
    <label {...props} className={classNames('text-lg font-medium', className)}>
      {props.children}
    </label>
  );
}

export default MyLabel;
