import { MyListBox, TimePicker } from '@features/register-business/components';
import { Divider } from 'src/components';

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
      <div className="sticky top-0 z-10 bg-white pt-10">
        <h2 className="mb-3 text-3xl font-medium">General Information</h2>
        <p className="mb-10 text-gray-600">
          First, we need to know a little bit more about your business
        </p>
        <div className="relative ml-[50%] h-1 w-[100vw] -translate-x-[50%]">
          <Divider
            width={3}
            className="absolute left-0 z-20 w-1/4 border-primaryred"
          />
          <Divider width={3} className="absolute left-0 right-0" />
        </div>
      </div>

      {/* Business name input */}
      <div className="mt-28 mb-24 flex items-center justify-between gap-32">
        <div className="">
          <span className="mb-2 block text-gray-400">1. Name</span>
          <label htmlFor="name" className="inline-block text-lg font-medium">
            Full name of your business
          </label>
        </div>
        <input
          type="text"
          id="name"
          className="max-w-xl grow rounded-md border-2 border-gray-400/60 px-4 py-3 outline-none ring-blue-600 ring-offset-1 transition-all focus:ring-[3px]"
          placeholder="eg: The Burger House"
        />
      </div>

      {/* Business description input */}
      <div className="mb-20 flex items-start justify-between">
        <div>
          <span className="mb-2 block text-gray-400">2. Description</span>
          <label
            htmlFor="description"
            className="inline-block text-lg font-medium"
          >
            Brief summary of your business
          </label>
        </div>
        <div className="max-w-xl grow">
          <textarea
            id="description"
            rows={7}
            className="mb-2 w-full rounded-md border-2 border-gray-400/60 px-4 py-3 outline-none ring-blue-600 ring-offset-2 transition-all focus:ring-[3px]"
          />
          <p className="text-right text-gray-400">0 / 200 words</p>
        </div>
      </div>

      {/* Business address input */}
      <div className="mb-32 flex items-start justify-between">
        <div>
          <span className="mb-2 block text-gray-400">3. Address</span>
          <label htmlFor="address" className="inline-block text-lg font-medium">
            Address, City and Zip code.
          </label>
        </div>
        <div className="max-w-xl grow">
          <input
            type="text"
            id="address"
            className="mb-5 w-full rounded-md border-2 border-gray-400/60 px-4 py-3 outline-none ring-blue-600 ring-offset-2 transition-all focus:ring-[3px]"
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
          <span className="mb-2 block text-gray-400">4. Working Hours</span>
          <label htmlFor="hours" className="inline-block text-lg font-medium">
            Hours your business operates on
          </label>
        </div>
        <TimePicker className="max-w-xl grow" />
      </div>
    </div>
  );
}
