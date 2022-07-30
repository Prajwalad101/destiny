import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import SecondaryButton from '../../components/button/secondary/SecondaryButton';
import {
  MyTextArea,
  MyTextInput,
  Navbar,
} from '../../components/features/create-business';
import AppLayout from '../../components/layout/app/AppLayout';
import { classNames } from '../../utils/css';
import { NextPageWithLayout } from '../_app';

interface MyFormValues {
  businessName: string;
  description: string;
  address: string;
}

const RegisterBusiness: NextPageWithLayout = () => {
  const initialValues: MyFormValues = {
    businessName: '',
    description: '',
    address: '',
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          businessName: Yup.string()
            .max(40, 'Must be 40 characters or less')
            .required('Required'),
          description: Yup.string()
            .max(250, 'Must be 250 characters or less')
            .required('Required'),
          address: Yup.string()
            .max(40, 'Must be 40 characters or less')
            .required('Required'),
        })}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Step1 />
      </Formik>
    </div>
  );
};

function Step1() {
  return (
    <div className="mt-10 font-rubik">
      <h1 className="mb-5 text-xl font-medium">
        First,
        <br /> Let&apos;s fill out some basic information
      </h1>
      <ProgressStatus className="mb-10" />
      <Form>
        <div>
          <MyTextInput
            name="businessName"
            type="text"
            placeholder="eg: Shrestha Futsal"
            label="Business Name"
            subLabel="Enter the full name of your business"
          />
        </div>

        <div>
          <MyTextArea
            name="description"
            type="text"
            label="Description"
            subLabel=" Enter the description your business. Tell the customers about your
            business and include some key features"
          />
        </div>

        <div>
          <MyTextInput
            name="businessName"
            type="text"
            placeholder="eg: Shrestha Futsal"
            label="Address"
            subLabel="Provide full address of the business location. Make sure the address
            is short and recognizable"
          />
        </div>

        <SecondaryButton>
          <p className="px-6 py-2">Continue</p>
        </SecondaryButton>
      </Form>
    </div>
  );
}

function ProgressStatus({ className = '' }: { className?: string }) {
  return (
    <div className={classNames(className, 'flex gap-5')}>
      <div className="h-1 w-14 rounded-md bg-blue-500" />
      <div className="h-1 w-14 rounded-md bg-gray-300" />
      <div className="h-1 w-14 rounded-md bg-gray-300" />
    </div>
  );
}

RegisterBusiness.getLayout = (page) => (
  <>
    <Navbar />
    <AppLayout size="sm">{page}</AppLayout>
  </>
);

export default RegisterBusiness;
