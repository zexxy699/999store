"use client"

import ProductCard from "./product-card"

const products = [
  {
    id: 1,
    title: "Blockchain Encyclopedia",
    description: "Master blockchain from zero to pro. Learn, invest, and build in the crypto space with this comprehensive guide.",
    price: "₹999",
    type: "PDF Download",
    image: "/blockchain-ebook-cryptocurrency.jpg",
    features: ["10+ Chapters", "Case Studies", "Trading Guides"],
    razorpayLink: "https://rzp.io/i/pl_RVFnbIIu2zWlnY",
    badge: "Bestseller",
    rating: 4.9,
    reviewCount: 187,
  },
  {
    id: 2,
    title: "Portfolio Design for Developers & Businessmen",
    description: "Build your online brand with this sleek, modern portfolio layout — ready to deploy in minutes.",
    price: "₹999",
    type: "ZIP Template",
    image: "/portfolio-website-design-template.jpg",
    features: ["Responsive Design", "Customizable", "Modern UI"],
    razorpayLink: "https://rzp.io/i/pl_RbHthnJPTC9Q8K",
    badge: "Popular",
    rating: 4.8,
    reviewCount: 143,
  },
  {
    id: 3,
    title: "Blockchain Whale Wallet Tracker",
    description: "Track movements of major crypto whales in real-time and gain market insights before the crowd.",
    price: "₹999",
    type: "Link Access",
    image: "/crypto-whale-tracker-dashboard-analytics.jpg",
    features: ["Real-time Data", "Live Alerts", "Analytics"],
    razorpayLink: "https://rzp.io/i/pl_RbHvj1",
    badge: "New",
    rating: 4.9,
    reviewCount: 98,
  },
]

export default function FeaturedProducts() {
  return (
    <section id="featured" className="py-20 sm:py-28 px-4 bg-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl opacity-60 hidden lg:block" />
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl opacity-60 hidden lg:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-14 sm:mb-16">
          <div className="text-blue-600 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 inline-block px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/30">
            Premium Collection
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-950 text-balance leading-tight mt-3">
                Premium Digital Products
              </h2>
              <p className="text-gray-600 text-base sm:text-lg mt-4 max-w-2xl font-medium">
                Curated digital solutions for blockchain enthusiasts, developers, and entrepreneurs. All at one price — ₹999.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-500 whitespace-nowrap shrink-0">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              All products in stock
            </div>
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-14 text-center py-8 px-6 bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-2xl">
          <p className="text-gray-700 font-semibold text-sm sm:text-base">
            All products are delivered <strong className="text-blue-600">instantly</strong> after payment — no waiting, no hassle.
            {" "}Questions?{" "}
            <a href="#contact" className="text-blue-600 hover:text-blue-700 font-black underline underline-offset-2">
              Reach out anytime.
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
