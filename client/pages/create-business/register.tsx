import { Navbar } from '../../components/features/create-business';
import { NextPageWithLayout } from '../_app';

const RegisterBusiness: NextPageWithLayout = () => {
  return <div></div>;
};

RegisterBusiness.getLayout = (page) => (
  <>
    <Navbar />
    {page}
  </>
);

export default RegisterBusiness;
