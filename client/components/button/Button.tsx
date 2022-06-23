import { classNames } from '../../utils/tailwindFunc';

export interface IButton {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

function Button({ children, variant }: IButton) {
  return (
    <button
      className={classNames(
        variant === 'primary'
          ? 'bg-primaryred hover:bg-red-500'
          : 'border-[1px] border-white bg-transparent hover:border-primaryred hover:bg-primaryred',
        'md h-[37px] rounded-md px-6 text-base text-white transition-colors'
      )}
    >
      {children}
    </button>
  );
}

export default Button;
