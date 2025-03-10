import chiracos from "@/public/chirhacker.png"
import { useTheme } from "next-themes"
import { useCallback, useEffect, useRef } from "react"

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

  const initParticles = useCallback((canvas: { width: number }) => {
    let particles: ParticleType[] = []
    const chars = ["A", "C", "H", "I", "R", "a", "c", "h", "i", "r", 0, 1]
    const y = 0
    for (let i = 0; i < 1500; i++) {
      const x = Math.random() * canvas.width
      particles.push({
        x,
        y,
        speed: 0,
        velocity: Math.random() * 1.5,
        size: Math.random() * 1.5 + 1,
        position1: Math.floor(y),
        position2: Math.floor(x),
        randomChar: chars[Math.floor(Math.random() * chars.length)],
      })
    }
    return particles
  }, [])

  console.log(theme)

  const myImage = new Image()
  myImage.src = chiracos.src

  useEffect(() => {
    const canvas = refCanvasElement.current
    if (canvas === null) return
    const ctx = canvas.getContext("2d")
    if (ctx === null || ctx === undefined) return
    canvas.width = refDivElement.current?.getBoundingClientRect().width ?? 0
    canvas.height = refDivElement.current?.getBoundingClientRect().height ?? 0

    myImage.onload = () => {
      ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height)
      const pixels = ctx?.getImageData(0, 0, canvas.width, canvas.height)

      let particlesArray: ParticleType[] = initParticles(canvas)
      const numberOfParticles = 2000

      let mappedImage: number[][][] = []

      for (let y = 0; y < canvas?.height; y++) {
        let row = []
        for (let x = 0; x < canvas?.width; x++) {
          const red = pixels?.data[y * 4 * pixels?.width + x * 4]
          const green = pixels?.data[y * 4 * pixels?.width + (x * 4 + 1)]
          const blue = pixels?.data[y * 4 * pixels?.width + (x * 4 + 2)]
          const brightness =
            Math.sqrt(
              (red ?? 0) * (red ?? 0) * 0.299 +
                (green ?? 0) * (green ?? 0) * 0.587 +
                (blue ?? 0) * (blue ?? 0) * 0.114
            ) / 100
          const cell = [brightness]
          row.push(cell)
        }
        mappedImage.push(row)
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

      initParticles(canvas)
      animate(ctx, canvas)
    }
  }, [])

  return (
    <div ref={refDivElement} className="h-full">
      <>
        <div className="z-50 absolute top-2/3 left-2/3 drop-shadow-shadow">
          <>YOU HAVE BEEN CHIR-HACKED</>
          <div>send coquettes and I might delete virus</div>
        </div>
        <canvas
          ref={refCanvasElement}
          className="canvas w-full h-full"
        ></canvas>
      </>
    </div>
  )
}

// import chiracos from "@/public/chirhacker.png"
// import { useTheme } from "next-themes"
// import { useEffect, useRef, useCallback } from "react"

// type ParticleType = {
//   x: number
//   y: number
//   speed: number
//   velocity: number
//   size: number
//   position1: number
//   position2: number
//   randomChar: string | number
// }

// const colors = {
//   dark: { background: "rgb(8, 50, 8)", primary: "rgb(22, 163, 74)" },
//   light: { background: "rgb(37, 21, 109)", primary: "rgb(214, 214, 43)" },
// }

// export default function Chirac() {
//   const refDivElement = useRef<HTMLDivElement>(null)
//   const refCanvasElement = useRef<HTMLCanvasElement>(null)
//   const { theme } = useTheme()

//   const initParticles = useCallback((canvas: { width: number }) => {
//     let particles: ParticleType[] = []
//     const chars = ["A", "C", "H", "I", "R", "a", "c", "h", "i", "r", 0, 1]
//     const y = 0
//     for (let i = 0; i < 1500; i++) {
//       const x = Math.random() * canvas.width
//       particles.push({
//         x,
//         y,
//         speed: 0,
//         velocity: Math.random() * 1.5,
//         size: Math.random() * 1.5 + 1,
//         position1: Math.floor(y),
//         position2: Math.floor(x),
//         randomChar: chars[Math.floor(Math.random() * chars.length)],
//       })
//     }
//     return particles
//   }, [])

//   useEffect(() => {
//     const canvas = refCanvasElement.current
//     if (!canvas) return
//     const ctx = canvas.getContext("2d")
//     if (!ctx) return

//     const resizeCanvas = () => {
//       if (refDivElement.current) {
//         canvas.width = refDivElement.current.clientWidth
//         canvas.height = refDivElement.current.clientHeight
//       }
//     }

//     resizeCanvas()
//     window.addEventListener("resize", resizeCanvas)

//     const img = new Image()
//     img.src = chiracos.src

//     const cleanup = () => {
//       img.onload = null
//       window.removeEventListener("resize", resizeCanvas)
//     }

//     img.onload = () => {
//       ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
//       const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height)
//       let mappedImage: number[][][] = []

//       for (let y = 0; y < canvas?.height; y++) {
//         let row = []
//         for (let x = 0; x < canvas?.width; x++) {
//           const red = pixels?.data[y * 4 * pixels?.width + x * 4]
//           const green = pixels?.data[y * 4 * pixels?.width + x * 4]
//           const blue = pixels?.data[y * 4 * pixels?.width + x * 4]
//           const brightness =
//             Math.sqrt(
//               (red ?? 0) * (red ?? 0) * 0.299 +
//                 (green ?? 0) * (green ?? 0) * 0.587 +
//                 (blue ?? 0) * (blue ?? 0) * 0.114
//             ) / 100
//           const cell = [brightness]
//           row.push(cell)
//         }
//         mappedImage.push(row)
//       }

//       let particles = initParticles(canvas)

//       const animate = () => {
//         ctx.globalAlpha = 0.05
//         ctx.fillStyle = theme
//           ? colors[theme as keyof typeof colors].background
//           : "black"
//         ctx.fillRect(0, 0, canvas.width, canvas.height)
//         ctx.globalAlpha = 0.2
//         particles.forEach((particle) => {
//           particle.position1 = Math.floor(particle.y)
//           particle.position2 = Math.floor(particle.x)
//           particle.speed =
//             mappedImage[particle.position1][particle.position2][0]
//           let movement = 1.5 - particle.speed + particle.velocity

//           particle.y += movement
//           if (particle.y > canvas.height) {
//             particle.y = 0
//             particle.x = Math.random() * canvas.width
//           }
//           ctx.font = "14px Arial"
//           ctx.fillStyle = theme === "dark" ? "lime" : "yellow"
//           ctx.fillText(particle.randomChar.toString(), particle.x, particle.y)
//         })
//         requestAnimationFrame(() => animate())
//       }
//       animate()
//     }

//     return cleanup
//   }, [])

//   return (
//     <div ref={refDivElement} className="h-full">
//       <div className="absolute top-2/3 left-2/3 z-50 drop-shadow-shadow">
//         <p>YOU HAVE BEEN CHIR-HACKED</p>
//         <p>send coquettes and I might delete virus</p>
//       </div>
//       <canvas ref={refCanvasElement}></canvas>
//     </div>
//   )
// }
