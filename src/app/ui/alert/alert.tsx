import React from "react"
import { XMarkIcon } from "@heroicons/react/24/solid"

type AlertType = "Success" | "Error" | "Warning"

type AlertProps = {
  type: AlertType
  message: string
  onClose: () => void
}

const backgroundColors = {
  Success: "#22C55E",
  Error: "#EF4444",
  Warning: "#F97316",
}

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  return (
    <div
      id="alert"
      className="alert-box flex w-full flex-col max-w-[400px] transform items-start justify-start gap-4 bg-white ease-in-out"
    >
      <div className="flex w-full items-start justify-between p-3">
        <span className="text-[13px] font-medium leading-tight text-black">
          {message}
        </span>
        <span className="cursor-pointer w-10 h-10" onClick={onClose}>
          <XMarkIcon />
        </span>
      </div>
      <div
        style={{
          backgroundColor: backgroundColors[type],
        }}
        className="flex h-4 w-full items-center justify-center"
      ></div>
    </div>
  )
}

export default Alert
