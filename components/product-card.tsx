"use client"

import { useState } from "react"
import Image from "next/image"

interface Product {
  id: number
  title: string
  description: string
  price: string
  type: string
  image: string
  features: string[]
  razorpayLink?: string
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

  return (
    <div
      className="relative group h-full animate-scale-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute -inset-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-2xl blur-xl transition-all duration-700 ${isHovered ? "opacity-60 blur-2xl" : "opacity-20"}`}
      ></div>

      <div className="relative glass-card p-8 h-full flex flex-col transition-all duration-500 cursor-pointer group-hover:border-blue-400/60 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]">
        {/* Product image with smooth scale animation */}
        <div className="relative mb-6 overflow-hidden rounded-lg h-48 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center group-hover:shadow-[inset_0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500">
          <Image
            src={product.image || "/placeholder.svg?height=300&width=300&query=premium digital product"}
            alt={product.title}
            width={300}
            height={300}
            className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 ease-out"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-blue-400/20 to-transparent transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
          ></div>
        </div>

        {/* Product info with smooth transitions */}
        <div className="space-y-3 flex-grow">
          <h3 className="text-2xl font-black text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
            {product.title}
          </h3>
          <p className="text-gray-700 text-base font-semibold leading-relaxed transition-all duration-300">
            {product.description}
          </p>

          {/* Price and CTA */}
          <div className="flex items-center justify-between pt-6 border-t border-blue-200 mt-auto gap-4">
            <span className="text-3xl font-black text-blue-600 transition-all duration-300 group-hover:scale-110">
              {product.price}
            </span>
            <a
              href={`/products/${productSlug}`}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-black rounded-lg transition-all shadow-lg neon-glow-hover hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] uppercase text-sm btn-premium"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
