import { IReview } from '@destiny/types';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { dehydrate, QueryClient } from 'react-query';
import ConditionalRender from '../../../components/conditional-render/ConditionalRender';
import RatingIcons from '../../../components/icons/ratings/RatingIcons';
import ImageScroll from '../../../components/image/scroll/ImageScroll';
import AppLayout from '../../../components/layout/app/AppLayout';
import NavLayout from '../../../components/layout/navigation/NavLayout';
import ProviderLayout from '../../../components/layout/provider/ProviderLayout.';
import BusinessInfo from '../../../components/sections/business-info/BusinessInfo.section';
import useBusiness, {
  fetchBusiness,
} from '../../../hooks/business/useBusiness';
import { getRelativeDate } from '../../../utils/date';
import { NextPageWithLayout } from '../../_app';

const Business: NextPageWithLayout = () => {
  const router = useRouter();
  const { query } = router;
  const businessId = query.businessId as string;

  const businessResult = useBusiness(businessId);
  const { isLoading, isError } = businessResult;

  const businessData = businessResult.data?.data;
  if (businessData === undefined) {
    return null;
  }

  return (
    <ConditionalRender isLoading={isLoading} isError={isError}>
      <BusinessInfo business={businessData} />
      <div className="mt-8 mb-5 border-b-2 border-gray-200"></div>
      <Reviews reviews={businessData.reviews} />
    </ConditionalRender>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.params;
  const businessId = params?.businessId as string;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    ['business', businessId],
    () => fetchBusiness(businessId),
    { staleTime: 1000 * 10 }
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const images = [
  'https://dummyimage.com/300.png/09f/fff&text=1',
  'https://dummyimage.com/300.png/09f/fff&text=2',
  'https://dummyimage.com/300.png/09f/fff&text=3',
  'https://dummyimage.com/300.png/09f/fff&text=4',
  'https://dummyimage.com/300.png/09f/fff&text=5',
  'https://dummyimage.com/300.png/09f/fff&text=6',
  'https://dummyimage.com/300.png/09f/fff&text=7',
  'https://dummyimage.com/300.png/09f/fff&text=8',
  'https://dummyimage.com/300.png/09f/fff&text=9',
];

function Reviews({ reviews }: { reviews: IReview[] }) {
  return (
    <div className="mb-5 font-rubik">
      <h4 className="mb-5 text-xl font-medium text-gray-700">Top Reviews</h4>
      <div className="child-notlast:mb-7">
        {reviews.map((review) => (
          <div key={review._id.toString()}>
            <div className="mb-2 flex items-center gap-3">
              <Image
                className="rounded-full"
                src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="user-profile"
                width={35}
                height={35}
                objectFit="cover"
              />
              <span className="font-medium capitalize">sagar thapa</span>
            </div>
            <div className="mb-2 flex items-center gap-3">
              <RatingIcons avgRating={review.rating} />
              <span className="text-sm capitalize text-secondarytext">
                {getRelativeDate(review.createdAt)}
              </span>
            </div>
            <p className="mb-4">{review.review}</p>
            <ImageScroll
              noItems={images.length}
              initialItems={3}
              className="mb-4"
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="slider-img relative h-[150px] shrink-0"
                >
                  <Image
                    src={image}
                    key={index}
                    alt="image"
                    layout="fill"
                    className="slider-next-img"
                    objectFit="cover"
                  />
                </div>
              ))}
            </ImageScroll>
            <div className="flex items-center gap-7">
              <div className="mb-4 flex items-center gap-2">
                <AiOutlineLike
                  size={22}
                  className="cursor-pointer hover:text-blue-500"
                />
                <span>{review.likes} likes</span>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <AiOutlineDislike
                  size={22}
                  className="cursor-pointer hover:text-primaryred"
                />
              </div>
            </div>
            <div className="border-b-[1px] border-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Business;

Business.getLayout = (page, pageProps) => (
  <ProviderLayout pageProps={pageProps}>
    <NavLayout>
      <AppLayout size="sm">{page}</AppLayout>
    </NavLayout>
  </ProviderLayout>
);
