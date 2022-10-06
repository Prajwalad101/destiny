import { attributesIconData } from 'data';
import { classNames } from 'utils/tailwind';

interface BusinessAttributesProps {
  attributes: string[];
  className?: string;
}

// prevent mutating original data
const iconData = [...attributesIconData];

export default function BusinessAttributes({
  attributes,
  className = '',
}: BusinessAttributesProps) {
  return (
    <div className={classNames(className)}>
      <div className="mb-5 border border-gray-200" />
      <div className="mb-6 flex flex-col gap-3 xs:flex-row xs:items-center xs:justify-between ">
        <h4 className="text-xl font-medium">Highlights from this Business</h4>
        <p className=" cursor-pointer text-sm text-gray-700 underline hover:text-gray-500">
          View All
        </p>
      </div>
      <div className="flex flex-wrap justify-around gap-x-5 gap-y-5 md:justify-start md:gap-x-24">
        {attributes.map((attribute, i) => {
          const businessAttribute = iconData.find(
            (businessAttribute) => businessAttribute.name === attribute
          );
          return (
            <div
              key={i}
              className="flex shrink-0 flex-col items-center justify-center gap-2 rounded-md py-4"
            >
              {businessAttribute?.icon(35)}
              <p className="text-center capitalize">{attribute}</p>
            </div>
          );
        })}
      </div>
      <div className="mb-12 border border-gray-200 md:mb-16" />
    </div>
  );
}
