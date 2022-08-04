import { Form } from 'formik';
import SecondaryButton from '../../../../../button/secondary/SecondaryButton';
import { hours, minutes } from '../../../data/form.data';
import MyLabel from '../MyLabel';
import MySelect from '../MySelect';
import MySubLabel from '../MySubLabel';
import MyTextArea from '../MyTextArea';
import MyTextInput from '../MyTextInput';

interface Stage2Props {
  handleRight: () => void;
  handleLeft: () => void;
  progressStatus: JSX.Element;
}

function Stage2({ handleLeft, handleRight, progressStatus }: Stage2Props) {
  return (
    <div className="my-10 min-w-full font-rubik">
      <h1 className="mb-5 text-2xl font-medium">Stage 2</h1>
      {progressStatus}

      <div className="flex flex-col items-end">
        <Form className="w-2xl child-notlast:mb-5 md:w-full md:child-notlast:mb-16">
          {/* Business Name */}
          <div className="grid-cols-2 gap-10 md:grid lg:grid-cols-[2fr_3fr]">
            <div className="mb-5">
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
            <div className="mb-5">
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
            <div className="mb-5">
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
                placeholder="eg: Naya Baneshwor, Kathmandu"
              />
            </div>
          </div>

          {/* Business Hours */}
          <div className="grid-cols-2 gap-10 md:grid lg:grid-cols-[2fr_3fr]">
            <div className="mb-5">
              <MyLabel htmlFor="businessHours">Business Hours</MyLabel>
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
        </Form>
        <SecondaryButton className="mt-16" type="submit" onClick={handleRight}>
          <p className="px-10 py-2">Continue</p>
        </SecondaryButton>
      </div>
    </div>
  );
}

export default Stage2;
