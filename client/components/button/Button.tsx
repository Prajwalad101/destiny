import { classNames } from '../../utils/tailwind';

export interface IButton {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  theme: 'light' | 'dark';
  onClick: () => void;
}

function Button({ children, variant, theme, onClick }: IButton) {
  return (
    <button
      className={classNames(
        theme === 'dark' || variant === 'primary'
          ? 'border-white text-white'
          : 'border-gray-700 hover:text-white',
        variant === 'primary'
          ? 'border-primaryred bg-primaryred hover:border-red-500 hover:bg-red-500'
          : 'bg-transparent hover:border-primaryred hover:bg-primaryred',
        'md rounded-md border-[1px] py-2 px-6 text-base transition-colors'
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
