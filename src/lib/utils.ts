import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function delay(time: number = 500) {
  return new Promise<boolean>((resolve) => {
    setTimeout(() => resolve(true), time);
  });
}
