import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * @description 动态class
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
