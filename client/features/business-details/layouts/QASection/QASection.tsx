import { UserQuestion } from '@features/business-details/components';
import { SecondaryButton } from 'components';
import { classNames } from 'utils/tailwind';

interface QASectionProps {
  businessName: string;
  className?: string;
}

export default function QASection({
  businessName,
  className = '',
}: QASectionProps) {
  return (
    <div className={classNames(className)}>
      <div className="mb-10 flex items-start justify-between">
        <div>
          <h4 className="mb-2 font-merriweather text-2xl font-bold">Q & A</h4>
          <p className="text-gray-700">5 asked, 4 answered</p>
        </div>
        <SecondaryButton className="px-6 py-2 sm:py-[10px]">
          Ask Question
        </SecondaryButton>
      </div>
      <UserQuestion businessName={businessName} />
    </div>
  );
}
