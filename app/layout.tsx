import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Pallav Kumar - Full Stack Developer",
  description:
    "Computer Science Engineering student at IIIT Guwahati, Full Stack Developer with expertise in React, Node.js, and modern web technologies.",
  keywords: "Pallav Kumar, Full Stack Developer, React, Node.js, IIIT Guwahati, Computer Science",
  authors: [{ name: "Pallav Kumar" }],
  creator: "Pallav Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pallavkumar.dev",
    title: "Pallav Kumar - Full Stack Developer",
    description:
      "Computer Science Engineering student at IIIT Guwahati, Full Stack Developer with expertise in React, Node.js, and modern web technologies.",
    siteName: "Pallav Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pallav Kumar - Full Stack Developer",
    description:
      "Computer Science Engineering student at IIIT Guwahati, Full Stack Developer with expertise in React, Node.js, and modern web technologies.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
