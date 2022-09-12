import { ValueOf } from '@destiny/types';

const businessFeatures = {
  delivery: 'delivery',
  reservations: 'reservations',
  events: 'events',
  goodForKids: 'good for kids',
  liveMusic: 'live music',
  outdoorDining: 'outdoor dining',
} as const;

export default businessFeatures;

export type BusinessFeature = ValueOf<typeof businessFeatures>;
