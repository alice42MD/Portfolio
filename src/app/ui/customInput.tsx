import React, { useRef } from "react"
import useCaret from "../utils/useCaret"

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
    handleOnFocus: handleOnFocusCaret,
    handleOnBlur,
    handleKeyDown,
    shifts,
    paused,
  } = useCaret(value)

  function handleOnFocusLabel(event: any) {
    handleOnFocusCaret(event)
  }

  const caretPosition = value.length - shifts

  const [beforeCaret, inCaret, afterCaret] = [
    value.slice(0, caretPosition),
    value.charAt(caretPosition),
    value.slice(caretPosition + 1),
  ]

  return (
    <label className="label caret-text" onClick={handleOnFocusLabel}>
      <span className={`input-mirror ${type === "textarea" && "h-[250px]"}`}>
        {beforeCaret}
        <span
          className={`text-background bg-primary ${inCaret.length > 0 ? `before:content-['${inCaret}']` : "before:content-['_']"} ${paused ? "hidden" : "animate-blink"}`}
        >
          {inCaret}
        </span>
        {afterCaret}
      </span>
      {type === "textarea" ? (
        <textarea
          rows={5}
          className="inputHidde"
          id={id}
          required
          value={value}
          onKeyDown={handleKeyDown}
          onChange={(e) => setValue(e.target.value)}
          onBlur={handleOnBlur}
        />
      ) : (
        <input
          required
          className="inputHidde"
          onKeyDown={handleKeyDown}
          onChange={(e) => setValue(e.target.value)}
          onBlur={handleOnBlur}
          id={id}
          type={type}
          value={value}
        />
      )}
    </label>
  )
}

export default CustomInput
