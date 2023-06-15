export const formatQueryToKey = (query: string) => {
  return query.toLocaleLowerCase().split('-').join('_');
};
