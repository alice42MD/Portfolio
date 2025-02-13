import { JSX, ReactNode } from "react"

export default function Content({
  categories,
  displayedCategory,
  child,
}: {
  categories: JSX.Element[]
  displayedCategory: JSX.Element
  child: string | undefined | ReactNode
}) {
  return (
    <div className="mx-6 md:mx-10 pl-[35px] pr-[35px] drop-shadow-shadow">
      <div className="text-[17px] ">
        <div className="my-4">
          <span>Portfolio ~$: {"> "}</span>
          <span>ls</span>
        </div>

        <div className="cursor-pointer grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {categories}
        </div>

        <div className="my-4">
          <span>Portfolio ~$: {"> "}</span>
          <span>{displayedCategory}</span>
        </div>
        <div>{child}</div>
      </div>
    </div>
  )
}
