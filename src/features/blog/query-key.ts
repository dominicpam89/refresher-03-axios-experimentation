export const queryKeys = {
  all: ['posts'],
  list: () => [...queryKeys.all, 'list'],
};
