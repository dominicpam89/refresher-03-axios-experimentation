import { z } from 'zod';

export const username = z.string().nonempty('Must not empty');
export const password = z.string().nonempty('Must not empty');

export const loginSchema = z.object({
  username,
  password,
});

export type Username = z.infer<typeof username>;
export type Password = z.infer<typeof password>;
export type LoginSchema = z.infer<typeof loginSchema>;

export const defaultValues: LoginSchema = {
  username: '',
  password: '',
};
