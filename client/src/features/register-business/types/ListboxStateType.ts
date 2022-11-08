type ListboxItem = { name: string };

type ListboxState = {
  selected: ListboxItem;
  setSelected: (_item: ListboxItem) => void;
};

export type { ListboxState, ListboxItem };
