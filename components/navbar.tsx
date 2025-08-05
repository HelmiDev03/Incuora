"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const getLinkClass = (path: string) => {
    return `font-inter font-medium text-xl leading-[150%] ${
      pathname === path ? "text-orange-500" : "text-black hover:text-orange-500"
    } transition-colors`
  }

  const getMobileLinkClass = (path: string) => {
    return `text-2xl font-semibold ${
      pathname === path ? "text-orange-500" : "text-black hover:text-orange-500"
    } transition-colors`
  }

  // Function to handle smooth scrolling
  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault() // Prevent default link behavior (instant jump)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false) // Close mobile menu after clicking a link
    }
  }

  // Dynamically set the href for Contact Us to ensure it stays on the current page
  const contactHref = `${pathname}#contact-section`

  return (
    <nav className="absolute top-0 left-0 right-0 h-[120px] bg-white z-20 shadow-sm">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo (Desktop) */}
        <div className="absolute left-[60px] top-[16px] hidden md:block">
          <Link href="/">
            <Image src="/incuora-logo.png" alt="Incuora" width={164} height={88} className="object-contain" />
          </Link>
        </div>
        {/* Logo (Mobile - responsive size) */}
        <div className="md:hidden">
          <Link href="/">
            <Image src="/incuora-logo.png" alt="Incuora" width={120} height={64} className="object-contain" />
          </Link>
        </div>

        {/* Desktop Navigation Items */}
        <div className="absolute right-[21px] top-[34px] hidden md:flex items-center gap-12">
          <Link href="/" className={getLinkClass("/")}>
            Home
          </Link>
          <Link href="/about" className={getLinkClass("/about")}>
            About
          </Link>
          {/* Conditionally render Solutions link */}
          {pathname !== "/about" && (
            <Link
              href="#solutions-section"
              onClick={(e) => handleSmoothScroll(e, "solutions-section")}
              className="font-inter font-medium text-xl leading-[150%] text-black hover:text-orange-500 transition-colors"
            >
              Solutions
            </Link>
          )}
          <Link href={contactHref} onClick={(e) => handleSmoothScroll(e, "contact-section")}>
            <Button className="bg-black text-white font-inter font-medium text-base px-6 py-[14px] h-[52px] rounded-lg shadow-sm hover:bg-gray-800 transition-colors">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            <Menu className="h-8 w-8 text-black" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center p-4 animate-in fade-in slide-in-from-top-full duration-300">
          <div className="absolute top-4 right-4">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Close mobile menu">
              <X className="h-8 w-8 text-black" />
            </Button>
          </div>
          <div className="flex flex-col items-center gap-8 text-2xl font-semibold">
            <Link href="/" onClick={toggleMobileMenu} className={getMobileLinkClass("/")}>
              Home
            </Link>
            <Link href="/about" onClick={toggleMobileMenu} className={getMobileLinkClass("/about")}>
              About
            </Link>
            {/* Conditionally render Solutions link in mobile menu */}
            {pathname !== "/about" && (
              <Link
                href="#solutions-section"
                onClick={(e) => handleSmoothScroll(e, "solutions-section")}
                className="text-black hover:text-orange-500 transition-colors"
              >
                Solutions
              </Link>
            )}
            <Link href={contactHref} onClick={(e) => handleSmoothScroll(e, "contact-section")}>
              <Button className="bg-black text-white font-inter font-medium text-lg px-8 py-4 h-auto rounded-lg shadow-sm hover:bg-gray-800 transition-colors">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
