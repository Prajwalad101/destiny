import { classNames } from '../../../utils/css';

interface SecondaryButtonProps {
  theme?: 'light' | 'dark';
  type?: 'button' | 'submit' | 'reset' | undefined;
}

type ButtonProps = React.HTMLProps<HTMLButtonElement> & SecondaryButtonProps;

function SecondaryButton({
  children,
  theme = 'light',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(
        theme === 'dark'
          ? 'border-white text-white'
          : 'border-gray-700 hover:text-white',
        'md rounded-md border-[1px] bg-transparent text-base transition-colors hover:border-primaryred hover:bg-primaryred',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;