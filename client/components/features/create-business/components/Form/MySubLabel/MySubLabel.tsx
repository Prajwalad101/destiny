import { classNames } from 'utils/tailwind';

interface MySubLabelProps {
  children: React.ReactNode;
  className?: string;
}

function MySubLabel({ children, className = '' }: MySubLabelProps) {
  return (
    <p className={classNames(className, 'mt-1 text-gray-500')}>{children}</p>
  );
}

export default MySubLabel;
