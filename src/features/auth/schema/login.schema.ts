import { delay } from '@/lib/utils';
import { z } from 'zod';

export const loginSchema = z
  .object({
    username: z.string().min(3, 'minimum 3 characters'),
    password: z
      .string()
      .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{5,}$/),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    path: ['passwordConfirmation'],
    message: "Password doesn't match",
  });

export type LoginSchema = z.infer<typeof loginSchema>;

export const mockExistingUsernames = ['admin', 'test', 'user'];

export const isUsernameExist = async (username: LoginSchema['username']) => {
  await delay(1200);
  return mockExistingUsernames.includes(username.toLowerCase());
};
