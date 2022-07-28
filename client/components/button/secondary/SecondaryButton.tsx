import { classNames } from '../../../utils/css';

interface SecondaryButtonProps {
  children: React.ReactNode;
  theme?: 'light' | 'dark';
  onClick?: () => void;
  className?: string;
}

function SecondaryButton({
  children,
  theme = 'light',
  onClick,
  className = '',
}: SecondaryButtonProps) {
  return (
    <button
      className={classNames(
        theme === 'dark'
          ? 'border-white text-white'
          : 'border-gray-700 hover:text-white',
        'md rounded-md border-[1px] bg-transparent text-base transition-colors hover:border-primaryred hover:bg-primaryred',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
