import { classNames } from '../../utils/tailwindFunc';

export interface IButton {
  children: string;
  variant?: 'primary' | 'secondary';
}

function Button({ children, variant }: IButton) {
  return (
    <button
      className={classNames(
        variant === 'primary'
          ? 'bg-primaryred hover:bg-red-500'
          : 'border-2 border-white bg-transparent hover:border-primaryred hover:bg-primaryred',
        'rounded-md py-2 px-6 font-rubik text-base text-white transition-colors '
      )}
    >
      {children}
    </button>
  );
}

export default Button;
