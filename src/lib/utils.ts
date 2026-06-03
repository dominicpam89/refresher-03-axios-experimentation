import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function delay(time: number = 800) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), time);
  });
}
