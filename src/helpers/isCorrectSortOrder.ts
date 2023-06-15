import { SortOrder } from '../types/SortOrder';

export const isCorrectSortOder = (order: string) => {
  const sortOrderValues = Object.values(SortOrder) as string[];

  return sortOrderValues.includes(order.toLocaleLowerCase());
};
