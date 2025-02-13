"use client"

import { ReactNode, useEffect, useState } from "react"
import { useTypewriter } from "./utils/useTypeWriter"
import { categories } from "./utils/categories"
import Header from "./ui/header"
import Content from "./ui/content"
import Background from "./ui/background"

export default function Home() {
  const [text, setText] = useState<string>("")
  const [theme, setTheme] = useState<string>("")
  const [child, setChild] = useState<ReactNode>(undefined)

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
      .filter((a) => a.name !== `${theme}_mode.ts`)
      .map((category) => (
        <div
          key={category.name}
          onClick={() => {
            setChild(undefined)
            if (category.access === "mail")
              setText(`/usr/sbin/sendmail alicemartin.crea@gmail.com < `)
            else setText(`${category.access} ${category.name}`)
            if (category.access === "ts-node") {
              setTheme(category.theme)
            }
            if (
              category.access === "cd" ||
              category.access === "cat" ||
              category.access === "mail"
            )
              setTimeout(function () {
                setChild(category.child)
              }, 1000)
            if (category.access === "open")
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
      <div className="flex flex-col min-h-screen static">
        <Background />
        <header className="sticky z-50 top-0 p-4">
          <Header />
        </header>
        <main className="flex-grow overflow-scroll">
          <Content
            categories={renderCategories()}
            displayedCategory={displayedCategory}
            child={child}
          />
        </main>
        <footer className="sticky z-50 bottom-0 p-8 sm:p-6"></footer>
      </div>
    )
  )
}
