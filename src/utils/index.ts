export function getNextAndPrevious<ListItemProps>(
  list: ListItemProps[],
  index: number
): { next: ListItemProps; previous: ListItemProps } {
  let next = 0,
    previous = list.length - 1;

  if (index !== 0) {
    previous = index - 1;
  }
  if (index !== list.length - 1) {
    next = index + 1;
  }

  return {
    next: list[next],
    previous: list[previous],
  };
}
