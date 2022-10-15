import { PrimaryButton, SecondaryButton } from 'components';

export default function Buttons({ onClick }: { onClick: () => void }) {
  return (
    <div className="flex flex-wrap items-start justify-end gap-4">
      <SecondaryButton
        type="button"
        className="h-[45px] w-[120px]"
        onClick={onClick}
      >
        Cancel
      </SecondaryButton>
      <PrimaryButton type="submit" className="h-[45px] w-[120px]">
        Post
      </PrimaryButton>
    </div>
  );
}
