import Image from 'next/image';
import { classNames } from 'utils/tailwind';

interface UserProfileProps {
  profile: {
    name: string;
    image: string;
    time: string;
  };
  className?: string;
}

export default function UserProfile({
  profile,
  className = '',
}: UserProfileProps) {
  return (
    <div className={classNames('flex items-center gap-5', className)}>
      <div className="h-[45px] shrink-0">
        <Image
          className="rounded-full"
          src={profile.image}
          alt="user-profile"
          width={45}
          height={45}
          objectFit="cover"
        />
      </div>
      <div>
        <p className="capitalize">{profile.name}</p>
        <p className="text-sm text-gray-500">{profile.time}</p>
      </div>
    </div>
  );
}
