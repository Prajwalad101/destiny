import {
  GetStartedLayout,
  Navbar,
} from '../../components/features/create-business';
import AppLayout from '../../components/layout/app/AppLayout';
import { NextPageWithLayout } from '../_app';

const GetStarted: NextPageWithLayout = () => {
  return <GetStartedLayout />;
};

GetStarted.getLayout = (page) => (
  <>
    <Navbar />
    <AppLayout size="sm">{page}</AppLayout>
  </>
);

export default GetStarted;
