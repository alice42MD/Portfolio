import scanlines from "../../../public/scanlines.png"
import bezel from "../../../public/bezel.png"
import Image from "next/image"

export default function Background() {
  return (
    <div>
      <Image
        className={
          "absolute w-full h-full top-0 left-0 pointer-events-none opacity-myOpacity"
        }
        alt="scanlines"
        src={scanlines}
        loading="lazy"
      />
      <Image
        className={"absolute w-full h-full top-0 left-0 pointer-events-none"}
        alt="bezel"
        src={bezel}
        loading="lazy"
      />
    </div>
  )
}
