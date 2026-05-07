import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "999stores — Premium Digital Products for ₹999",
  description: "Blockchain guides, portfolio templates, and crypto tools for developers and entrepreneurs. Instant digital delivery. All products ₹999.",
  keywords: ["blockchain", "digital products", "portfolio template", "crypto tools", "whale tracker", "web3"],
  openGraph: {
    title: "999stores — Premium Digital Products for ₹999",
    description: "Blockchain guides, portfolio templates, and crypto tools. Instant digital delivery.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} font-sans antialiased bg-white`}>{children}</body>
    </html>
  )
}
