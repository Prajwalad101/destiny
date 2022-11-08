import { Divider } from 'src/components';

export default function Header() {
  return (
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
  );
}
