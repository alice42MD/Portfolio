import { useState, useEffect } from "react"

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
  return (
    <div
      className="w-full"
      style={{ position: "relative", display: "inline-block" }}
    >
      {type === "textarea" ? (
        <textarea
          rows={5}
          className="w-full mb-3 px-3"
          id={id}
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{
            fontSize: "20px",
            background: "transparent",
            caretColor: "transparent",
            textWrap: "wrap",
          }}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          className="w-full mb-3 px-3"
          onChange={(e) => setValue(e.target.value)}
          style={{
            fontSize: "20px",
            background: "transparent",
            caretColor: "transparent",
          }}
        />
      )}
      <span
        className="px-3"
        style={{
          textWrap: "wrap",
          position: "absolute",
          top: "0",
          left: `${value.length * 10}px`,
          fontSize: "20px",
          animation: "blink 1s step-end infinite",
        }}
      >
        _
      </span>
    </div>
  )
}

export default CustomInput
