import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getFirstLetters = (name: string): string => {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('');
};
