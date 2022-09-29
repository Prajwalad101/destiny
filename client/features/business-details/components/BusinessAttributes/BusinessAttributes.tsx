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
    <div
      className={classNames(
        'flex gap-x-5 md:gap-x-8 gap-y-5 flex-wrap',
        className
      )}
    >
      {attributes.map((attribute, i) => {
        const businessAttribute = iconData.find(
          (businessAttribute) => businessAttribute.name === attribute
        );
        return (
          <div
            key={i}
            className="shrink-0 flex items-center gap-4 shadow-[0px_2px_15px_0px_rgba(0,0,0,0.15)] rounded-md px-5 sm:px-8 py-3"
          >
            {businessAttribute?.icon(25)}
            <span className="capitalize">{attribute}</span>
          </div>
        );
      })}
    </div>
  );
}
