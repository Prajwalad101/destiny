import { PrimaryButton, SecondaryButton } from 'components';

interface SendMessageProps {
  closeModal: () => void;
}

export default function SendMessage({ closeModal }: SendMessageProps) {
  return (
    <div className="rounded-sm bg-white px-8 py-8">
      <h3 className="mb-2 font-merriweather text-xl font-bold">Send Message</h3>
      <p className="mb-10 text-gray-600">
        This message is sent directly to the inbox of the business
      </p>
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500">
          <p className="text-white">A</p>
        </div>
        <p>Abi Budhathoki</p>
      </div>

      <div className="mb-10">
        <textarea
          rows={6}
          className="mb-2 w-full rounded-md bg-gray-200 p-5 outline-none ring-blue-500 ring-offset-2 focus:ring"
          placeholder="Write your message to the business"
        />
        <p className="text-right text-gray-600">0 / 500</p>
      </div>

      <div className="flex flex-wrap gap-5">
        <PrimaryButton className="px-10 py-2.5">Send</PrimaryButton>
        <SecondaryButton className="px-10 py-2.5" onClick={closeModal}>
          Cancel
        </SecondaryButton>
      </div>
    </div>
  );
}
