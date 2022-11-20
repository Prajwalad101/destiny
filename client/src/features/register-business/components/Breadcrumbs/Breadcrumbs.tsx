import { classNames } from 'src/utils/tailwind';

interface BreadCrumbsProps {
  step: number;
  onClick: (_step: number) => void;
  className?: string;
}

export default function Breadcrumbs({
  step,
  onClick,
  className = '',
}: BreadCrumbsProps) {
  return (
    <div
      className={classNames(
        className,
        'mb-6 hidden justify-between gap-7 xs:flex'
      )}
    >
      {formSteps.map((formStep, index) => (
        <button
          onClick={() => onClick(formStep.id)}
          key={index}
          className="flex items-center gap-4 text-gray-600 transition-colors hover:text-gray-800"
        >
          <div
            className={classNames(
              step === formStep.id ? 'bg-red-500' : 'bg-gray-300',
              'hidden h-4 w-4 shrink-0 rounded-full sm:block'
            )}
          />
          <p className="capitalize ">{formStep.name}</p>
        </button>
      ))}
    </div>
  );
}

export const formSteps = [
  {
    id: 1,
    name: 'general information',
    description: 'First, we need to know a little bit about your business',
  },
  {
    id: 2,
    name: 'location and contact',
    description: 'Make your business easily accessible to customers',
  },
  {
    id: 3,
    name: 'category and attributes',
    description:
      'Uniquely identify your business category and all features it provides',
  },
  {
    id: 4,
    name: 'socials and uploads',
    description: 'Provide your business socials and upload images and files',
  },
];
