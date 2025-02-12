import type { Metadata } from "next"
import "./ui/globals.css"
import localFont from "next/font/local"
import { AlertProvider } from "./ui/alert/alertContext"
import { ThemeProvider } from "next-themes"

const nostalgia = localFont({
  src: [{ path: "./ui/fonts/16-bit-7x9-nostalgia.ttf", weight: "400" }],
  variable: "--font-nostalgia",
})

export const metadata: Metadata = {
  title: "Alice Portfolio",
  description: "A retro term to introduce myself",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nostalgia.variable} antialiased`}>
        <ThemeProvider attribute={"class"}>
          <AlertProvider>{children}</AlertProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
