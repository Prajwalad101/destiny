import { Form } from 'formik';
import { businessCategories } from '../../../../data/business/categories.data';
import SecondaryButton from '../../../button/secondary/SecondaryButton';
import MyLabel from '../components/Form/MyLabel';
import MyListBox from '../components/Form/MyListBox/MyListBox';
import MySubLabel from '../components/Form/MySubLabel';
import MyTextArea from '../components/Form/MyTextArea';
import MyTextInput from '../components/Form/MyTextInput';
import SelectTime from '../components/Form/SelectTime/SelectTime';
import { hours, minutes, timeOfDay } from '../data/formData';

function FormContainer() {
  return (
    <div className="my-10 min-w-full font-rubik">
      <h1 className="mb-2 text-[26px] font-medium">
        Business Registration Form
      </h1>
      <p className="mb-10 text-gray-500 md:mb-16">
        Fill out all the required fields to create your business
      </p>

      <Form className="w-2xl child-notlast:mb-5 md:w-full md:child-notlast:mb-16">
        {/* Business Name */}
        <FieldLayout>
          <div className="mb-5">
            <MyLabel htmlFor="businessName">Name</MyLabel>
            <MySubLabel className="mb-3">
              Enter the full name of your business
            </MySubLabel>
          </div>
          <MyTextInput
            name="businessName"
            type="text"
            placeholder="eg: Shrestha Futsal"
          />
        </FieldLayout>

        {/* Description */}
        <FieldLayout>
          <div className="mb-5">
            <MyLabel htmlFor="description">Description</MyLabel>
            <MySubLabel className="mb-3">
              Enter the description of your business. Tell the customers about
              your business and include some key features
            </MySubLabel>
          </div>
          <MyTextArea name="description" type="text" rows={5} />
        </FieldLayout>

        {/* Address */}
        <FieldLayout>
          <div className="mb-5">
            <MyLabel htmlFor="address">Address</MyLabel>
            <MySubLabel>
              Provide full address of your business. Make sure the address is
              short and recognizable
            </MySubLabel>
          </div>
          <MyTextInput
            name="address"
            type="text"
            placeholder="eg: Naya Baneshwor, Kathmandu"
          />
        </FieldLayout>

        {/* Business Hours */}
        <FieldLayout>
          <div className="mb-5">
            <MyLabel htmlFor="businessHours">Hours</MyLabel>
            <MySubLabel className="mb-3">
              Provide the time of day your business will stay open.
            </MySubLabel>
          </div>
          <div className="gap-10 lg:flex">
            {/* Open */}
            <div className="mb-5 lg:mb-0">
              <p className="mb-1 text-sm font-medium text-gray-700">Open</p>
              <SelectTime
                hours={hours}
                minutes={minutes}
                timeOfDay={timeOfDay}
                name="businessHours.open"
              />
            </div>
            {/* Close */}
            <div className="mb-5 lg:mb-0">
              <p className="mb-1 text-sm font-medium text-gray-700">Close</p>
              <SelectTime
                hours={hours}
                minutes={minutes}
                timeOfDay={timeOfDay}
                name="businessHours.open"
              />
            </div>
          </div>
        </FieldLayout>

        {/* Category */}
        <FieldLayout>
          <div className="mb-5">
            <MyLabel htmlFor="category">Category</MyLabel>
            <MySubLabel>
              Select one of the category your business falls on
            </MySubLabel>
          </div>
          <MyListBox list={businessCategories} name="category" />
        </FieldLayout>
        <SecondaryButton className="mt-16" type="submit">
          <p className="px-10 py-2">Submit</p>
        </SecondaryButton>
      </Form>
    </div>
  );
}

const FieldLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid-cols-2 gap-10 md:grid lg:grid-cols-[2fr_3fr] lg:gap-24">
      {children}
    </div>
  );
};

export default FormContainer;
