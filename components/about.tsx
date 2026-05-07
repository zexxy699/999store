"use client"

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "4.9★", label: "Average Rating" },
  { value: "₹999", label: "Flat Price" },
  { value: "24/7", label: "Instant Access" },
]

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-blue-600 font-bold tracking-widest uppercase text-xs sm:text-sm mb-5">
          About Us
        </div>

        <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 border border-blue-700/50 rounded-2xl p-8 sm:p-10 md:p-14 relative overflow-hidden">
          {/* Decorative grid */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="about-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#about-grid)" />
            </svg>
          </div>

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 text-balance leading-tight">
              Empowering Digital Creators &amp;{" "}
              <span className="text-blue-300">Blockchain Enthusiasts</span>
            </h2>

            <p className="text-base sm:text-lg text-blue-100 leading-relaxed mb-5 max-w-3xl font-medium">
              999stores is your gateway to premium digital products built for tomorrow. We curate high-end blockchain
              knowledge, modern design templates, and cutting-edge tools for developers and entrepreneurs who want to
              stay ahead of the curve.
            </p>

            <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-3xl font-medium">
              Every product is crafted with precision and delivered instantly. Whether you're diving into blockchain,
              building your portfolio, or tracking crypto markets — we have everything you need to succeed in the
              digital economy.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-10 sm:mt-14 pt-10 border-t border-blue-700/50">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-300 mb-1">{stat.value}</div>
                  <div className="text-blue-200 font-semibold text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
