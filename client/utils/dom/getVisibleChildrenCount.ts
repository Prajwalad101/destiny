/**
 * Calculates and returns the count of visible children inside the container
 * @param containerElement The container Div element
 * @param childElement The child Div element inside the container element
 * @returns the number of visible child elements inside the container
 */
function getVisibleChildrenCount(
  containerElement: HTMLDivElement,
  childElement: HTMLDivElement
) {
  const parentElement = containerElement.parentElement;
  if (!parentElement) return;

  const parentContainerWidth = parentElement.clientWidth;
  const childWidth = childElement.offsetWidth;

  const childCount = Math.round(parentContainerWidth / childWidth);
  return childCount;
}

export default getVisibleChildrenCount;
