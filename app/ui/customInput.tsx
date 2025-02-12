import React from "react"
import useCaret from "../utils/useCaret"
import { Path, UseFormRegister, ValidationRule } from "react-hook-form"

interface IFormValues {
  name: string
  email: string
  subject: string
  content: string
}

type InputProps = {
  label: Path<IFormValues>
  register: UseFormRegister<IFormValues>
  required: boolean
  pattern?: ValidationRule<RegExp>
}

const CustomInput = ({
  id,
  type,
  value,
  setValue,
  formValidation,
}: {
  id: "name" | "email" | "subject" | "content"
  type: "text" | "email" | "textarea"
  value: string
  setValue: (value: string) => void
  formValidation: InputProps
}) => {
  const {
    handleOnFocus: handleOnFocusCaret,
    handleOnBlur,
    handleKeyDown,
    shifts,
    paused,
  } = useCaret(value)

  function handleOnFocusLabel() {
    handleOnFocusCaret()
  }

  const caretPosition = value.length - shifts

  const [beforeCaret, inCaret, afterCaret] = [
    value.slice(0, caretPosition),
    value.charAt(caretPosition),
    value.slice(caretPosition + 1),
  ]

  const { register, label, pattern, required } = formValidation
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
          value={value}
          onKeyDown={handleKeyDown}
          {...register(label, {
            required: required,
            onBlur: handleOnBlur,
            onChange: (e) => setValue(e.target.value),
            pattern: pattern,
          })}
        />
      ) : (
        <input
          className="inputHidde"
          onKeyDown={handleKeyDown}
          id={id}
          type={type}
          value={value}
          {...register(label, {
            required: required,
            onBlur: handleOnBlur,
            onChange: (e) => setValue(e.target.value),
            pattern: pattern,
          })}
        />
      )}
    </label>
  )
}

export default CustomInput
