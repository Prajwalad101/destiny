import { Divider, PrimaryButton, SecondaryButton } from 'components';
import Link from 'next/link';
import { useState } from 'react';
import { classNames } from 'utils/tailwind';
import SendMessage from '../modals/SendMessage/SendMessage';

interface ServicesProps {
  className?: string;
}

export default function Services({ className = '' }: ServicesProps) {
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  return (
    <>
      <SendMessage
        isOpen={isMessageOpen}
        closeModal={() => setIsMessageOpen(false)}
      />
      <div
        className={classNames(
          className,
          'top-7 w-full rounded-md border-2 border-gray-200 p-5 md:sticky md:max-w-[330px] lg:max-w-[440px]'
        )}
      >
        <h4 className="mb-3 text-xl font-medium">Services</h4>
        <Divider width={2} className="-mx-5 mb-5 border-gray-200" />

        <div className="mb-7">
          <p className="mb-3 text-gray-700">
            - Connect with the business by sending a direct message
          </p>
          <SecondaryButton
            className="w-full max-w-[200px] py-2.5"
            onClick={() => setIsMessageOpen(true)}
          >
            Send a message
          </SecondaryButton>
        </div>

        <div className="mb-7">
          <p className="mb-3 text-gray-700">
            - Get directions to the business from your current location
          </p>
          <SecondaryButton className="w-full max-w-[200px] py-2.5">
            Get directions
          </SecondaryButton>
        </div>

        <div>
          <p className="mb-3 text-gray-700">
            - Easily browse menu and order food directly from ____
          </p>
          <Link
            href={{
              pathname: '/start-order',
              query: { name: 'Your name' },
            }}
          >
            <a>
              <PrimaryButton className="w-full max-w-[200px] py-2.5">
                Order Food
              </PrimaryButton>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
