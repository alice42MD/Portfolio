"use client"

import Link from "next/link"
import Background from "./ui/background"
import ErrorIcon from "./ui/svg/errorIcon"

export default function NotFound() {
  return (
    <div className="font-[family-name:var(--font-nostalgia)] text-[17px] ">
      <Background />
      <div className="relative flex flex-col justify-center items-center h-screen z-10 drop-shadow-shadow">
        <div>
          <ErrorIcon className={"fill-primary"} />
        </div>
        <div>
          <h1>Not found – 404!</h1>
        </div>
        <div>
          <Link href="/">Go back to Home</Link>
        </div>
      </div>
    </div>
  )
}
