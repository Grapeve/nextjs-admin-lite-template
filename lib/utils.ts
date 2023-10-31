import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { StorageEnum } from "@/types";

/**
 * @description 动态class
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * @description localStorage
 */
export const getItem = <T>(key: StorageEnum): T | null => {
  let value = null;
  try {
    const result = window.localStorage.getItem(key);
    if (result) {
      value = JSON.parse(result);
    }
  } catch (error) {
    console.log(error);
  }
  return value;
};

export const getStringItem = (key: StorageEnum): string | null => {
  return localStorage.getItem(key);
};

export const setItem = <T>(key: StorageEnum, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const removeItem = (key: StorageEnum): void => {
  localStorage.removeItem(key);
};
export const clearItems = () => {
  localStorage.clear();
};
