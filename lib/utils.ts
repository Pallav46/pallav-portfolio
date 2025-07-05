import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility function to handle asset paths for GitHub Pages deployment
export function getAssetPath(path: string): string {
  // For GitHub Pages, we need to check both build-time and runtime conditions
  const isProduction = process.env.NODE_ENV === "production";
  const isGitHubPages = typeof window !== "undefined" && 
    (window.location.hostname === "pallav46.github.io" || 
     window.location.pathname.startsWith("/pallav-portfolio"));
  
  // Use base path for production or GitHub Pages
  const basePath = (isProduction || isGitHubPages) ? "/pallav-portfolio" : "";
  return `${basePath}${path}`;
}
