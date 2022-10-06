import { PrimaryButton, SecondaryButton } from 'components';
import { useState } from 'react';
import { classNames } from 'utils/tailwind';

interface OrderFoodProps {
  className?: string;
}

export default function OrderFood({ className = '' }: OrderFoodProps) {
  const [selectedOption, setSelectedOption] = useState('delivery');
  return (
    <div
      className={classNames(
        className,
        'sticky top-10 border-2 p-5 border-gray-200 rounded-md max-w-2xl'
      )}
    >
      <h4 className="font-medium text-xl mb-6">
        Order food by <span className="capitalize">{selectedOption}</span>
      </h4>
      <div className="flex justify-between items-center mb-10">
        <div className="flex gap-7 -ml-3">
          <button
            className={classNames(
              selectedOption === 'delivery'
                ? 'border-primaryred'
                : 'border-white',
              'px-3 py-1 border-b-[3px]'
            )}
            onClick={() => setSelectedOption('delivery')}
          >
            Delivery
          </button>
          <button
            className={classNames(
              selectedOption === 'takeout'
                ? 'border-primaryred'
                : 'border-white',
              'px-3 py-1 border-b-[3px]'
            )}
            onClick={() => setSelectedOption('takeout')}
          >
            Takeout
          </button>
        </div>
        <p className="underline text-sm text-gray-600 cursor-pointer">
          View Charges
        </p>
      </div>
      {/* Input Fields */}
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <label
          htmlFor="delivery"
          className={classNames(
            selectedOption === 'takeout' ? 'text-gray-500' : '',
            'w-[130px]'
          )}
        >
          Delivery Address:
        </label>
        <input
          type="text"
          id="delivery"
          placeholder="eg: Kapan, Baluwakhani"
          className="flex-grow border-gray-300 border-[1px] rounded-md px-5 py-2"
          disabled={selectedOption === 'takeout'}
        />
      </div>
      <div className="flex items-center gap-4 mb-7">
        <label htmlFor="phone-number" className="w-[130px]">
          Phone Number:
        </label>
        <input
          type="text"
          id="phone-number"
          placeholder="(+977)"
          className="flex-grow border-gray-300 border-[1px] rounded-md px-5 py-2 "
        />
      </div>

      <div className="flex gap-5 items-center mb-9">
        <SecondaryButton>
          <p className="px-6 py-2">Browse Menu</p>
        </SecondaryButton>
        <p className="text-gray-700">No items selected</p>
      </div>

      <div className="-mx-[21px] -mb-[21px]">
        <PrimaryButton className="py-3 w-full">Place Order</PrimaryButton>
      </div>
    </div>
  );
}
