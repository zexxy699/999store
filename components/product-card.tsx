"use client"

import { useState } from "react"
import Image from "next/image"
import { Star } from "lucide-react"

interface Product {
  id: number
  title: string
  description: string
  price: string
  type: string
  image: string
  features: string[]
  razorpayLink?: string
  badge?: string
  rating?: number
  reviewCount?: number
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getProductSlug = (title: string): string => {
    if (title.includes("Blockchain Encyclopedia")) return "blockchain-encyclopedia"
    if (title.includes("Portfolio Design")) return "portfolio-design"
    if (title.includes("Whale Wallet")) return "whale-wallet-tracker"
    return "product"
  }

  const productSlug = getProductSlug(product.title)
  const rating = product.rating ?? 4.9
  const reviewCount = product.reviewCount ?? 120

  return (
    <div
      className="relative group h-full animate-scale-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow border */}
      <div
        className={`absolute -inset-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-2xl blur-xl transition-all duration-700 ${isHovered ? "opacity-60 blur-2xl" : "opacity-20"}`}
      />

      <div className="relative glass-card p-6 sm:p-8 h-full flex flex-col transition-all duration-500 cursor-pointer group-hover:border-blue-400/60 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]">
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-5 right-5 z-10">
            <span className="text-xs font-black px-2.5 py-1 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md uppercase tracking-wider">
              {product.badge}
            </span>
          </div>
        )}

        {/* Product image */}
        <div className="relative mb-5 overflow-hidden rounded-xl h-44 sm:h-48 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center group-hover:shadow-[inset_0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500">
          <Image
            src={product.image || "/placeholder.svg?height=300&width=300"}
            alt={product.title}
            width={300}
            height={300}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          {/* Overlay on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
          />
          {/* Type badge */}
          <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-lg">
            {product.type}
          </div>
        </div>

        {/* Product info */}
        <div className="space-y-3 flex-grow flex flex-col">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={13}
                  className={i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-200"}
                />
              ))}
            </div>
            <span className="text-xs font-bold text-gray-600">{rating} ({reviewCount})</span>
          </div>

          <h3 className="text-lg sm:text-xl font-black text-gray-900 transition-colors duration-300 group-hover:text-blue-600 leading-snug">
            {product.title}
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed flex-grow">
            {product.description}
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {product.features.map((f, i) => (
              <span
                key={i}
                className="text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100 rounded-full px-2.5 py-0.5"
              >
                {f}
              </span>
            ))}
          </div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between pt-5 border-t border-blue-100 mt-auto gap-2">
            <div>
              <span className="text-2xl sm:text-3xl font-black text-blue-600 transition-all duration-300 group-hover:scale-105 inline-block">
                {product.price}
              </span>
              <span className="block text-xs text-gray-400 font-medium">one-time</span>
            </div>
            <a
              href={`/products/${productSlug}`}
              className="px-5 sm:px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-black rounded-xl transition-all shadow-lg neon-glow-hover hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] uppercase text-xs sm:text-sm btn-premium whitespace-nowrap"
            >
              View &amp; Buy
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
