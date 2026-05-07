"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Products", href: "#featured" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = () => setMobileOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-200/50 animate-slide-in-down">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group transition-all duration-300">
          <img
            src="/999store-logo.png"
            alt="999store"
            className="h-9 w-9 group-hover:scale-110 transition-transform duration-300 object-contain"
          />
          <span className="text-xl sm:text-2xl font-black text-blue-900 group-hover:text-blue-600 transition-colors duration-300">
            999stores
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300 relative group text-sm"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#featured"
          className="hidden md:inline-flex px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl neon-glow-hover uppercase text-xs tracking-wider"
        >
          Shop Now
        </a>

        {/* Mobile: hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-blue-100 px-4 pb-5 pt-3 animate-slide-in-down shadow-lg">
          <nav className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="text-gray-800 font-semibold text-base px-3 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#featured"
            onClick={handleNavClick}
            className="block w-full text-center px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-black rounded-xl uppercase text-sm tracking-wider shadow"
          >
            Shop Now
          </a>
        </div>
      )}
    </header>
  )
}
