export interface OtherProps {
  label: string;
  subLabel?: string;
}

export interface MyFormValues {
  businessName: string;
  description: string;
  address: string;
  businessHours: {
    openHour: [string, string];
    closeHour: [string, string];
  };
  category: string;
}
