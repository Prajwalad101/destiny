import RatingIcons from 'components/icons/ratings/RatingIcons';
import Image from 'next/image';

export default function ReviewCard() {
  return (
    <div className="h-[450px] bg-gray-100 shadow-md rounded-md hover:shadow-lg overflow-hidden text-ellipsis hover:scale-[101%] transition-all">
      <div className="relative h-[250px]">
        <Image
          src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="review-image"
          layout="fill"
          objectFit="cover"
          className="rounded-t-md"
        />
      </div>
      <div className="p-3">
        <div className="flex justify-between mb-3">
          <h3 className="decoration-2 decoration-red-400 font-medium text-lg leading-tight cursor-pointer hover:underline">
            The Burger House
          </h3>
          <div>
            <RatingIcons rating={4.5} />
          </div>
        </div>
        <div className="flex justify-between mb-3 items-center">
          <div className="flex gap-2 items-center group cursor-pointer">
            <div className="shrink-0 h-[25px]">
              <Image
                src="https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                alt="user profile image"
                width={25}
                height={25}
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <span className="inline-block text-gray-700 hover:underline group-hover:underline">
              Milan shrestha
            </span>
            {/* <span className="pl-1 inline-block text-gray-700">wrote</span> */}
          </div>
          <span className="inline-block text-gray-500 text-sm">5 min ago</span>
        </div>
        <p className="line-clamp">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          tempora possimus, explicabo distinctio provident velit quibusdam,
          suscipit vel blanditiis sed dolores veniam voluptatibus cum qui quis
          eum molestias perferendis ducimus maiores consectetur mollitia!
          Nostrum necessitatibus nemo iure minima saepe earum consequatur magni!
          Reiciendis nobis sequi debitis blanditiis, rerum dolores praesentium?
        </p>
      </div>
    </div>
  );
}
