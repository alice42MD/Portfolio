import { twMerge } from "tailwind-merge"

interface ErrorIconProps {
  className?: string
}

const ErrorIcon = ({ className }: ErrorIconProps) => {
  return (
    <svg
      width="256"
      height="256"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("w-20 h-20", className)}
    >
      <path d="M77 56H71V134H77V56Z" />
      <path d="M77 140H179V134H77V140Z" />
      <path d="M185 134V56H179V134H185Z" />
      <path d="M179 50H77V56H179V50Z" />
      <path d="M59 194V44H53V194H59Z" />
      <path d="M65 38H59V44H65V38Z" />
      <path d="M191 38V32H65V38H191Z" />
      <path d="M197 44V194H203V44H197Z" />
      <path d="M197 38H191V44H197V38Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M59 224H197V194H59V224ZM65 218V200H191V218H65Z"
      />
      <path d="M71 170V176H83V170H71Z" />
      <path d="M143 164V170H179V164H143Z" />
      <path d="M161 122H155V128H161V122Z" />
      <path d="M143 116V122H155V116H143Z" />
      <path d="M113 110V116H143V110H113Z" />
      <path d="M107 116V122H113V116H107Z" />
      <path d="M131 98H119V104H131V98Z" />
      <path d="M137 98V92H131V98H137Z" />
      <path d="M113 92V98H119V92H113Z" />
      <path d="M107 80V86H113V80H107Z" />
      <path d="M95 80V86H101V80H95Z" />
      <path d="M95 68V74H101V68H95Z" />
      <path d="M113 74V68H107V74H113Z" />
      <path d="M143 80V86H149V80H143Z" />
      <path d="M155 86H161V80H155V86Z" />
      <path d="M161 74V68H155V74H161Z" />
      <path d="M143 68V74H149V68H143Z" />
      <path d="M155 74H149V80H155V74Z" />
      <path d="M107 74H101V80H107V74Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M59 44V194H197V44H191V38H65V44H59ZM185 56V134H179V140H77V134H71V56H77V50H179V56H185ZM71 176V170H83V176H71ZM143 170V164H179V170H143Z"
        fill="transparent"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M77 56V134H179V56H77ZM95 74V68H101V74H107V68H113V74H107V80H113V86H107V80H101V86H95V80H101V74H95ZM143 74V68H149V74H155V68H161V74H155V80H161V86H155V80H149V86H143V80H149V74H143ZM113 98V92H119V98H131V92H137V98H131V104H119V98H113ZM113 110H143V116H155V122H161V128H155V122H143V116H113V122H107V116H113V110Z"
        fill="transparent"
      />
      <path d="M65 200V218H191V200H65Z" fill="transparent" />
    </svg>
  )
}

export default ErrorIcon
