import { classNames } from 'src/utils/tailwind';

const breadcrumbsData = [
  // 'general information',
  'location & contact',
  'category & attributes',
  'socials and uploads',
];

interface BreadCrumbsProps {
  className?: string;
}

export default function Breadcrumbs({ className = '' }: BreadCrumbsProps) {
  return (
    <div className={classNames(className, 'flex justify-between')}>
      <div className="flex items-center gap-4">
        <div className="h-4 w-4 rounded-full bg-primaryred" />
        <p className="capitalize ">general information</p>
      </div>
      {breadcrumbsData.map((name, index) => (
        <div key={index} className="flex items-center gap-4">
          <div className="h-4 w-4 rounded-full bg-gray-300" />
          <p className="capitalize text-gray-600">{name}</p>
        </div>
      ))}
    </div>
  );
}
