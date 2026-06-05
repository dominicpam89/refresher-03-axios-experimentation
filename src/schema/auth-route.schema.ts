import { z } from 'zod';

const searchSchema = z.object({
  authType: z.enum(['login', 'register']),
});

type SearchSchema = z.infer<typeof searchSchema>;

export { searchSchema, type SearchSchema };
