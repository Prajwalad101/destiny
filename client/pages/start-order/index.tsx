import { BrowseMenu } from '@features/business-details/components';
import { MenuItem } from '@features/business-details/data/menuData';
import { Divider, PrimaryButton, SecondaryButton } from 'components';
import { NavigationProvider, QueryProvider } from 'components/context-provider';
import { AppLayout } from 'components/layout';
import { Navbar, Sidebar } from 'components/navigation';
import { NextPageWithLayout } from 'pages/_app';
import { useState } from 'react';

export interface ISelectedMenuItem {
  item: MenuItem;
  quantity: number;
}

const StartOrderPage: NextPageWithLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<ISelectedMenuItem[]>([]);

  return (
    <>
      <BrowseMenu
        isOpen={isMenuOpen}
        closeModal={() => setIsMenuOpen(false)}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
      <div className="mt-16">
        <h1 className="mb-16 font-merriweather text-3xl font-bold underline">
          Start your Order
        </h1>
        <div className="mb-9">
          <h5 className="mb-2 text-xl font-medium">Order Details</h5>
          <p className="mb-9 text-gray-600">
            Your order is empty. Please select some items
          </p>
          <SecondaryButton
            className="mb-6 px-6 py-2"
            onClick={() => setIsMenuOpen(true)}
          >
            Browse Menu
          </SecondaryButton>
          <Divider />
        </div>

        <div className="mb-9">
          <h5 className="mb-2 text-xl font-medium">Personal Details</h5>
          <p className="mb-9 text-gray-600">
            Fill all the fields with correct information
          </p>
          <div className="mb-5 flex items-center gap-5">
            <label htmlFor="name" className="w-[150px]">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="rounded-md border border-gray-300 px-5 py-2"
            />
          </div>
          <div className="mb-5 flex items-center gap-5">
            <label htmlFor="phone-number" className="w-[150px]">
              Phone Number:
            </label>
            <input
              type="text"
              placeholder="(+977)"
              id="phone-number"
              className="rounded-md border border-gray-300 px-5 py-2"
            />
          </div>
          <div className="mb-6 flex items-center gap-5">
            <label htmlFor="address" className="w-[150px]">
              Delivery Address:
            </label>
            <input
              type="text"
              placeholder="eg: Kapan, Baluwakhani"
              id="address"
              className="rounded-md border border-gray-300 px-5 py-2"
            />
          </div>
          <Divider />
        </div>

        <div className="mb-9">
          <h5 className="mb-2 text-xl font-medium">Payment Details</h5>
          <p className="mb-9 text-gray-600">Please select a payment option</p>
          <div className="mb-5 flex items-center gap-5">
            <input type="radio" id="cash" name="payment-option" />
            <label htmlFor="cash">Cash on delivery</label>
          </div>
          <div className="mb-6 flex items-center gap-5 text-gray-500 ">
            <input disabled type="radio" id="e-sewa" name="payment-option" />
            <label htmlFor="e-sewa" className="">
              E-sewa
            </label>
          </div>
          <Divider />
        </div>

        <div className="mb-20 flex gap-7">
          <SecondaryButton className="px-6 py-2">Cancel</SecondaryButton>
          <PrimaryButton className="px-6 py-2">Place Order</PrimaryButton>
        </div>
      </div>
    </>
  );
};

export default StartOrderPage;

StartOrderPage.getLayout = (page, pageProps) => (
  <QueryProvider pageProps={pageProps}>
    <AppLayout size="lg">
      <NavigationProvider>
        <Navbar theme="light" />
        <Sidebar />
      </NavigationProvider>
      {page}
    </AppLayout>
  </QueryProvider>
);
