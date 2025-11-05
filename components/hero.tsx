"use client"

export default function Hero() {
  const scrollToProducts = () => {
    document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative w-full h-screen min-h-[600px] mt-16 overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fade-in"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1639762681033-6461ffad8d80?w=1920&h=1080&fit=crop")',
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80"></div>

      <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
        <img src="/999store-logo.png" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Tech background pattern */}
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

      {/* Content with staggered animations */}
      <div className="relative z-10 text-center max-w-4xl px-4">
        <div
          className="mb-6 text-blue-300 font-black tracking-widest uppercase text-sm opacity-100 animate-slide-in-down"
          style={{ animationDelay: "0.2s" }}
        >
          Next Generation Digital Store
        </div>

        <h1
          className="text-7xl md:text-8xl font-black text-white mb-8 text-balance leading-tight tracking-tight drop-shadow-lg animate-slide-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Next-Gen Digital Store
        </h1>

        <p
          className="text-2xl md:text-3xl text-white mb-12 text-balance font-black leading-relaxed drop-shadow-md animate-slide-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          Explore blockchain, tech, and design tools built for the future.
        </p>

        <button
          onClick={scrollToProducts}
          className="px-12 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-black rounded-lg transition-all text-lg shadow-2xl uppercase tracking-wider border-2 border-blue-400 neon-glow-hover animate-scale-in btn-premium"
          style={{ animationDelay: "0.8s" }}
        >
          Shop Now
        </button>
      </div>

      <div
        className="absolute top-1/4 left-10 w-40 h-40 bg-blue-400/30 rounded-full blur-3xl opacity-70 animate-float"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute bottom-1/4 right-10 w-56 h-56 bg-blue-500/25 rounded-full blur-3xl opacity-50 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
    </section>
  )
}
