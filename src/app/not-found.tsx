"use client"

import Link from "next/link"
import Background from "./ui/background"
import { useState, useEffect } from "react"

export default function NotFound() {
  const [theme, setTheme] = useState<string>("")

  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme")
    setTheme(selectedTheme ?? "dark")
  }, [])

  console.log(theme)
  return (
    theme && (
      <div className={`${theme}`}>
        <Background />
        <div className="flex flex-col justify-center items-center h-screen">
          <div>
            <h1>Not found – 404!</h1>
          </div>
          <div>
            <Link href="/">Go back to Home</Link>
          </div>
        </div>
      </div>
    )
  )
}
