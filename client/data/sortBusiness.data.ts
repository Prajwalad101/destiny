export interface ISortItem {
  id: number;
  name: string;
  sortField: string;
}

export const sortItemData: ISortItem[] = [
  { id: 1, name: 'Most Popular', sortField: '-createdAt' },
  { id: 2, name: 'Best Rating', sortField: '-avgRating' },
  { id: 3, name: 'Newest', sortField: '-createdAt' },
];
