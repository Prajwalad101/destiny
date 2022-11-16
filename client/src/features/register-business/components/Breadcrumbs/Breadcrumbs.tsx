import { classNames } from 'src/utils/tailwind';
import { formSteps } from '../../layouts/FormContainer';

interface BreadCrumbsProps {
  step: number;
  className?: string;
}

export default function Breadcrumbs({
  step,
  className = '',
}: BreadCrumbsProps) {
  return (
    <div
      className={classNames(className, 'hidden justify-between gap-7 xs:flex')}
    >
      {formSteps.map((formStep, index) => (
        <div key={index} className="flex items-center gap-4">
          <div
            className={classNames(
              step === formStep.id ? 'bg-red-500' : 'bg-gray-300',
              'hidden h-4 w-4 shrink-0 rounded-full sm:block'
            )}
          />
          <p className="capitalize text-gray-600">{formStep.name}</p>
        </div>
      ))}
    </div>
  );
}
