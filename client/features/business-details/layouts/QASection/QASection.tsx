import { SortQA, UserQuestion } from '@features/business-details/components';
import { useBusiness } from '@features/business-details/hooks';
import { useRouter } from 'next/router';
import { AiOutlineSearch } from 'react-icons/ai';
import { classNames } from 'utils/tailwind';

interface QASectionProps {
  className?: string;
}

export default function QASection({ className = '' }: QASectionProps) {
  const { query } = useRouter();
  const businessId = query.businessId as string;

  const result = useBusiness(businessId);
  const businessData = result.data?.data;

  if (!businessData) return <></>;

  return (
    <div className={classNames(className)}>
      <div className="mb-7 flex items-center justify-between">
        <SortQA />
        <div className="relative mr-[2px] flex w-max items-center">
          <input
            type="text"
            className="rounded-[4px] border border-gray-500 px-5 py-[9px]"
            placeholder="Search for questions"
          />
          <AiOutlineSearch className="absolute right-4 shrink-0" size={20} />
        </div>
      </div>
      <div className="mb-12 border-b border-gray-300" />
      <UserQuestion businessName={businessData.name} />
    </div>
  );
}
