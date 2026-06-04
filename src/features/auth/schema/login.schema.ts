import { delay } from '@/lib/utils';
import { z } from 'zod';

const username = z.string().min(3, 'minimum 3 characters');
const password = z
  .string()
  .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{5,}$/);
const passwordConfirmation = z.string();

const loginSchema = z
  .object({
    username,
    password,
    passwordConfirmation,
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    path: ['passwordConfirmation'],
    message: "Password doesn't match",
  });

type LoginSchema = z.infer<typeof loginSchema>;

const defaultValues: LoginSchema = {
  username: '',
  password: '',
  passwordConfirmation: '',
};

const mockExistingUsernames: Array<LoginSchema['username']> = [
  'admin',
  'test',
  'user',
];

const isUsernameExist = async (username: LoginSchema['username']) => {
  await delay(800);
  return mockExistingUsernames.includes(username.toLowerCase());
};

/** Export */
export const sch = {
  schema: {
    username,
    password,
    passwordConfirmation,
    loginSchema,
    defaultValues,
  },
  mockExistingUsernames,
  isUsernameExist,
};
