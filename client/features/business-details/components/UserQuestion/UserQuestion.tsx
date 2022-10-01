import {
  ReportUserDropdown,
  UserProfile,
} from '@features/business-details/components';

const userImg =
  'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';

interface UserQuestionProps {
  businessName: string;
}

export default function UserQuestion({ businessName }: UserQuestionProps) {
  return (
    <div>
      <div className="mb-7">
        <div className="flex justify-between mb-4">
          <UserProfile
            profile={{ name: 'sagar thapa', image: userImg, time: '1 mo ago' }}
          />
          <ReportUserDropdown />
        </div>
        <p>
          Hi. I would like to know of your resturant has live music at the end
          of the day
        </p>
      </div>
      {/* Answer */}
      <div className="flex">
        <div className="bg-gray-300 w-1 shrink-0" />
        <div className="ml-5 w-full">
          <p className="mb-2 text-gray-700">{businessName} answered</p>
          <p className="lg:w-[80%] md:w-[90%]">
            Yes Sagar. We have live music performances on every opening day. The
            program usually starts from 7 PM and ends at 10 PM
          </p>
        </div>
      </div>
    </div>
  );
}
