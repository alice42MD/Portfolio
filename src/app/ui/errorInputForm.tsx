import { FieldErrors } from "react-hook-form"
import { Inputs } from "../content/contact"
import WarningIcon from "./svg/warningIcon"

export default function ErrorInputForm({
  errors,
  value,
}: {
  errors: FieldErrors<Inputs>
  value: "name" | "email" | "content" | "subject"
}) {
  const error = () => {
    let error
    if (errors[value]?.type === "pattern" && value === "email")
      error = "Please enter a valid email"
    else if (errors[value]?.type === "pattern" && value === "name")
      error = "Alphabetical characters only"
    else if (errors[value]?.type === "required")
      error = "This field is required"
    else return
    return (
      <div className="flex items-center">
        <WarningIcon className="fill-primary w-[30px] h-[30px]" />
        {error}
      </div>
    )
  }
  return error()
}
