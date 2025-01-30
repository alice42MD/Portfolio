"use client"
import { useState } from "react"
import { useTypewriter } from "./useTypeWriter"
import Header from "./header"
import scanlines from "../../public/scanlines.png"
import bezel from "../../public/bezel.png"
import Image from "next/image"

const categories = [
  { name: "Projects" },
  { name: "README.md" },
  { name: "CV" },
  { name: "Linkedin" },
  { name: "Github" },
  { name: "Contact" },
]

export default function Home() {
  const [text, setText] = useState("")
  const displayedCategory = useTypewriter(text, 50)

  const renderCategories = () => {
    return categories
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((category) => (
        <div key={category.name} onClick={() => setText(`cd ${category.name}`)}>
          {category.name}
        </div>
      ))
  }

  return (
    <div className="relative">
      <Image
        className={"absolute w-full h-full top-0 left-0 pointer-events-none "}
        alt="scanlines"
        src={scanlines}
      />
      <Image
        className={"absolute w-full h-full top-0 left-0 pointer-events-none"}
        alt="bezel"
        src={bezel}
      />
      <div className="flex flex-col min-h-screen">
        <main>
          <Header />
          <div
            className="mx-5 text-green-50 pl-[35px] pr-[35px] text-green-50 size-fill  text-green-600 drop-shadow-[1px_1px_2px_#72f14c]"
            id={"content"}
          >
            <div className="font-[family-name:var(--font-nostalgia)] text-[20px] ">
              <div className="my-4">
                <span>Portfolio ~$: {">"}</span>
                <span> ls</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-4">
                {renderCategories()}
              </div>

              <div className="my-4">
                <span>Portfolio ~$: {">"}</span>
                <span> {displayedCategory}</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
