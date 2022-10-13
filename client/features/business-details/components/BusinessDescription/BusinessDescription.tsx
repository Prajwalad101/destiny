import { About } from '@features/business-details/components';
import { MyModal } from 'components';
import { useState } from 'react';

interface BusinessDescriptionProps {
  description: string;
  className?: string;
}

export default function BusinessDescription({
  description,
  className = '',
}: BusinessDescriptionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MyModal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        className="w-full max-w-2xl"
      >
        <About description={description} closeModal={() => setIsOpen(false)} />
      </MyModal>
      <div className={className}>
        <span className="line-clamp-3 leading-[26px]">{description}</span>
        <span
          onClick={() => setIsOpen(true)}
          className="mt-1 inline-block cursor-pointer text-black underline hover:text-gray-700"
        >
          Read More
        </span>
      </div>
    </>
  );
}
