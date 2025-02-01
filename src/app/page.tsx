"use client"

import { ReactNode, useEffect, useState } from "react"
import { useTypewriter } from "./useTypeWriter"
import { categories } from "./data"
import Header from "./ui/header"
import Background from "./ui/background"
import Content from "./ui/content"

export default function Home() {
  const [text, setText] = useState<string>("")
  const [theme, setTheme] = useState<string>("")
  const [child, setChild] = useState<string | undefined | ReactNode>(undefined)

  const displayedCategory = useTypewriter(text, 50)

  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme")
    setTheme(selectedTheme ?? "dark")
  }, [])

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", `${theme}`)
      const selectedTheme = localStorage.getItem("theme")
      if (selectedTheme === "light") {
        document.body.classList.add(selectedTheme)
        document.body.classList.remove("dark")
      } else {
        document.body.classList.add("dark")
        document.body.classList.remove("light")
      }
    }
  }, [theme])

  const renderCategories = () => {
    return categories
      .sort((a, b) => a.name.localeCompare(b.name))
      .filter((a) => a.name !== `${theme}_mode.ts`)
      .map((category) => (
        <div
          className=""
          key={category.name}
          onClick={() => {
            setChild(undefined)
            setText(`${category.access} ${category.name}`)
            if (category.theme) {
              setTheme(category.theme)
            }
            setTimeout(function () {
              setChild(category.child)
            }, 1000)
            if (category.action)
              setTimeout(function () {
                category.action()
              }, 1000)
          }}
        >
          {category.name}
        </div>
      ))
  }

  return (
    theme && (
      <div className="flex flex-col min-h-screen">
        <Background />
        <header className="sticky z-50 top-0 p-4">
          <Header />
        </header>
        <div className="flex-grow overflow-scroll">
          <main>
            <Content
              categories={renderCategories()}
              displayedCategory={displayedCategory}
              child={child}
            />
          </main>
        </div>
        <footer className="sticky z-50 bottom-0 p-8"></footer>
      </div>
    )
  )
}
