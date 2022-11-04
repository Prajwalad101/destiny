import { IReview } from '@destiny/common/types';
import { SortBy } from 'types/filters/SortBy';

export interface IReviewFilterOptions {
  businessId: string;
  sort?: SortBy<IReview>;
  ratings?: number[];
}
