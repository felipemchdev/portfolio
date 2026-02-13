"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function IntroOverlay() {
    const [show, setShow] = useState(true)
    const [textPhase, setTextPhase] = useState(0)

    useEffect(() => {
        // Phase 1: "Bem-vindo" fades in
        const t1 = setTimeout(() => setTextPhase(1), 200)
        // Phase 2: Text holds
        const t2 = setTimeout(() => setTextPhase(2), 1800)
        // Phase 3: Overlay fades out
        const t3 = setTimeout(() => setShow(false), 2400)

        return () => {
            clearTimeout(t1)
            clearTimeout(t2)
            clearTimeout(t3)
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
                        Bem-vindo
                        <span className="text-primary">.</span>
                    </motion.h1>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
