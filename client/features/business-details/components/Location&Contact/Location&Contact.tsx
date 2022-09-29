import { AiOutlineMail } from 'react-icons/ai';
import { BiPhone } from 'react-icons/bi';
import { BsLaptop } from 'react-icons/bs';
import { TbBuildingCommunity } from 'react-icons/tb';
import { classNames } from 'utils/tailwind';

interface LocationAndContactProps {
  className?: string;
}

export default function LocationAndContact({
  className = '',
}: LocationAndContactProps) {
  return (
    <div
      className={classNames(
        className,
        'rounded-md border-2 border-gray-200 px-5 py-6'
      )}
    >
      <h4 className="text-xl font-medium mb-6">
        Location and Contact Information
      </h4>
      <div className="w-full h-[200px] bg-gray-200 mb-5" />
      <div className="flex items-start gap-4 mb-10 ">
        <TbBuildingCommunity size={23} className="shrink-0" />
        <span>2.5 miles from Bouddha stupa</span>
      </div>

      <div className="flex gap-4 mb-3">
        <BiPhone size={23} className="shrink-0" />
        <span>+977 980-3939558</span>
      </div>
      <div className="flex gap-4 mb-3">
        <AiOutlineMail size={23} className="shrink-0" />
        <span className="break-all">business.laughingbird@gmail.com</span>
      </div>
      <div className="flex gap-4 cursor-pointer hover:text-gray-600">
        <BsLaptop size={23} className="shrink-0" />
        <span className="underline">Website</span>
      </div>
    </div>
  );
}
