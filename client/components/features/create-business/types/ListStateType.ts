/* eslint-disable no-unused-vars */

type ListItem = { name: string };

type ListState = {
  selected: ListItem | ListItem[];
  setSelected: (({ name }: ListItem) => void) | ((items: ListItem[]) => void);
};

export type { ListState };
