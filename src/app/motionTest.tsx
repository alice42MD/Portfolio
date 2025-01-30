import React, { useState } from "react"
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"

function Item({ color, isOpen, onClick }) {
  return (
    <motion.li animate onClick={onClick} style={{ "--highlight": color }}>
      <motion.div animate className="image" />
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </motion.li>
  )
}

function Content() {
  return (
    <motion.div animate className="content">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    </motion.div>
  )
}
export default function App() {
  const [currentColor, setColor] = useState(false)

  return (
    <div>
      {/* <AnimateSharedLayout> */}
      <motion.ul animate>
        {colors.map((color) => (
          <Item
            key={color}
            color={color}
            isOpen={currentColor === color}
            onClick={() => setColor(currentColor === color ? false : color)}
          />
        ))}
      </motion.ul>
      {/* </AnimateSharedLayout> */}
    </div>
  )
}

const colors = ["#22cc88", "#ffcc00", "#0099ff", "#ff0055", "#000"]
