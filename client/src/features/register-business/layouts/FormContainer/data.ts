import { cities, days, TimeString } from '../../components/FormStep1/data';

export type FormInputs = {
  name: string;
  description: string;
  address: string;
  city: typeof cities[number] | '';
  workingDays: {
    day: typeof days[number];
    startTime: TimeString;
    endTime: TimeString;
  }[];
};

const defaultFormValues: FormInputs = {
  name: '',
  address: '',
  description: '',
  city: '',
  workingDays: [
    {
      day: 'Sunday',
      startTime: '9:00 AM',
      endTime: '5:00 PM',
    },
    {
      day: 'Monday',
      startTime: '9:00 AM',
      endTime: '5:00 PM',
    },
    {
      day: 'Tuesday',
      startTime: '9:00 AM',
      endTime: '5:00 PM',
    },
    {
      day: 'Wednesday',
      startTime: '9:00 AM',
      endTime: '5:00 PM',
    },
    {
      day: 'Thursday',
      startTime: '9:00 AM',
      endTime: '5:00 PM',
    },
    {
      day: 'Friday',
      startTime: '9:00 AM',
      endTime: '5:00 PM',
    },
    {
      day: 'Saturday',
      startTime: '9:00 AM',
      endTime: '5:00 PM',
    },
  ],
};

export default defaultFormValues;
