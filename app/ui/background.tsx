import scanlines from "@/public/scanlines.png"
import bezel from "@/public/bezel.png"
import Image from "next/image"
import { useEffect, useState } from "react"

const Background = ({ onLoad }: { onLoad: () => void }) => {
  const [isImgLoaded, setIsImgLoaded] = useState({ img1: false, img2: false })

  useEffect(() => {
    if (isImgLoaded.img1 && isImgLoaded.img2) onLoad()
  }, [isImgLoaded])

  const handleImgLoading = (img: string) => {
    setIsImgLoaded((prevState) => ({
      ...prevState,
      [img]: true,
    }))
  }

  return (
    <div>
      <Image
        className={
          "absolute w-full h-full top-0 left-0 pointer-events-none opacity-myOpacity"
        }
        alt="scanlines"
        src={scanlines}
        onLoad={() => handleImgLoading("img1")}
      />
      <Image
        className={"absolute w-full h-full top-0 left-0 pointer-events-none"}
        alt="bezel"
        src={bezel}
        onLoad={() => handleImgLoading("img2")}
      />
    </div>
  )
}
export default Background
