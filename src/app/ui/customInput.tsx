import React, { useRef } from "react"
import useCursor from "../utils/useCursor"

const CustomInput = ({
  id,
  type,
  value,
  setValue,
}: {
  id: "name" | "email" | "subject" | "message"
  type: "text" | "email" | "textarea"
  value: string
  setValue: (value: string) => void
}) => {
  const {
    handleOnFocus: handleOnFocusCursor,
    handleOnBlur,
    handleKeyDown,
    shifts,
    paused,
  } = useCursor(value)

  const inputRef = useRef<HTMLInputElement | null>(null)
  function handleOnFocusLabel(event: any) {
    event.preventDefault()
    inputRef.current?.focus()
    handleOnFocusCursor(event)
  }

  const cursorPosition = value.length - shifts

  const [beforeCursor, inCursor, afterCursor] = [
    value.slice(0, cursorPosition),
    value.charAt(cursorPosition),
    value.slice(cursorPosition + 1),
  ]

  console.log(paused, inCursor)
  return (
    <label className="label" onClick={handleOnFocusLabel}>
      <span className={`input-mirror ${type === "textarea" && "h-[250px]"}`}>
        {beforeCursor}
        <span
          className={`text-background bg-primary ${inCursor.length > 0 ? `before:content-['${inCursor}']` : "before:content-['_']"} ${paused ? "hidden" : "animate-blink"}`}
        >
          {inCursor}
        </span>
        {afterCursor}
      </span>

      <input
        ref={inputRef}
        required
        className="inputHidde"
        onKeyDown={handleKeyDown}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleOnBlur}
        id={id}
        type={type}
        value={value}
      />
    </label>
  )
}

export default CustomInput
