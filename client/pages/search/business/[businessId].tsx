import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient } from 'react-query';
import ConditionalRender from '../../../components/conditional-render/ConditionalRender';
import RatingIcons from '../../../components/icons/ratings/RatingIcons';
import ImageScroll from '../../../components/image/scroll/ImageScroll';
import AppLayout from '../../../components/layout/app/AppLayout';
import NavLayout from '../../../components/layout/navigation/NavLayout';
import ProviderLayout from '../../../components/layout/provider/ProviderLayout.';
import useBusiness, {
  fetchBusiness,
} from '../../../hooks/business/useBusiness';
import { checkIsOpen } from '../../../utils/api';
import { truncateText } from '../../../utils/text';
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
      <div className="mt-4 font-rubik">
        <div className="relative mb-4 h-[200px] w-full">
          <Image
            alt={businessData.name}
            src={businessData.images[0]}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h4 className="mb-2 text-xl font-medium">{businessData.name}</h4>
        {/* Rating, No.Reviews */}
        <div className="mb-2 flex items-center gap-4">
          <RatingIcons avgRating={businessData.avgRating} />
          <span>{businessData.rating_count} reviews</span>
          <span className="font-medium">
            {checkIsOpen(businessData.businessHours) ? 'Open Now' : 'Closed'}
          </span>
        </div>
        {/* Address */}
        <p className="mb-3 text-secondarytext">
          {businessData.location.address}
        </p>
        {/* Tags */}
        <div className="mb-3 flex gap-2">
          <div className="w-max cursor-pointer rounded-sm bg-gray-200 px-3 py-[2px] hover:bg-gray-300">
            <span className="text-sm capitalize text-secondarytext">
              {businessData.tags[0]}
            </span>
          </div>
          <div className="w-max cursor-pointer rounded-sm bg-gray-200 px-3 py-[2px] hover:bg-gray-300">
            <span className="text-sm capitalize text-secondarytext">
              {businessData.tags[1]}
            </span>
          </div>
        </div>
        {/* Description */}
        {/* <p>{businessData.description}</p> */}
        <p className="mb-7 text-gray-600">
          {truncateText(
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, nihil dignissimos? Odio vitae dolor quasi eum eos sequi asperiores unde.',
            20
          )}
          <span className="cursor-pointer text-primaryred  hover:text-red-600">
            {' '}
            Read More
          </span>
        </p>
        <div>
          <ImageScroll
            businessId={businessData._id}
            images={businessData.images}
          />
        </div>
      </div>
    </ConditionalRender>
  );
};

export default Business;

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

Business.getLayout = (page, pageProps) => (
  <ProviderLayout pageProps={pageProps}>
    <NavLayout>
      <AppLayout size="sm">{page}</AppLayout>
    </NavLayout>
  </ProviderLayout>
);
