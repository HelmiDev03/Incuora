"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import Image from "next/image"

const logos = [
  { src: "/finalto-logo.png", alt: "Finalto" },
  { src: "/gfsc-logo.png", alt: "GFSC" },
  { src: "/ftt-logo.png", alt: "FTT" },
  { src: "/scope-logo.png", alt: "Scope" },
  { src: "/sumsub-logo.png", alt: "Sumsub" },
  { src: "/b2prime-logo.png", alt: "B2Prime" },
  { src: "/swiset-logo.png", alt: "Swiset" },
]

interface InfiniteLogoScrollProps {
  durationSeconds?: number // Duration for one full loop in seconds
  blurPx?: number // Blur amount in pixels
}

export default function InfiniteLogoScroll({ durationSeconds = 3, blurPx = 2 }: InfiniteLogoScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const firstSetRef = useRef<HTMLDivElement>(null)
  const [translateX, setTranslateX] = useState(0)
  const [singleSetWidth, setSingleSetWidth] = useState(0)
  const animationFrameRef = useRef<number | null>(null)
  const lastTimeRef = useRef<DOMHighResTimeStamp>(0)
  const [isHovered, setIsHovered] = useState(false) // New state for hover

  // Measure the width of the first set of logos once it's rendered
  useEffect(() => {
    if (firstSetRef.current) {
      const width = firstSetRef.current.offsetWidth
      setSingleSetWidth(width)
    }
  }, [])

  const animate = useCallback(
    (time: DOMHighResTimeStamp) => {
      if (!contentRef.current || singleSetWidth === 0 || isHovered) {
        // Pause if hovered
        lastTimeRef.current = time // Update lastTimeRef even when paused to prevent jump on resume
        animationFrameRef.current = null // Clear animation frame if paused
        return
      }

      const deltaTime = time - lastTimeRef.current
      lastTimeRef.current = time

      const pixelsPerSecond = singleSetWidth / durationSeconds
      const pixelsPerFrame = pixelsPerSecond * (deltaTime / 1000)

      setTranslateX((prevX) => {
        let newX = prevX - pixelsPerFrame
        if (newX <= -singleSetWidth) {
          newX += singleSetWidth
        }
        return newX
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    },
    [durationSeconds, singleSetWidth, isHovered], // Add isHovered to dependencies
  )

  useEffect(() => {
    if (singleSetWidth > 0 && !isHovered) {
      // Only start if not hovered
      if (animationFrameRef.current === null) {
        // Prevent multiple animation frames
        lastTimeRef.current = performance.now() // Reset lastTimeRef to current time on resume
        animationFrameRef.current = requestAnimationFrame(animate)
      }
    } else if (isHovered && animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
      animationFrameRef.current = null
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [animate, singleSetWidth, isHovered]) // Re-run effect if animate, singleSetWidth, or isHovered changes

  return (
    <div
      ref={containerRef}
      className="flex-shrink-0 w-full lg:w-[949px] h-[120px] md:h-[168px] overflow-hidden flex items-center justify-center"
      style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}
      onMouseEnter={() => setIsHovered(true)} // Set hovered state on mouse enter
      onMouseLeave={() => setIsHovered(false)} // Clear hovered state on mouse leave
    >
      <div
        ref={contentRef}
        className="flex"
        style={{
          transform: `translateX(${translateX}px)`,
          filter: `blur(${blurPx}px)`,
          transition: "filter 0.3s ease-in-out",
          width: singleSetWidth ? `${singleSetWidth * 2}px` : "auto",
        }}
      >
        {/* First set of logos */}
        <div ref={firstSetRef} className="flex gap-4 md:gap-8">
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="w-[80px] h-[80px] md:w-[140px] md:h-[140px] flex items-center justify-center"
            >
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                width={80}
                height={80}
                className="object-contain md:w-[120px] md:h-[120px]"
              />
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex gap-4 md:gap-8">
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="w-[80px] h-[80px] md:w-[140px] md:h-[140px] flex items-center justify-center"
            >
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                width={80}
                height={80}
                className="object-contain md:w-[120px] md:h-[120px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
