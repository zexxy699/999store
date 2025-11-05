import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "999stores - Next-Gen Digital Store",
  description: "Explore blockchain, tech, and design tools built for the future.",
    generator: 'v0.app'
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
