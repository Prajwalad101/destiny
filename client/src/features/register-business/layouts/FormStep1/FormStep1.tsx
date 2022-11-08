import { MyListBox, TimePicker } from '@features/register-business/components';
import Header from './Header';

const cities = [
  { name: 'Kathmandu' },
  { name: 'Pokhara' },
  { name: 'Butwal' },
  { name: 'Lalitpur' },
  { name: 'Bhaktapur' },
];

interface FormStep1Props {
  className?: string;
}

export default function FormStep1({ className = '' }: FormStep1Props) {
  return (
    <div className={className}>
      <Header />
      {/* Business name input */}
      <div className="mt-28 mb-24 flex items-center justify-between gap-32">
        <div className="">
          <label
            htmlFor="name"
            className="mb-2 inline-block text-lg font-medium"
          >
            Business Name
          </label>
          <span className=" block text-gray-500">
            Provide the full name of your business
          </span>
        </div>
        <input
          type="text"
          id="name"
          className="max-w-xl grow rounded-md border-2 border-gray-300 px-4 py-3 outline-none ring-blue-600 ring-offset-1 transition-all focus:ring-[3px]"
          placeholder="eg: The Burger House"
        />
      </div>

      {/* Business description input */}
      <div className="mb-20 flex items-start justify-between">
        <div className="max-w-md">
          <label
            htmlFor="description"
            className="mb-2 inline-block text-lg font-medium"
          >
            Description
          </label>
          <span className="block text-gray-500">
            Provide a short summary of your business. Tell the customers about
            the business and include some key features
          </span>
        </div>
        <div className="max-w-xl grow">
          <textarea
            id="description"
            rows={7}
            className="mb-2 w-full rounded-md border-2 border-gray-300 px-4 py-3 outline-none ring-blue-600 ring-offset-2 transition-all focus:ring-[3px]"
          />
          <p className="text-right text-gray-400">0 / 200 words</p>
        </div>
      </div>

      {/* Business address input */}
      <div className="mb-32 flex items-start justify-between">
        <div>
          <label
            htmlFor="address"
            className="mb-2 inline-block text-lg font-medium"
          >
            Address
          </label>
          <span className="block text-gray-500">
            Provide the address, city and the zip code of your business
          </span>
        </div>
        <div className="max-w-xl grow">
          <input
            type="text"
            id="address"
            className="mb-5 w-full rounded-md border-2 border-gray-300 px-4 py-3 outline-none ring-blue-600 ring-offset-2 transition-all focus:ring-[3px]"
            placeholder="eg: Kapan, Baluwakhani"
          />
          <div className="flex gap-7">
            <MyListBox
              list={cities}
              listState={{
                selected: { name: 'City' },
                setSelected: () => {
                  return;
                },
              }}
              width={180}
            />
            <MyListBox
              list={cities}
              listState={{
                selected: { name: 'Zip Code' },
                setSelected: () => {
                  return;
                },
              }}
              width={180}
            />
          </div>
        </div>
      </div>
      {/* Working hours */}
      <div className="flex items-start justify-between">
        <div>
          <label
            htmlFor="hours"
            className="mb-2 inline-block text-lg font-medium"
          >
            Working Hours
          </label>
          <span className="block text-gray-500">
            Choose the operating hours of your business
          </span>
        </div>
        <TimePicker className="max-w-xl grow" />
      </div>
    </div>
  );
}
