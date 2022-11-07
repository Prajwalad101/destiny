import { classNames } from 'src/utils/tailwind';

interface FieldLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const FieldLayout = ({ children, className = '' }: FieldLayoutProps) => {
  return (
    <div
      className={classNames(
        className,
        'grid-cols-2 gap-10 md:grid lg:grid-cols-[2fr_3fr] lg:gap-24'
      )}
    >
      {children}
    </div>
  );
};

export default FieldLayout;
