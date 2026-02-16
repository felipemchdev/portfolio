"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

interface IntroOverlayProps {
  text: string
}

export function IntroOverlay({ text }: IntroOverlayProps) {
  const [show, setShow] = useState(true)
  const [textPhase, setTextPhase] = useState(0)

  useEffect(() => {
    const firstTimer = setTimeout(() => setTextPhase(1), 200)
    const secondTimer = setTimeout(() => setTextPhase(2), 1800)
    const thirdTimer = setTimeout(() => setShow(false), 2400)

    return () => {
      clearTimeout(firstTimer)
      clearTimeout(secondTimer)
      clearTimeout(thirdTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={
              textPhase >= 1
                ? { opacity: textPhase >= 2 ? 0 : 1, y: 0, scale: 1 }
                : { opacity: 0, y: 20, scale: 0.95 }
            }
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl font-serif font-bold tracking-tight text-foreground sm:text-7xl"
          >
            {text}
            <span className="text-primary">.</span>
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
