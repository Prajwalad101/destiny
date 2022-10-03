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
      <div className="border border-gray-200 mb-5" />
      <div className="flex flex-col xs:flex-row mb-6 gap-3 xs:items-center xs:justify-between ">
        <h4 className="text-xl font-medium">Highlights from this Business</h4>
        <p className=" hover:text-gray-500 text-gray-700 text-sm underline cursor-pointer">
          View All
        </p>
      </div>
      <div className="flex justify-around md:justify-start md:gap-x-24 gap-x-5 flex-wrap gap-y-5">
        {attributes.map((attribute, i) => {
          const businessAttribute = iconData.find(
            (businessAttribute) => businessAttribute.name === attribute
          );
          return (
            <div
              key={i}
              className="shrink-0 flex py-4 flex-col items-center gap-2 justify-center rounded-md"
            >
              {businessAttribute?.icon(35)}
              <p className="capitalize text-center">{attribute}</p>
            </div>
          );
        })}
      </div>
      <div className="border border-gray-200 mb-12 md:mb-16" />
    </div>
  );
}
