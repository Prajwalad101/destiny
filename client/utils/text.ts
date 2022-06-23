/**
 * Truncates the text with ellipsis
 * @param {string} text - text to shorten
 * @param {number} length - length to shorten the text to
 * @example
 * truncateText('hello', 2);  // returns he...
 */
export function truncateText(text: string, length: number) {
  // Format only if the text is greater than the specified length
  if (text.length <= length) {
    return text;
  }

  const formattedText = text.slice(0, length) + '...';
  return formattedText;
}
