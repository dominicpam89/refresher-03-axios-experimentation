import { z } from 'zod';

export const createPostSchema = z.object({
  title: z.string().min(5).max(50),
  body: z.string().min(10).max(120),
});

export type CreatePostData = z.infer<typeof createPostSchema>;
