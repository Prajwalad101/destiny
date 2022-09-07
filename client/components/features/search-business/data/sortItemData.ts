import { ISortItems } from '@features/search-business/types';

const sortItemData: ISortItems[] = [
  { id: 1, name: 'Most Popular', sortField: '-rating_count' },
  { id: 2, name: 'Best Rating', sortField: '-avgRating' },
  { id: 3, name: 'Newest', sortField: '-createdAt' },
];

export default sortItemData;
