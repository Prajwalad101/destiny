import { classNames } from 'utils/tailwind';

interface DividerProps {
  className?: string;
  width?: number;
}

export default function Divider({ className = '', width = 1 }: DividerProps) {
  return (
    <hr
      className={classNames(className, ' border-gray-300')}
      style={{ borderTopWidth: width }}
    />
  );
}
