import { Divider } from 'src/components';

export default function Header() {
  return (
    <div className="sticky top-0 z-20 bg-white pt-7 md:pt-10">
      <h2 className="mb-3 text-2xl font-medium sm:text-3xl">
        General Information
      </h2>
      <p className="mb-7 text-gray-600 md:mb-10">
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
  );
}
