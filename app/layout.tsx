import type React from "react"
import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import "./globals.css"

const openSans = Open_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PitchHub - Personalized Microsites for Sales",
  description:
    "Transform leads into personalized microsites in under 3 minutes. Make personalization your #1 revenue channel.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  )
}
