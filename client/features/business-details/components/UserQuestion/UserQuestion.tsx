import Image from 'next/image';
import ReportUserDropdown from '../ReportUserDropdown/ReportUserDropdown';

const userImg =
  'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';

const user1Img =
  'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';

export default function UserQuestion() {
  return (
    <div className="mb-5">
      <div className="mb-6 flex gap-5">
        <div className="flex flex-col items-center gap-6">
          <div className="h-[50px] w-[50px] shrink-0 ">
            <Image
              className="rounded-full"
              src={userImg}
              alt="user-profile"
              width={50}
              height={50}
              objectFit="cover"
            />
          </div>
          <div className="grow border-l-[3px] border-gray-200" />
        </div>
        <div>
          <div className="flex items-start justify-between">
            <div className="mb-4">
              <p className="font-medium capitalize">milan basnet</p>
              <div className="flex items-center gap-4">
                <p className="text-gray-600">8 reviews</p>
                <div className="h-[5px] w-[5px] shrink-0 rounded-full bg-gray-600" />
                <p className="text-gray-600">3 d</p>
              </div>
            </div>
            <ReportUserDropdown />
          </div>
          <p className="mb-3">
            Is everything in this place completely vegeterian. I’m asking
            because my grandmother is strictly vegeterian and thought this was a
            cool place to visit.
          </p>
          <div className="mb-8 flex items-center gap-4">
            <button className="text-blue-600 hover:text-blue-800">Like</button>
            <Seperator />
            <button className="text-blue-600 hover:text-blue-800">Reply</button>
            <Seperator />
            <p className="text-gray-600">18 likes</p>
          </div>
          <UserReply />
        </div>
      </div>
      <p className="ml-6 w-max cursor-pointer text-gray-600 underline transition-colors hover:text-black">
        View 2 more replies
      </p>
    </div>
  );
}

function UserReply() {
  return (
    <>
      <div className="mb-6 flex gap-4">
        <div className="h-[50px] w-[50px] shrink-0 ">
          <Image
            className="rounded-full"
            src={user1Img}
            alt="user-profile"
            width={50}
            height={50}
            objectFit="cover"
          />
        </div>
        <div>
          <p className="mb-3">
            Absolutely. Went there last month. Every item on the menu is purely
            vegeterian. Your grandmother would love this place.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-gray-600">Suresh Adhikari</p>
            <Seperator />
            <button className="text-blue-600 hover:text-blue-800">Like</button>
            <Seperator />
            <button className="text-blue-600 hover:text-blue-800">Reply</button>
            <Seperator />
            <p className="text-gray-600">1 d</p>
          </div>
        </div>
        <ReportUserDropdown />
      </div>
      <p className="w-max cursor-pointer text-gray-600 underline transition-colors hover:text-black">
        View 3 more replies
      </p>
    </>
  );
}

function Seperator() {
  return <div className="h-[5px] w-[5px] shrink-0 rounded-full bg-gray-600" />;
}
