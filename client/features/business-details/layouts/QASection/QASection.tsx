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
      <div className="flex justify-between items-start mb-10">
        <div>
          <h4 className="text-2xl font-bold font-merriweather mb-2">Q & A</h4>
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
