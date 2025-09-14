import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function hasPermission(permissions: string[], name: string) {
  const result = permissions.find((permission) => permission === name);
  return Boolean(result);
}
