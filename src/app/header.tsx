import { useState, useEffect, useRef } from "react"
import figlet, { Fonts } from "figlet"
import { slant, alligator, useAsciiText } from "react-ascii-text"

figlet.parseFont("Slant", slant)
figlet.parseFont("Alligator", alligator)

const useFigletText = (text: string, font: Fonts) => {
  const [asciiText, setAsciiText] = useState("")

  useEffect(() => {
    figlet.text(text, { font: font }, (err, result) => {
      if (!err && result) setAsciiText(result)
    })
  }, [text])

  return asciiText
}

export const MyComponentSubTitle = () => {
  const asciiText1 = useFigletText("Front end developer", "Slant")
  return (
    <pre className="aspect-auto text-[3px] md:text-[5px] lg:text-[7px] text-green-50 size-fill  text-green-600 drop-shadow-[1px_1px_2px_#72f14c]">
      {asciiText1}
    </pre>
  )
}

export const MyComponentTitle = () => {
  const asciiText1 = useFigletText("Alice Martin", "Alligator")
  return (
    <pre className="aspect-auto text-[3px] md:text-[5px] lg:text-[7px] text-green-50 size-fill  text-green-600 drop-shadow-[1px_1px_2px_#72f14c]">
      {asciiText1}
    </pre>
  )
}

export function MyComponentTitleAnim() {
  const asciiTextRef = useAsciiText({
    animationIteration: 1,
    fadeInOnly: true,
    animationDelay: 0,
    animationLoop: false,
    font: alligator,
    text: "ALICE MARTIN",
  }) as React.RefObject<HTMLPreElement>

  return (
    <pre
      className="aspect-auto text-[3px] md:text-[8px] lg:text-[10px] text-green-600 drop-shadow-[1px_1px_2px_#72f14c] size-fill"
      ref={asciiTextRef}
    ></pre>
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

  const classOpen = toggle
    ? "content opened m-4 text-green-50 p-3 center"
    : "content m-4 text-green-50 p-3"

  const classBorder = border ? "focus" : ""

  return (
    <div className="wrap m-[42px]">
      <div
        className={
          classOpen + " " + classBorder + " " + "flex flex-col items-center "
        }
      >
        <div>
          <MyComponentTitle />
        </div>
        <MyComponentSubTitle />
      </div>
    </div>
  )
}
