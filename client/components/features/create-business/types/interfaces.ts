export interface OtherProps {
  label: string;
  subLabel?: string;
}

export interface MyFormValues {
  businessName: string;
  description: string;
  address: string;
  businessHours: {
    open: { hour: string; minute: string; timeOfDay: 'AM' | 'PM' };
    close: { hour: string; minute: string; timeOfDay: 'AM' | 'PM' };
  };
  category: string;
}
