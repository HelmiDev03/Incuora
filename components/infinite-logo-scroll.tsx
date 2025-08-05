"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

// Define the logos with their secret images
const logos = [
  { src: "/finalto-logo.png", alt: "Finalto", secretSrc: "/solutions/compliance-illustration.png" },
  { src: "/gfsc-logo.png", alt: "GFSC", secretSrc: "/solutions/finance-license.png" },
  { src: "/ftt-logo.png", alt: "FTT", secretSrc: "/solutions/infrastructure-illustration.png" },
  { src: "/scope-logo.png", alt: "Scope", secretSrc: "/solutions/strategy-illustration.png" },
  { src: "/sumsub-logo.png", alt: "Sumsub", secretSrc: "/solutions/tech-illustration.png" },
  { src: "/b2prime-logo.png", alt: "B2Prime", secretSrc: "/about-illustration.png" },
  { src: "/swiset-logo.png", alt: "Swiset", secretSrc: "/tech-illustration.png" },
]

interface InfiniteLogoScrollProps {
  durationSeconds?: number // Duration for one full loop in seconds
  blurPx?: number // Blur amount in pixels
}

interface Logo {
  src: string
  alt: string
  secretSrc: string
}

export default function InfiniteLogoScroll({ durationSeconds = 3, blurPx = 2 }: InfiniteLogoScrollProps) {
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const firstSetRef = useRef<HTMLDivElement>(null)
  const [translateX, setTranslateX] = useState(0)
  const [singleSetWidth, setSingleSetWidth] = useState(0)
  const animationFrameRef = useRef<number | null>(null)
  const lastTimeRef = useRef<DOMHighResTimeStamp>(0)
  const [isHovered, setIsHovered] = useState(false) // State for hover

  // Measure the width of the first set of logos once it's rendered
  useEffect(() => {
    if (firstSetRef.current) {
      const width = firstSetRef.current.offsetWidth
      setSingleSetWidth(width)
    }
  }, [])

  // Animation function for the infinite scroll
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
    [durationSeconds, singleSetWidth, isHovered],
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
  }, [animate, singleSetWidth, isHovered])

  // Custom component for logo with no click functionality
  const LogoWithSecret = ({ logo, keyPrefix }: { logo: Logo, keyPrefix: string }) => {
    // Create a unique key for each logo
    const key = `${keyPrefix}-${logo.alt}`
    
    return (
      <div
        key={key}
        className="w-[80px] h-[80px] md:w-[140px] md:h-[140px] flex items-center justify-center"
      >
        {/* Div with right-click prevention */}
        <div 
          className="relative"
          onContextMenu={(e) => {
            // Prevent the default context menu (right-click menu)
            e.preventDefault()
            return false
          }}
        >
          {/* Visible logo image with right-click disabled */}
          <Image
            src={logo.src}
            alt={logo.alt}
            width={80}
            height={80}
            className="object-contain md:w-[120px] md:h-[120px]"
            onContextMenu={(e) => e.preventDefault()}
            draggable="false" // Prevent dragging the image
          />
        </div>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="flex-shrink-0 w-full lg:w-[949px] h-[120px] md:h-[168px] overflow-hidden flex items-center justify-center"
      style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
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
            <LogoWithSecret key={`first-${index}`} logo={logo} keyPrefix={`first-${index}`} />
          ))}
        </div>
        
        {/* Duplicate set for seamless loop */}
        <div className="flex gap-4 md:gap-8">
          {logos.map((logo, index) => (
            <LogoWithSecret key={`second-${index}`} logo={logo} keyPrefix={`second-${index}`} />
          ))}
        </div>
      </div>
      
      {/* Script to disable right-click on all logo images */}
      <script dangerouslySetInnerHTML={{ __html: `
        document.addEventListener('DOMContentLoaded', function() {
          // Disable right-click on all images in the logo section
          const logoImages = document.querySelectorAll('.flex-shrink-0 img');
          logoImages.forEach(img => {
            img.addEventListener('contextmenu', function(e) {
              e.preventDefault();
              return false;
            });
            
            // Also prevent dragging images
            img.addEventListener('dragstart', function(e) {
              e.preventDefault();
              return false;
            });
          });
        });
      `}} />
    </div>
  )
}
