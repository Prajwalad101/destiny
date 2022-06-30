import { classNames } from '../../utils/tailwind';

export interface IButton {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  theme: 'light' | 'dark';
}

function Button({ children, variant, theme }: IButton) {
  return (
    <button
      className={classNames(
        theme === 'dark' || variant === 'primary'
          ? 'border-white text-white'
          : 'border-gray-700 hover:text-white',
        variant === 'primary'
          ? 'bg-primaryred hover:bg-red-500'
          : 'border-[1px] bg-transparent hover:border-primaryred hover:bg-primaryred',
        'md h-[37px] rounded-md px-6 text-base transition-colors'
      )}
    >
      {children}
    </button>
  );
}

export default Button;
