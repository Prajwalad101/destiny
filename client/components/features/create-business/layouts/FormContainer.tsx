import { Form } from 'formik';
import SecondaryButton from '../../../button/secondary/SecondaryButton';
import MyLabel from '../components/Form/MyLabel';
import MySelect from '../components/Form/MySelect';
import MySubLabel from '../components/Form/MySubLabel';
import MyTextArea from '../components/Form/MyTextArea';
import MyTextInput from '../components/Form/MyTextInput';
import { hours, minutes } from '../data/form.data';

function FormContainer() {
  return (
    <div className="my-10 min-w-full font-rubik">
      <h1 className="mb-2 text-[26px] font-medium">
        Business Registration Form
      </h1>
      <p className="mb-10 text-gray-500 md:mb-16">
        Fill out all the required fields to create your business
      </p>

      <div className="flex flex-col items-end">
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
          <SelectBusinessHours />

          {/* Category */}
          <FieldLayout>
            <div className="mb-5">
              <MyLabel htmlFor="category">Category</MyLabel>
              <MySubLabel>
                Select one of the category your business falls under
              </MySubLabel>
            </div>
          </FieldLayout>
        </Form>
        <SecondaryButton className="mt-16" type="submit">
          <p className="px-10 py-2">Submit</p>
        </SecondaryButton>
      </div>
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

const SelectBusinessHours = () => {
  return (
    <div className="grid-cols-2 gap-10 md:grid lg:grid-cols-[2fr_3fr] lg:gap-24">
      <div className="mb-5">
        <MyLabel htmlFor="businessHours">Hours</MyLabel>
        <MySubLabel className="mb-3">
          Provide the time of day your business will stay open.
        </MySubLabel>
      </div>
      <div className="gap-10 lg:flex">
        {/* Open */}
        <div className="mb-5 flex items-center gap-3 lg:mb-0">
          <p className="font-medium">Open</p>
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

        {/* Close */}
        <div className="flex items-center gap-3">
          <p className="font-medium">Close</p>
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
  );
};

export default FormContainer;
