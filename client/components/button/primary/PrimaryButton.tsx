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
  if (!className) className = 'h-[41px]'; // set default styles if none specified

  return (
    <button
      className={classNames(
        className,
        'md rounded-md border-[1px] border-primaryred bg-primaryred text-base text-white transition-colors hover:border-red-500 hover:bg-red-500'
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
