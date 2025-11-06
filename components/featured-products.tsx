"use client"
import ProductCard from "./product-card"

const products = [
  {
    id: 1,
    title: "Blockchain Encyclopedia",
    description: "Master blockchain from zero to pro. Learn, invest, and build in the crypto space.",
    price: "₹999",
    type: "Digital Download (PDF)",
    image: "/blockchain-ebook-cryptocurrency.jpg",
    features: ["10+ Chapters", "Case Studies", "Trading Guides"],
    razorpayLink: "https://rzp.io/i/pl_RVFnbIIu2zWlnY",
  },
  {
    id: 2,
    title: "Portfolio Design for Developers & Businessmen",
    description: "Build your online brand with this sleek, modern portfolio layout.",
    price: "₹999",
    type: "Digital Template (ZIP)",
    image: "/portfolio-website-design-template.jpg",
    features: ["Responsive Design", "Customizable", "Modern UI"],
    razorpayLink: "https://rzp.io/i/pl_RbHthnJPTC9Q8K",
  },
  {
    id: 3,
    title: "Blockchain Whale Wallet Tracker",
    description: "Track movements of major crypto whales in real-time and gain market insights.",
    price: "₹999",
    type: "Digital Tool (Link Access)",
    image: "/crypto-whale-tracker-dashboard-analytics.jpg",
    features: ["Real-time Data", "Live Alerts", "Analytics"],
    razorpayLink: "https://rzp.io/i/pl_RbHvj1",
  },
]

export default function FeaturedProducts() {
  return (
    <section id="featured" className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto mb-20">
        <div className="text-blue-600 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 inline-block px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/30">
          Premium Collection
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-950 text-balance leading-tight mt-4">
          Premium Digital Products
        </h2>
        <p className="text-gray-700 text-base sm:text-lg mt-4 max-w-2xl font-medium">
          Curated digital solutions for blockchain enthusiasts, developers, and entrepreneurs
        </p>
      </div>

      {/* Products grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-blue-500/25 rounded-full blur-3xl opacity-40 hidden lg:block"></div>
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-blue-500/25 rounded-full blur-3xl opacity-40 hidden lg:block"></div>
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-blue-600/25 rounded-full blur-3xl opacity-30 hidden lg:block"></div>
    </section>
  )
}
