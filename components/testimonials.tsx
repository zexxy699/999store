"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Arjun Sharma",
    role: "Crypto Investor",
    avatar: "AS",
    avatarColor: "#3b82f6",
    rating: 5,
    text: "The Blockchain Encyclopedia is genuinely the best resource I've found. Went from complete beginner to confidently executing my own DeFi strategies. Worth every rupee.",
    product: "Blockchain Encyclopedia",
  },
  {
    name: "Priya Mehta",
    role: "Freelance Developer",
    avatar: "PM",
    avatarColor: "#1d4ed8",
    rating: 5,
    text: "The portfolio template saved me weeks of design work. My clients immediately noticed the upgrade. I've already landed two new projects because of the professional look.",
    product: "Portfolio Design Template",
  },
  {
    name: "Rahul Kapoor",
    role: "Day Trader",
    avatar: "RK",
    avatarColor: "#2563eb",
    rating: 5,
    text: "The Whale Wallet Tracker gives me an edge I've never had before. Seeing large wallet movements before the market reacts has completely changed how I trade.",
    product: "Whale Wallet Tracker",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 px-4 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="text-blue-600 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 inline-flex items-center gap-2">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            Customer Reviews
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 text-balance leading-tight">
            Trusted by 500+ Customers
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-4 max-w-xl mx-auto font-medium">
            Real results from real people who invested in their digital future.
          </p>

          {/* Aggregate rating */}
          <div className="mt-6 inline-flex items-center gap-3 bg-white border border-blue-100 rounded-full px-5 py-2.5 shadow-sm">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="font-black text-gray-900 text-sm">4.9 out of 5</span>
            <span className="text-gray-500 text-sm">— 500+ reviews</span>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border border-blue-100 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-5"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium flex-grow">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                  style={{ backgroundColor: t.avatarColor }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-black text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs font-medium">{t.role}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    {t.product}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
