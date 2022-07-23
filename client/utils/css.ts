export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

/**
 * calculates a value like the native calc() functon
 * @param value string from css to be calculated eg: calc(3+3)
 * @returns calculated value from css string eg: 6
 */
export function getCalculatedValue(value: string) {
  const regExp = /\(([^)]+)\)/; // to match string between parameters ()
  const matches = regExp.exec(value);

  // if no matches found return original value
  if (!matches) {
    return value;
  }

  const string = matches[1];
  const nums = string.split('+'); // seperate the value between parameters
  const sum = parseInt(nums[0]) + parseInt(nums[1]);

  return sum;
}
