import { classNames } from '../../../../utils/css';

interface ProgressStatusProps {
  className: string;
  formStage: number;
}

function ProgressStatus({ className = '', formStage }: ProgressStatusProps) {
  return (
    <div className={classNames(className, 'flex gap-5')}>
      <div
        className={classNames(
          formStage === 0 ? 'bg-blue-500' : 'bg-gray-300',
          'h-1 w-14 rounded-md bg-blue-500'
        )}
      />
      <div
        className={classNames(
          formStage === 1 ? 'bg-blue-500' : 'bg-gray-300',
          'h-1 w-14 rounded-md bg-blue-500'
        )}
      />
      <div
        className={classNames(
          formStage === 2 ? 'bg-blue-500' : 'bg-gray-300',
          'h-1 w-14 rounded-md bg-blue-500'
        )}
      />
    </div>
  );
}

export default ProgressStatus;
