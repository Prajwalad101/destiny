import { PrimaryButton } from 'components';

interface AboutProps {
  description: string;
  closeModal: () => void;
}

export default function About({ description, closeModal }: AboutProps) {
  return (
    <div className="rounded-md bg-white p-5 xs:p-8">
      <h3 className="mb-6 font-merriweather text-xl font-bold">About</h3>
      <p className="mb-8 text-gray-800">{description}</p>
      <div className="flex justify-end">
        <PrimaryButton className="px-8 py-2.5" onClick={closeModal}>
          Close
        </PrimaryButton>
      </div>
    </div>
  );
}
