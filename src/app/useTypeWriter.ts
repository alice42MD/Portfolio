import { useState, useRef, useEffect } from "react"

export const useTypewriter = (text: string, speed: number, withCursor: boolean = true) => {
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(withCursor)
  const idx = useRef(0)
  const displayTextRef = useRef("")
  const [isDeleting, setIsDeleting] = useState(false)

  // Effet pour le texte tapé progressivement
  useEffect(() => {
    if (!text) return

    let typingInterval: NodeJS.Timeout

    if (isDeleting) {
      // Phase d'effacement
      typingInterval = setInterval(() => {
        if (displayTextRef.current.length > 0) {
          displayTextRef.current = displayTextRef.current.slice(0, -1)
          setDisplayText(displayTextRef.current)
        } else {
          clearInterval(typingInterval)
          setIsDeleting(false) // Passer à l'écriture
          idx.current = 0
        }
      }, speed / 2) // Effacement plus rapide
    } else {
      // Phase d'écriture
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

  // Détecter le changement de texte et effacer d'abord
  useEffect(() => {
    if (displayTextRef.current) {
      setIsDeleting(true) // Commencer la suppression
    } else {
      idx.current = 0
    }
  }, [text])

  // Effet pour le curseur clignotant
  useEffect(() => {
    if (withCursor === false) return
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500) // Changement toutes les 500ms

    return () => clearInterval(cursorInterval)
  }, [withCursor])

  if (displayText.length === 0) return `${showCursor ? "_" : " "}`
  return `${displayText}${showCursor ? "_" : " "}`
}