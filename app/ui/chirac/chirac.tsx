import { useTypewriter } from "@/app/utils/useTypeWriter"
import chiracos from "@/public/chirhacker.png"
import { useTheme } from "next-themes"
import { memo, useCallback, useEffect, useRef } from "react"

const colors = {
  dark: {
    background: "rgb(8, 50, 8)",
    primary: "rgb(22, 163, 74)",
  },

  light: {
    background: "rgb(37, 21, 109)",
    primary: "rgb(214, 214, 43)",
  },
}

type ParticleType = {
  x: number
  y: number
  speed: number
  velocity: number
  size: number
  position1: number
  position2: number
  randomChar: string | number
}

const TypewriterComponent = memo(
  ({ text, speed }: { text: string; speed: number }) => {
    const displayText = useTypewriter(text, speed)

    return <div>{displayText}</div>
  }
)

export default function Chirac() {
  const refDiv = useRef<HTMLDivElement>(null)
  const refCanvas = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  const initParticles = useCallback(
    (canvas: { width: number }, ctx: any, mappedImage: any) => {
      let particles = []
      const chars = ["A", "C", "H", "I", "R", "a", "c", "h", "i", "r", 0, 1]
      for (let i = 0; i < 2000; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: 0,
          velocity: Math.random() * 1.5,
          randomChar: chars[Math.floor(Math.random() * chars.length)],
        })
      }
      return particles
    },
    []
  )

  useEffect(() => {
    const canvas = refCanvas.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      if (refDiv.current) {
        canvas.width = refDiv.current.offsetWidth
        canvas.height = refDiv.current.offsetHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const img = new Image()
    img.src = chiracos.src
    const cleanup = () => {
      img.onload = null
      window.removeEventListener("resize", resizeCanvas)
    }

    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height)
      let mappedImage = Array.from({ length: canvas.height }, (_, y) =>
        Array.from(
          { length: canvas.width },
          (_, x) =>
            Math.sqrt(
              pixels.data[y * 4 * pixels.width + x * 4] ** 2 * 0.299 +
                pixels.data[y * 4 * pixels.width + (x * 4 + 1)] ** 2 * 0.587 +
                pixels.data[y * 4 * pixels.width + (x * 4 + 2)] ** 2 * 0.114
            ) / 100
        )
      )

      let particles = initParticles(canvas, ctx, mappedImage)

      const animate = () => {
        ctx.globalAlpha = 0.05
        ctx.fillStyle = theme
          ? colors[theme as keyof typeof colors]?.background
          : "black"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.globalAlpha = 0.2
        particles.forEach((particle) => {
          let speed =
            mappedImage[Math.floor(particle.y)]?.[Math.floor(particle.x)] || 0
          particle.y += 1.5 - speed + particle.velocity
          if (particle.y > canvas.height) {
            particle.y = 0
            particle.x = Math.random() * canvas.width
          }
          ctx.font = "12px"
          ctx.fillStyle = theme === "dark" ? "lime" : "yellow"
          ctx.fillText(particle.randomChar.toString(), particle.x, particle.y)
        })
        requestAnimationFrame(animate)
      }
      animate()
    }

    return cleanup
  }, [theme, initParticles])

  return (
    <div ref={refDiv} className="h-full">
      <div className="z-50 absolute top-2/3 left-2/3 drop-shadow-shadow w-56">
        <TypewriterComponent
          text={
            "YOU HAVE BEEN CHIR-HACKED send coquettes and I might delete virus"
          }
          speed={50}
        />
      </div>
      <canvas ref={refCanvas} className="canvas w-full h-full"></canvas>
    </div>
  )
}
