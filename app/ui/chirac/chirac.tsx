import chiracos from "@/public/chirhacker.png"
import { useTheme } from "next-themes"
import { useEffect, useRef } from "react"

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
export default function Chirac() {
  const refDivElement = useRef<HTMLDivElement>(null)
  const refCanvasElement = useRef<HTMLCanvasElement>(null)

  const { theme } = useTheme()

  console.log(theme)
  useEffect(() => {
    const canvas = refCanvasElement.current
    if (canvas === null) return
    const ctx = canvas.getContext("2d")
    if (ctx === null || ctx === undefined) return
    canvas.width = refDivElement.current?.getBoundingClientRect().width ?? 0
    canvas.height = refDivElement.current?.getBoundingClientRect().height ?? 0
    const myImage = new Image()
    myImage.src = chiracos.src

    myImage.addEventListener("load", function () {
      ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height)
      const pixels = ctx?.getImageData(0, 0, canvas.width, canvas.height)

      let particlesArray: ParticleType[] = []
      const numberOfParticles = 2000

      let mappedImage: number[][][] = []

      for (let y = 0; y < canvas?.height; y++) {
        let row = []
        for (let x = 0; x < canvas?.width; x++) {
          const red = pixels?.data[y * 4 * pixels?.width + x * 4]
          const green = pixels?.data[y * 4 * pixels?.width + (x * 4 + 1)]
          const blue = pixels?.data[y * 4 * pixels?.width + (x * 4 + 2)]
          const brightness = calculateRelativeBrightness(red, green, blue)
          const cell = [brightness]
          row.push(cell)
        }
        mappedImage.push(row)
      }

      function calculateRelativeBrightness(
        red: number | undefined,
        green: number | undefined,
        blue: number | undefined
      ) {
        return (
          Math.sqrt(
            (red ?? 0) * (red ?? 0) * 0.299 +
              (green ?? 0) * (green ?? 0) * 0.187 +
              (blue ?? 0) * (blue ?? 0) * 0.014
          ) / 100
        )
      }

      function update(
        particle: ParticleType,
        canvas: { height: number; width: number }
      ) {
        particle.position1 = Math.floor(particle.y)
        particle.position2 = Math.floor(particle.x)
        particle.speed = mappedImage[particle.position1][particle.position2][0]
        let movement = 1.5 - particle.speed + particle.velocity

        particle.y += movement
        if (particle.y > canvas.height) {
          particle.y = 0
          particle.x = Math.random() * canvas.width
        }
      }

      function draw(ctx: CanvasRenderingContext2D, particle: any) {
        ctx.font = "12px"
        ctx.fillStyle = theme === "dark" ? "lime" : "yellow"
        ctx.fillText(particle.randomChar, particle.x, particle.y)
      }

      function init(canvas: HTMLCanvasElement) {
        for (let i = 0; i < numberOfParticles; i++) {
          const characters = [
            "A",
            "C",
            "H",
            "I",
            "R",
            "a",
            "c",
            "h",
            "i",
            "r",
            0,
            1,
          ]
          const x = Math.random() * canvas.width
          const y = 0
          particlesArray.push({
            x,
            y: 0,
            speed: 0,
            velocity: Math.random() * 1.5,
            size: Math.random() * 1.5 + 1,
            position1: Math.floor(y),
            position2: Math.floor(x),
            randomChar:
              characters[Math.trunc(Math.random() * characters.length)],
          })
        }
      }

      function animate(
        ctx: CanvasRenderingContext2D,
        canvas: HTMLCanvasElement
      ) {
        ctx.globalAlpha = 0.05
        ctx.fillStyle = colors[theme as keyof typeof colors].background
        // ctx.fillStyle = "black"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.globalAlpha = 0.2
        particlesArray.forEach((particle, index) => {
          update(particle, canvas)
          ctx.globalAlpha = particlesArray[index].speed * 0.75
          draw(ctx, particle)
        })
        requestAnimationFrame(() => animate(ctx, canvas))
      }

      init(canvas)
      animate(ctx, canvas)
    })
  }, [])

  return (
    <div ref={refDivElement} className="h-full">
      <div className="z-50 absolute top-2/3 left-2/3 drop-shadow-shadow">
        <>YOU HAVE BEEN CHIR-HACKED</>
        <div>send coquettes and I might delete virus</div>
      </div>
      <canvas ref={refCanvasElement} className="canvas w-full h-full"></canvas>
    </div>
  )
}
