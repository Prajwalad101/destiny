import { ISelectedFilters } from '../types/interfaces';

export function buildBusinessQuery(
  sortField: string,
  filters: ISelectedFilters,
  fields: string[]
) {
  let priceQuery = '',
    tagsQuery = '';

  const sortQuery = `sort=${sortField}`; // sortField is always defined

  if (filters.price) {
    priceQuery = `&price=${filters.price}`;
  }

  if (filters.tags.length !== 0) {
    const tags = filters.tags.join(',');
    tagsQuery = `&tags=${tags}`;
  }

  const fieldsQuery = '&fields=' + fields.join(',');

  // sort=-avgRating&price=cheap&tags=delivery,events
  const apiQuery = ''.concat(sortQuery, priceQuery, tagsQuery, fieldsQuery);

  return apiQuery;
}

/**
 * Truncates the text with ellipsis
 * @param {string} text - text to shorten
 * @param {number} length - words to shorten the text to
 * @example
 * truncateText('hello world', 1);  // returns hello
 */
export function truncateText(text: string, length: number, readMore: boolean) {
  if (readMore) return text;

  const formattedText = text.split(' ').slice(0, length).join(' ') + '...';
  return formattedText;
}

/**
 * Converts the file path to be relative to the public folder
 *
 * Eg: client/public/images => /images
 *
 * If the path does not lead to public, it returns the original path instead
 * @param path the path to extract the public path from
 * @returns the path relative to the public folder
 */
export function getPublicFilePath(path: string) {
  // only get the path inside the public folder
  const regExp = /public(.*)/;

  const match = regExp.exec(path);
  if (!match) return path;

  // replace back slashes with forward slashes
  const publicPath = match[1].replace(/\\/g, '/');
  return publicPath;
}
