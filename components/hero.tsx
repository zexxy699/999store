"use client"

import { Star } from "lucide-react"

export default function Hero() {
  const scrollToProducts = () => {
    document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative w-full h-screen min-h-[600px] mt-16 overflow-hidden flex items-center justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fade-in"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1639762681033-6461ffad8d80?w=1920&h=1080&fit=crop")',
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/85" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl px-4 sm:px-6">
        {/* Badge */}
        <div
          className="mb-5 sm:mb-7 inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/40 rounded-full px-4 py-2 text-blue-300 font-bold tracking-widest uppercase text-xs sm:text-sm animate-slide-in-down"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Premium Digital Products
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-5 sm:mb-7 leading-tight tracking-tight drop-shadow-lg animate-slide-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Your Edge in the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
            Digital Economy
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-base sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-medium animate-slide-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          Blockchain guides, portfolio templates, and crypto tools — everything you need to thrive in Web3. Instant delivery, all for ₹999.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 sm:mb-14 animate-scale-in"
          style={{ animationDelay: "0.8s" }}
        >
          <button
            onClick={scrollToProducts}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-black rounded-xl transition-all text-sm md:text-base shadow-2xl uppercase tracking-wider border-2 border-blue-400/50 neon-glow-hover btn-premium"
          >
            Browse Products
          </button>
          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all text-sm md:text-base border-2 border-white/30 hover:border-white/50 backdrop-blur-sm"
          >
            Learn More
          </a>
        </div>

        {/* Social proof */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10 animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          {/* Stars */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-gray-300 text-sm font-semibold">4.9/5 rating</span>
          </div>

          <div className="hidden sm:block w-px h-5 bg-white/30" />

          {/* Customers */}
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["#3b82f6", "#1d4ed8", "#60a5fa"].map((color, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-white/40 flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: color }}
                >
                  {["A", "R", "K"][i]}
                </div>
              ))}
            </div>
            <span className="text-gray-300 text-sm font-semibold">500+ customers</span>
          </div>

          <div className="hidden sm:block w-px h-5 bg-white/30" />

          {/* Instant delivery */}
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-base">⚡</span>
            <span className="text-gray-300 text-sm font-semibold">Instant delivery</span>
          </div>
        </div>
      </div>

      {/* Floating blobs */}
      <div
        className="absolute top-1/4 left-10 w-40 h-40 bg-blue-400/30 rounded-full blur-3xl opacity-70 animate-float hidden sm:block"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute bottom-1/4 right-10 w-56 h-56 bg-blue-500/25 rounded-full blur-3xl opacity-50 animate-float hidden md:block"
        style={{ animationDelay: "1s" }}
      />
    </section>
  )
}
