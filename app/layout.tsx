import type { Metadata, Viewport } from "next"
import "./ui/globals.css"
import localFont from "next/font/local"
import { AlertProvider } from "./ui/alert/alertContext"
import { ThemeProvider } from "next-themes"
import { Analytics } from "@vercel/analytics/react"
import Head from "next/head"

const nostalgia = localFont({
  src: [{ path: "./ui/fonts/16-bit-7x9-nostalgia.ttf", weight: "400" }],
  variable: "--font-nostalgia",
})

export const metadata: Metadata = {
  title: "Alice Portfolio",
  description: "A retro term to introduce myself",
}
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>
      <body className={`${nostalgia.variable} antialiased`}>
        <ThemeProvider attribute={"class"}>
          <AlertProvider>{children}</AlertProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
