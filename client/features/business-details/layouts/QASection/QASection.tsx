import { UserQuestion } from '@features/business-details/components';
import { useBusiness } from '@features/business-details/hooks';
import { useRouter } from 'next/router';
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
      <UserQuestion businessName={businessData.name} />
    </div>
  );
}
