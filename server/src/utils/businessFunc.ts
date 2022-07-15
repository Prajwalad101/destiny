/**
 * mutates the original query object by adding custom filter query
 * @param query business query object
 * @param tags field passed into the query params
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const filterTags = (query: any, tags: string | undefined) => {
  let tagsArr: string[] = [];

  // if tags is not passed, do not query by that field
  if (!tags) return;

  tagsArr = tags?.split(',');
  query.find({ tags: { $all: tagsArr } });
};
