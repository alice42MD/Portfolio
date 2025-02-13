import ErrorIcon from "../svg/errorIcon"
import OkIcon from "../svg/okIcon"
import React from "react"

type AlertType = "Success" | "Error" | "Warning"

type AlertProps = {
  type: AlertType
  message: string
  onClose: () => void
}

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  return (
    <div
      id="alert"
      style={{
        filter: "drop-shadow(2px 4px 6px black)",
      }}
      className=" alert-box flex w-full flex-col max-w-[400px] transform items-start justify-start bg-background ease-in-out"
    >
      <div
        className="absolute h-full flex flex-col w-full  pointer-events-none items-start opacity-myOpacity"
        style={{
          backgroundImage: "url('/scanlines.png')",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="font-bold text-lg flex flex-row w-full justify-between bg-primary text-background">
        <span className="px-1 ">MESSAGE INFO</span>
        <span className="cursor-pointer px-1" onClick={onClose}>
          X
        </span>
      </div>
      <div className="relative flex flex-row w-full items-center self-center">
        {type === "Error" ? (
          <ErrorIcon className={"fill-primary drop-shadow-shadow"} />
        ) : (
          <OkIcon className={"fill-primary drop-shadow-shadow"} />
        )}
        <span className="drop-shadow-shadow">{message}</span>
      </div>
    </div>
  )
}

export default Alert
