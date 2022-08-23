import {
  FieldLayout,
  MyLabel,
  MySubLabel,
  MyTextArea,
  MyTextInput,
  SelectCategory,
  SelectFeature,
  SelectImage,
  SelectLocation,
  SelectSubCategory,
  SelectTime,
} from '@features/create-business';
import SecondaryButton from 'components/button/secondary/SecondaryButton';
import { Form } from 'formik';

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
          <div className="mb-5 lg:mb-0">
            <MyLabel htmlFor="name">Name</MyLabel>
            <MySubLabel className="mb-3">
              Enter the full name of your business
            </MySubLabel>
          </div>
          <MyTextInput
            name="name"
            type="text"
            placeholder="eg: Shrestha Futsal"
          />
        </FieldLayout>

        {/* Description */}
        <FieldLayout>
          <div className="mb-5 lg:mb-0">
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
          <div className="mb-5 lg:mb-0">
            <MyLabel htmlFor="location.address">Address</MyLabel>
            <MySubLabel>
              Provide full address of your business. Make sure the address is
              short and recognizable
            </MySubLabel>
          </div>
          <MyTextInput
            name="location.address"
            type="text"
            placeholder="eg: Naya Baneshwor, Kathmandu"
          />
        </FieldLayout>

        {/* Business Hours */}
        <FieldLayout>
          <div className="mb-5 lg:mb-0">
            <MyLabel htmlFor="businessHours">Hours</MyLabel>
            <MySubLabel className="mb-3">
              Provide the time of day your business will stay open.
            </MySubLabel>
          </div>
          <div className="gap-10 lg:flex">
            {/* Open */}
            <div className="mb-5 lg:mb-0">
              <p className="mb-1 text-sm font-medium text-gray-700">Open</p>
              <SelectTime inputName="businessHours.open" />
            </div>
            {/* Close */}
            <div className="mb-5 lg:mb-0">
              <p className="mb-1 text-sm font-medium text-gray-700">Close</p>
              <SelectTime inputName="businessHours.close" />
            </div>
          </div>
        </FieldLayout>

        {/* Category & Features*/}
        <FieldLayout>
          <div className="mb-5 lg:mb-0">
            <MyLabel htmlFor="category">Category</MyLabel>
            <MySubLabel>
              Select one of the category your business falls on
            </MySubLabel>
          </div>
          <div className="flex">
            <SelectCategory />
            <SelectSubCategory />
          </div>
        </FieldLayout>

        {/* Features */}
        <FieldLayout>
          <div className="mb-5 lg:mb-0">
            <MyLabel htmlFor="features">Features</MyLabel>
            <MySubLabel>Select the features your business provides</MySubLabel>
          </div>
          <SelectFeature />
        </FieldLayout>

        {/* Images */}
        <FieldLayout>
          <SelectImage inputName="images" />
        </FieldLayout>

        <FieldLayout>
          <div className="mb-5 lg:mb-0">
            <MyLabel htmlFor="location">Location</MyLabel>
            <MySubLabel>Select the location of your business</MySubLabel>
          </div>
          <SelectLocation />
        </FieldLayout>

        {/* Submit Button */}
        <SecondaryButton className="mt-16 px-10 py-2" type="submit">
          Submit
        </SecondaryButton>
      </Form>
    </div>
  );
}

export default FormContainer;
