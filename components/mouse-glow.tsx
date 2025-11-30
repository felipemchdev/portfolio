"use client"

import { useEffect, useState } from "react"

export default function MouseGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible])

  return (
    <div
      className="pointer-events-none fixed z-50 transition-opacity duration-300"
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "150px",
          height: "150px",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.08) 40%, transparent 70%)",
          filter: "blur(25px)",
        }}
      />

      <div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "80px",
          height: "80px",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.12) 50%, transparent 70%)",
          filter: "blur(15px)",
        }}
      />

      <div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "40px",
          height: "40px",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(59, 130, 246, 0.25) 50%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />
    </div>
  )
}
