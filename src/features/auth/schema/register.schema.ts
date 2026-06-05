import { z } from 'zod';

const SYMBOLS = `!@#$%^&*()_+=\\[\\]{};:'"\\|,.<>\\/?~\`-`;
const passwordRegex = new RegExp(
  `^(?=.*[a-z])(?=.*[A-Z])(?=.*[${SYMBOLS}]).{6,}$`
);
const usernameRegex = new RegExp(`^[a-zA-Z0-9_]+$`);

export const email = z.email().nonempty();
export const username = z
  .string()
  .min(6, 'Required')
  .regex(
    usernameRegex,
    'Username can only contains letters, numbers, or underscores'
  )
  .nonempty();
export const password = z
  .string()
  .regex(
    passwordRegex,
    'Password at least 6 characters, include at least one lowercase, one uppercase, and one symbol'
  );

export const passwordConfirmation = z.string().nonempty();

export const registerSchema = z
  .object({
    email,
    username,
    password,
    passwordConfirmation,
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    error: "Password don't match",
    path: ['passwordConfirmation'],
  })
  .transform(({ username, ...data }) => {
    return {
      ...data,
      username: username.toLowerCase(),
    };
  });

export type Email = z.infer<typeof email>;
export type Username = z.infer<typeof username>;
export type Password = z.infer<typeof password>;
export type PasswordConfirmation = z.infer<typeof passwordConfirmation>;
export type RegisterSchema = z.infer<typeof registerSchema>;

export const defaultValues: RegisterSchema = {
  email: '',
  username: '',
  password: '',
  passwordConfirmation: '',
};
