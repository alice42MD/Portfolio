"use client"

import { memo, ReactNode, useEffect, useState } from "react"
import { useTypewriter } from "./utils/useTypeWriter"
import { categories } from "./utils/categories"
import Header from "./ui/header"
import Content from "./ui/content"
import Background from "./ui/background"
import { useTheme } from "next-themes"

const TypewriterComponent = memo(
  ({ text, speed }: { text: string; speed: number }) => {
    const displayText = useTypewriter(text, speed)

    return <span>{displayText}</span>
  }
)

export default function Home() {
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false)
  const [text, setText] = useState<string>("")
  const [child, setChild] = useState<ReactNode>(undefined)
  const { theme, setTheme } = useTheme()

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
    <div className="flex flex-col h-dvh overflow-scroll">
      <Background onLoad={() => setIsBackgroundLoaded(true)} />
      {isBackgroundLoaded && (
        <>
          <header className="sticky z-50 top-0 p-4">
            <Header />
          </header>
          <main className="flex-grow h-screen overflow-scroll mb-4">
            <Content
              categories={renderCategories()}
              displayedCategory={<TypewriterComponent text={text} speed={50} />}
              child={child}
            />
          </main>
          <footer className="sticky z-50 bottom-0 p-8 sm:p-6"></footer>
        </>
      )}
    </div>
  )
}
