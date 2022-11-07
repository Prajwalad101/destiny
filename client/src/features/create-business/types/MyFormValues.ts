export interface OtherProps {
  label: string;
  subLabel?: string;
}

export interface MyFormValues {
  name: string;
  description: string;
  businessHours: {
    open: string;
    close: string;
  };
  category: string;
  subCategory: string;
  features: string[];
  images: File[];
  location: { type: 'Point'; coordinates: number[]; address: string };
}
