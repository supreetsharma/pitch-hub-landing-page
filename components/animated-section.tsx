"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale" | "slide-up"
  delay?: number
}

export function AnimatedSection({ children, className = "", animation = "fade-up", delay = 0 }: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation()

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-left":
        return "animate-on-scroll-left"
      case "fade-right":
        return "animate-on-scroll-right"
      case "scale":
        return "animate-on-scroll-scale"
      case "slide-up":
        return "animate-on-scroll"
      default:
        return "animate-on-scroll"
    }
  }

  const getDelayClass = () => {
    if (delay === 100) return "animate-delay-100"
    if (delay === 200) return "animate-delay-200"
    if (delay === 300) return "animate-delay-300"
    if (delay === 400) return "animate-delay-400"
    if (delay === 500) return "animate-delay-500"
    return ""
  }

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${getDelayClass()} ${isVisible ? "animate" : ""} ${className}`}
      style={{ animationDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  )
}
