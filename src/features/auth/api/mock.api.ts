import { delay } from '@/lib/utils';

export const existingUsernames = ['johndoe', 'admin', 'test'];
export const existingEmail = [
  'johndoe@example.com',
  'admin@example.com',
  'test@example.com',
];

export const isUsernameExist = async (username: string, time: number = 500) => {
  await delay(time);
  return existingUsernames.includes(username);
};

export const isEmailExist = async (email: string, time: number = 500) => {
  await delay(time);
  return existingEmail.includes(email);
};
