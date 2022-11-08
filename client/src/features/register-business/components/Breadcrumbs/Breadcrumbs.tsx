import { classNames } from 'src/utils/tailwind';

const breadcrumbsData = [
  // 'general information',
  'location and contact',
  'category and attributes',
  'socials and uploads',
];

interface BreadCrumbsProps {
  className?: string;
}

export default function Breadcrumbs({ className = '' }: BreadCrumbsProps) {
  return (
    <div
      className={classNames(className, 'hidden justify-between gap-7 xs:flex')}
    >
      <div className="flex items-center gap-4">
        <div className="hidden h-4 w-4 shrink-0 rounded-full bg-primaryred sm:block" />
        <p className="capitalize ">general information</p>
      </div>
      {breadcrumbsData.map((name, index) => (
        <div key={index} className="flex items-center gap-4">
          <div className="hidden h-4 w-4 shrink-0 rounded-full bg-gray-300 sm:block" />
          <p className="capitalize text-gray-600">{name}</p>
        </div>
      ))}
    </div>
  );
}
