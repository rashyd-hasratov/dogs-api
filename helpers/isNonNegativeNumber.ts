export const isNonNegativeNumber = (number: number) => {
  return !isNaN(number) && number >= 0;
};