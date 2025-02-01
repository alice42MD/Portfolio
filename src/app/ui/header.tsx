"use client"

import { useState, useEffect } from "react"
import figlet, { Fonts } from "figlet"
import alligator from "./fonts/Alligator"
import slant from "./fonts/Slant"

figlet.parseFont("Slant", slant)
figlet.parseFont("Alligator", alligator)

const useFigletText = (text: string, font: Fonts) => {
  const [asciiText, setAsciiText] = useState("")

  useEffect(() => {
    figlet.text(text, { font: font }, (err, result) => {
      if (!err && result) setAsciiText(result)
    })
  }, [font, text])

  return asciiText
}

export const MyComponentSubTitle = () => {
  const asciiText1 = useFigletText("Front end developer", "Slant")
  return (
    <div>
      <pre className="aspect-auto text-[3px] md:text-[5px] lg:text-[7px] size-fill drop-shadow-shadow">
        {asciiText1}
      </pre>
    </div>
  )
}

export const MyComponentTitle = () => {
  const asciiText1 = useFigletText("Alice Martin", "Alligator")
  return (
    <div>
      <pre className="aspect-auto text-[3px] md:text-[5px] lg:text-[7px] size-fill drop-shadow-shadow">
        {asciiText1}
      </pre>
    </div>
  )
}

export default function Header() {
  const [toggle, setToggle] = useState(false)
  const [border, setBorder] = useState(false)

  useEffect(() => {
    setToggle(true)
  }, [])

  useEffect(() => {
    if (toggle)
      setTimeout(function () {
        setBorder(true)
      }, 900)
  }, [toggle])

  const classOpen = toggle ? "opened" : ""
  const classBorder = border ? "focus" : ""

  return (
    <div className="wrap mx-[42px] mt-[42px] md:mx-[57px] md:mt[57px]">
      <div
        className={`${classOpen} ${classBorder} content center flex flex-col items-center m-4 p-3`}
      >
        <MyComponentTitle />
        <MyComponentSubTitle />
      </div>
    </div>
  )
}
