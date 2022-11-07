import { Divider } from 'src/components';

export default function FormStep1() {
  return (
    <div>
      <h2 className="mb-3 text-3xl">General Information</h2>
      <p className="mb-10 text-gray-600">
        First, we need to know a little bit more about your business
      </p>
      <Divider width={3} className="absolute left-0 right-0" />
      <Divider width={3} className="absolute left-0 w-1/4 border-primaryred" />
    </div>
  );
}
