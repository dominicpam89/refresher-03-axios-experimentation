import { delay } from '@/lib/utils';
import { z } from 'zod';

const username = z.string().min(3, 'minimum 3 characters');
const password = z
  .string()
  .regex(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{5,}$/,
    'minimum 6 characters, at least one lowercase, one uppercase, and one symbol'
  );
const passwordConfirmation = z.string();

const registerSchema = z
  .object({
    username,
    password,
    passwordConfirmation,
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    path: ['passwordConfirmation'],
    message: "Password doesn't match",
  });

type RegisterSchema = z.infer<typeof registerSchema>;

const loginSchema = z.object({
  username,
  password: z.string(),
});

type LoginSchema = z.infer<typeof loginSchema>;

const defaultValues: { register: RegisterSchema; login: LoginSchema } = {
  register: { username: '', password: '', passwordConfirmation: '' },
  login: { username: '', password: '' },
};

const mockExistingUsernames: Array<RegisterSchema['username']> = [
  'admin',
  'test',
  'user',
];

const isUsernameExist = async (
  username: RegisterSchema['username'] | LoginSchema['username']
) => {
  await delay(800);
  return mockExistingUsernames.includes(username.toLowerCase());
};

/** Export */
export const sch = {
  schema: {
    username,
    password,
    passwordConfirmation,
    registerSchema,
    loginSchema,
    defaultValues,
  },
  mockExistingUsernames,
  isUsernameExist,
};

export type { LoginSchema, RegisterSchema };
