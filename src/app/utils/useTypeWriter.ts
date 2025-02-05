import { useState, useRef, useEffect } from "react"

export const useTypewriter = (text: string, speed: number, withCursor: boolean = true) => {
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(withCursor)
  const idx = useRef(0)
  const displayTextRef = useRef("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!text) return

    let typingInterval: NodeJS.Timeout

    if (isDeleting) {
      typingInterval = setInterval(() => {
        if (displayTextRef.current.length > 0) {
          displayTextRef.current = displayTextRef.current.slice(0, -1)
          setDisplayText(displayTextRef.current)
        } else {
          clearInterval(typingInterval)
          setIsDeleting(false) 
          idx.current = 0
        }
      }, speed / 2) 
    } else {
      typingInterval = setInterval(() => {
        if (idx.current < text.length) {
          displayTextRef.current += text.charAt(idx.current)
          setDisplayText(displayTextRef.current)
          idx.current += 1
        } else {
          clearInterval(typingInterval)
        }
      }, speed)
    }

    return () => clearInterval(typingInterval)
  }, [text, isDeleting, speed])

  useEffect(() => {
    if (displayTextRef.current) {
      setIsDeleting(true) 
    } else {
      idx.current = 0
    }
  }, [text])

  useEffect(() => {
    if (withCursor === false) return
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500) 

    return () => clearInterval(cursorInterval)
  }, [withCursor])

  if (displayText.length === 0) return `${showCursor ? "_" : " "}`
  return `${displayText}${showCursor ? "_" : " "}`
}