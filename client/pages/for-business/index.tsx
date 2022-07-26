import Image from 'next/image';
import { BsCheck2 } from 'react-icons/bs';
import AppLayout from '../../components/layout/app/AppLayout';
import Sidebar from '../../components/navigation/sidebar/Sidebar';
import ForBusinessHero from '../../components/sections/for-business/hero/ForBusinessHero.section';
import { NavigationProvider } from '../../context/navigation.context';
import { classNames } from '../../utils/css';
import { NextPageWithLayout } from '../_app';

const cardData = [
  {
    id: 1,
    heading: (
      <h4 className="mb-5 text-xl font-medium md:pt-7">
        Manage your business information
      </h4>
    ),
    image: '/images/for-business/publish-post.png',
    items: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit Corrupti, necessitatibus',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore nostrum aspernatur consequuntur.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.',
    ],
  },
  {
    id: 2,
    heading: (
      <h4 className="mb-5 pt-2 text-xl font-medium">Interact with customers</h4>
    ),
    image: '/images/for-business/people-search.png',
    items: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit Corrupti, necessitatibus',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore nostrum aspernatur consequuntur.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.',
    ],
  },
  {
    id: 3,
    heading: (
      <h4 className="mb-5 pt-6 text-xl font-medium">
        Receive important reviews
      </h4>
    ),
    image: '/images/for-business/online-connection.png',
    items: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit Corrupti, necessitatibus',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore nostrum aspernatur consequuntur.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.',
    ],
  },
];

const ForBusiness: NextPageWithLayout = () => {
  return (
    <div>
      <ForBusinessHero />
      <AppLayout>
        <div className="md:my-20">
          {cardData.map((data, index) => (
            <>
              <DetailCard
                {...data}
                flip={index % 2 ? true : false}
                key={index}
              />
              <Seperators />
            </>
          ))}
        </div>
      </AppLayout>
    </div>
  );
};

export default ForBusiness;

ForBusiness.getLayout = (page) => (
  <NavigationProvider>
    <Sidebar />
    {page}
  </NavigationProvider>
);

interface DetailCardProps {
  heading: React.ReactNode;
  items: string[];
  image: string;
  flip?: boolean;
  itemPadding?: number;
}

function DetailCard({ heading, image, items, flip }: DetailCardProps) {
  return (
    <div
      className={classNames(
        flip ? 'md:flex-row-reverse' : 'md:flex-row',
        'container mx-auto flex flex-col items-center gap-10 font-rubik md:items-start lg:w-[880px]'
      )}
    >
      <div className="w-[300px] shrink-0 sm:w-[330px] md:w-[360px]">
        <Image
          src={image}
          alt="img"
          width={360}
          height={290}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div>
        {heading}
        <div className="child-notlast:mb-3">
          {items.map((item, index) => (
            <div className="flex gap-3" key={index}>
              <BsCheck2 size={20} className="mt-1 shrink-0 text-blue-800" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Seperators() {
  return (
    <div className="mx-auto my-20 flex w-10 gap-2">
      <div className="h-[7px] w-[7px] rounded-full bg-primaryred" />
      <div className="h-[7px] w-[7px] rounded-full bg-primaryred" />
      <div className="h-[7px] w-[6px] rounded-full bg-primaryred" />
    </div>
  );
}
