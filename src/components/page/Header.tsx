"use client"

import { useEffect, useState } from "react"

export function Header() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Reveal after minimal scroll to feel responsive
      setIsVisible(window.scrollY > 8)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const visibilityClasses = isVisible
    ? "opacity-100 translate-y-0 pointer-events-auto shadow-sm"
    : "opacity-0 -translate-y-6 pointer-events-none"

  return (
    <header
      className={`sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out ${visibilityClasses}`}
      aria-hidden={!isVisible}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-light tracking-wide">Xiadi Zhai</h1>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors font-light">About</a>
          <a href="#writing" className="text-gray-600 hover:text-gray-900 transition-colors font-light">Writing</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors font-light">Contact</a>
        </nav>
      </div>
    </header>
  )
}


