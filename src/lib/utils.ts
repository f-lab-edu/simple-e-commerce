import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const numberWithCommas = (num: number): string => {
  return num.toLocaleString('ko-KR');
};
