import { Divider, PrimaryButton, SecondaryButton } from 'components';
import { IOrderedMenuItem } from 'pages/start-order';
import { IoIosClose } from 'react-icons/io';

interface PlaceOrderProps {
  closeModal: () => void;
  orderedItems: IOrderedMenuItem[];
}

export default function PlaceOrder({
  closeModal,
  orderedItems,
}: PlaceOrderProps) {
  let totalPrice = 0;
  orderedItems.forEach(
    (orderedItem) =>
      (totalPrice += orderedItem.item.price * orderedItem.quantity)
  );

  return (
    <div className="rounded-sm bg-white px-6 py-8">
      <h3 className="mb-2 font-merriweather text-xl font-bold">
        Confirm your order
      </h3>
      <p className="mb-12 text-gray-600">
        Please review all the details and confirm your order
      </p>
      <div>
        <div className="mb-5 flex flex-col gap-x-7 gap-y-1 xs:flex-row xs:items-center">
          <p className="w-[140px]">Name:</p>
          <p className="text-gray-700">Prajwal Adhikari</p>
        </div>
        <div className="mb-5 flex flex-col gap-x-7 gap-y-1 xs:flex-row xs:items-center">
          <p className="w-[140px]">Delivery Address:</p>
          <p className="text-gray-700">Kapan, Baluwakhani</p>
        </div>
        <div className="mb-5 flex flex-col gap-x-7 gap-y-1 xs:flex-row xs:items-center">
          <p className="w-[140px]">Phone Number:</p>
          <p className="text-gray-700">980-3939558</p>
        </div>
        <div className="mb-5 flex flex-col gap-x-7 gap-y-1 xs:flex-row xs:items-center">
          <p className="w-[140px]">Payment Method:</p>
          <p className="text-gray-700">Cash on delivery</p>
        </div>
      </div>
      <Divider className="my-6" />
      <div>
        <p className="mb-6 uppercase text-gray-700">Items your ordered</p>
        {orderedItems.map((orderedItem) => (
          <div
            key={orderedItem.item.id}
            className="mb-4 flex flex-col justify-between gap-y-1 sm:flex-row"
          >
            <div className="flex items-center justify-between gap-6 sm:justify-start">
              <p className="capitalize">{orderedItem.item.name}</p>
              <div className="flex items-center text-gray-600">
                <IoIosClose size={25} />
                <p>{orderedItem.quantity}</p>
              </div>
            </div>
            <p className="text-gray-700">
              Rs. {orderedItem.item.price * orderedItem.quantity}
            </p>
          </div>
        ))}
      </div>
      <Divider className="my-6" />
      <div className="mb-10 font-medium">
        <div className="mb-3 flex flex-wrap gap-y-1">
          <p className="w-[120px]">Items Price</p>
          <p>Rs. {totalPrice}</p>
        </div>
        <div className="mb-3 flex flex-wrap gap-y-1">
          <p className="w-[120px]">Delivery Price</p>
          <p>Rs. 50</p>
        </div>
        <div className="mb-3 flex flex-wrap gap-y-1">
          <p className="w-[120px]">Total Price</p>
          <p>Rs. 950</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-5">
        <PrimaryButton className="w-[120px] py-2">Confirm</PrimaryButton>
        <SecondaryButton onClick={closeModal} className="w-[120px] py-2">
          Cancel
        </SecondaryButton>
      </div>
    </div>
  );
}
