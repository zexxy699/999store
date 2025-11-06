"use client"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-200/50 animate-slide-in-down">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo with smooth hover */}
        <div className="flex items-center gap-3 group cursor-pointer transition-all duration-300">
          <img
            src="/999store-logo.png"
            alt="999store"
            className="h-10 w-10 group-hover:scale-110 transition-transform duration-300 object-contain"
          />
          <span className="text-2xl font-bold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">
            999stores
          </span>
        </div>

        {/* Navigation with smooth transitions */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#featured"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300 relative group"
          >
            Featured
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#about"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300 relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#contact"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300 relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>

        {/* Mobile hamburger menu and shop button for mobile */}
        <div className="md:hidden flex items-center gap-4">
          <a href="#featured" className="text-blue-600 font-bold">
            Menu
          </a>
        </div>

        {/* CTA Button with premium hover */}
        <button className="px-4 md:px-6 py-2 md:py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl neon-glow-hover uppercase text-xs md:text-sm tracking-wider">
          Shop Now
        </button>
      </div>
    </header>
  )
}
