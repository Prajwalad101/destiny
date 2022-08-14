import { classNames } from '../../../utils/css';

interface PrimaryButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function PrimaryButton({
  children,
  onClick,
  className = '',
}: PrimaryButtonProps) {
  return (
    <button
      className={classNames(
        className,
        'rounded-md border-[1px] border-primaryred bg-primaryred text-base text-white transition-colors hover:border-red-500 hover:bg-red-500'
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
