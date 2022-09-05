import { classNames } from 'utils/css';

interface IAppLayout {
  children: React.ReactNode;
  size?: 'sm' | 'lg';
}

function AppLayout({ children, size = 'lg' }: IAppLayout) {
  return (
    <div
      className={classNames(
        size === 'sm' ? 'lg:max-w-[1200px]' : 'lg:max-w-[1400px]',
        'mx-auto px-3 sm:px-7'
      )}
    >
      {children}
    </div>
  );
}

export default AppLayout;
