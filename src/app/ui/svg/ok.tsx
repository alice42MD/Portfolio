import { twMerge } from "tailwind-merge"

interface OkIconProps {
  className?: string
}

const OkIcon = ({ className }: OkIconProps) => {
  return (
    <svg
      width="256"
      height="256"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("w-20 h-20", className)}
    >
      <path d="M179 134H77V140H179V134Z" />
      <path d="M185 56H179V134H185V56Z" />
      <path d="M137 110V116H143V110H137Z" />
      <path d="M113 122H137V116H113V122Z" />
      <path d="M113 110H107V116H113V110Z" />
      <path d="M125 74H131V104H119V98H125V74Z" />
      <path d="M101 74H107V86H101V74Z" />
      <path d="M143 74H149V86H143V74Z" />
      <path d="M179 50H77V56H179V50Z" />
      <path d="M71 56V134H77V56H71Z" />
      <path d="M53 44V194H59V44H53Z" />
      <path d="M65 38H59V44H65V38Z" />
      <path d="M191 38V32H65V38H191Z" />
      <path d="M191 44H197V38H191V44Z" />
      <path d="M203 194V44H197V194H203Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M59 224H197V194H59V224ZM65 218V200H191V218H65Z"
      />
      <path d="M71 170H83V176H71V170Z" />
      <path d="M143 164V170H179V164H143Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M59 44V194H197V44H191V38H65V44H59ZM185 56V134H179V140H77V134H71V56H77V50H179V56H185ZM83 170H71V176H83V170ZM143 170V164H179V170H143Z"
        fill="transparent"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M77 134H179V56H77V134ZM107 74H101V86H107V74ZM131 74H125V98H119V104H131V74ZM149 74H143V86H149V74ZM137 122H113V116H107V110H113V116H137V110H143V116H137V122Z"
        fill="transparent"
      />
      <path d="M65 200V218H191V200H65Z" fill="transparent" />
    </svg>
  )
}

export default OkIcon
