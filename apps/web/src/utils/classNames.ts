import { twMerge } from 'tailwind-merge';

export const classNames = (...classes: Array<string | undefined>) => twMerge(...classes);
