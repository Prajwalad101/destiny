import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import SecondaryButton from '../../components/button/secondary/SecondaryButton';
import {
  MyTextArea,
  MyTextInput,
  Navbar,
} from '../../components/features/create-business';
import MyLabel from '../../components/features/create-business/components/Form/MyLabel';
import MySelect from '../../components/features/create-business/components/Form/MySelect';
import MySubLabel from '../../components/features/create-business/components/Form/MySubLabel';
import AppLayout from '../../components/layout/app/AppLayout';
import { classNames } from '../../utils/css';
import { NextPageWithLayout } from '../_app';

interface MyFormValues {
  businessName: string;
  description: string;
  address: string;
  businessHours: {
    openHour: [string, string];
    closeHour: [string, string];
  };
}

const RegisterBusiness: NextPageWithLayout = () => {
  const initialValues: MyFormValues = {
    businessName: '',
    description: '',
    address: '',
    businessHours: {
      openHour: ['9', '00'],
      closeHour: ['21', '00'],
    },
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          businessName: Yup.string()
            .max(40, 'Must be 40 characters or less')
            .required('This field is required'),
          description: Yup.string()
            .max(250, 'Must be 250 characters or less')
            .required('This field is required'),
          address: Yup.string()
            .max(40, 'Must be 40 characters or less')
            .required('This field is required'),
          businessHours: Yup.object({
            openWeek: Yup.string().required('This field is required'),
          }),
        })}
        onSubmit={(values) => {
          console.log(values);
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Step1 />
      </Formik>
    </div>
  );
};

const hours = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
];

const minutes = [
  '00',
  '05',
  '10',
  '15',
  '20',
  '25',
  '30',
  '35',
  '40',
  '45',
  '50',
  '55',
];

function Step1() {
  return (
    <div className="my-10 font-rubik">
      <h1 className="mb-5 text-2xl font-medium">
        First,
        <br /> Let&apos;s fill out some basic information
      </h1>
      <ProgressStatus className="mb-10" />

      <Form className="w-2xl child-notlast:mb-5 md:w-full md:child-notlast:mb-16">
        {/* Business Name */}
        <div className="grid-cols-2 gap-10 md:grid lg:grid-cols-[2fr_3fr]">
          <div>
            <MyLabel htmlFor="businessName">Business Name</MyLabel>
            <MySubLabel className="mb-3">
              Enter the full name of your business
            </MySubLabel>
          </div>
          <div>
            <MyTextInput
              name="businessName"
              type="text"
              placeholder="eg: Shrestha Futsal"
            />
          </div>
        </div>

        {/* Description */}
        <div className="grid-cols-2 gap-10 md:grid lg:grid-cols-[2fr_3fr]">
          <div>
            <MyLabel htmlFor="description">Description</MyLabel>
            <MySubLabel className="mb-3">
              Enter the description of your business. Tell the customers about
              your business and include some key features
            </MySubLabel>
          </div>
          <div>
            <MyTextArea name="description" type="text" rows={5} />
          </div>
        </div>

        {/* Address */}
        <div className="grid-cols-2 gap-10 md:grid lg:grid-cols-[2fr_3fr]">
          <div>
            <MyLabel htmlFor="address">Address</MyLabel>
            <MySubLabel className="mb-3">
              Provide full address of your business. Make sure the address is
              short and recognizable
            </MySubLabel>
          </div>
          <div>
            <MyTextInput
              name="address"
              type="text"
              placeholder="eg: Shrestha Futsal"
            />
          </div>
        </div>

        {/* Business Hours */}
        <div className="grid-cols-2 gap-10 md:grid lg:grid-cols-[2fr_3fr]">
          <div>
            <MyLabel htmlFor="businessHours">Business Hours</MyLabel>
            <MySubLabel className="mb-3">
              Provide the time of day your business will stay open.
            </MySubLabel>
          </div>
          <div>
            {/* Open Hours */}
            <div className="mb-5 flex items-center gap-3">
              <p className="font-medium">Open Hours</p>
              <MySelect name="businessHours.openHour[0]" className="w-16">
                {hours.map((hour) => (
                  <option value={hour} key={hour}>
                    {hour}
                  </option>
                ))}
              </MySelect>
              <div>:</div>
              <MySelect name="businessHours.openHour[1]">
                {minutes.map((minute) => (
                  <option value={minute} key={minute}>
                    {minute}
                  </option>
                ))}
              </MySelect>
            </div>

            {/* Close Hours */}
            <div className="flex items-center gap-3">
              <p className="font-medium">Close Hours</p>
              <MySelect name="businessHours.closeHour[0]" className="w-16">
                {hours.map((hour) => (
                  <option value={hour} key={hour}>
                    {hour}
                  </option>
                ))}
              </MySelect>
              <div>:</div>
              <MySelect name="businessHours.closeHour[1]">
                {minutes.map((minute) => (
                  <option value={minute} key={minute}>
                    {minute}
                  </option>
                ))}
              </MySelect>
            </div>
          </div>
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
