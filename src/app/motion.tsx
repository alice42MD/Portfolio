"use client"

import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import { useState } from "react"
import Header, { MyComponentSubTitle } from "./header"

export default function ExitAnimation() {
  const [isVisible, setIsVisible] = useState(true)
  const MotionComponent = motion.create(MyComponentSubTitle)

  // return <MotionComponent />

  return (
    <div
    // style={container}
    >
      <AnimatePresence initial={false}>
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
          >
            <Header />
          </motion.div>
        ) : null}
      </AnimatePresence>
      <motion.button
        // style={button}
        onClick={() => setIsVisible(!isVisible)}
        whileTap={{ y: 1 }}
      >
        {isVisible ? "Hide" : "Show"}
      </motion.button>
    </div>
  )
}
