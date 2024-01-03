import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getFetchUrl = () =>
  process.env.VERCEL_ENV === 'development'
    ? 'http://localhost:3000'
    : `https://${process.env.VERCEL_URL}`;

export const getFirstLetters = (name: string): string => {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('');
};
