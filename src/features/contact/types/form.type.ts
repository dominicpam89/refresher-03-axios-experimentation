import { z } from 'zod';

export const contactFormSchema = z.object({
  email: z.email('Enter valid email address'),
  message: z.string().min(10, 'Minimum 10 characters'),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;

export const defaultValues: ContactFormSchema = {
  email: '',
  message: '',
};
