export const queryKey = {
  all: ['products'] as const,
  list: () => [...queryKey.all, 'list'],
};
