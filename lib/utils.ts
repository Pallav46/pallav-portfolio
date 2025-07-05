import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility function to handle asset paths for GitHub Pages deployment
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === "production" ? "/pallav-portfolio" : "";
  return `${basePath}${path}`;
}
