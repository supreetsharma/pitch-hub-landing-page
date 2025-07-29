import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PitchHub - Turn Leads into Custom Microsites in Under 3 Minutes",
  description:
    "Transform your sales process with AI-powered microsites. Create personalized, on-brand experiences for every prospect in minutes, not hours.",
  keywords: "sales, microsites, personalization, AI, lead generation, B2B, sales tools",
  authors: [{ name: "PitchHub" }],
  openGraph: {
    title: "PitchHub - Turn Leads into Custom Microsites",
    description:
      "AI-powered microsites that convert. Create personalized experiences for every prospect in under 3 minutes.",
    type: "website",
    url: "https://pitchub.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "PitchHub - Turn Leads into Custom Microsites",
    description:
      "AI-powered microsites that convert. Create personalized experiences for every prospect in under 3 minutes.",
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
