import { IButton } from './Button';

const base: IButton = {
  children: 'Log In',
  theme: 'light',
  onClick: () => {
    return;
  },
};

export const mockButtonProps = {
  base,
};
