import { classNames } from '../../../../utils/css';

function ProgressStatus({ className = '' }: { className?: string }) {
  return (
    <div className={classNames(className, 'flex gap-5')}>
      <div className="h-1 w-14 rounded-md bg-blue-500" />
      <div className="h-1 w-14 rounded-md bg-gray-300" />
      <div className="h-1 w-14 rounded-md bg-gray-300" />
    </div>
  );
}

export default ProgressStatus;
