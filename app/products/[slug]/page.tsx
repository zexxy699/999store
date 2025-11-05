"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ChevronLeft, Check } from "lucide-react"
import { useEffect } from "react"

const productData: Record<
  string,
  {
    title: string
    description: string
    price: string
    image: string
    features: string[]
    razorpayButtonId: string
    fullDescription: string
  }
> = {
  "blockchain-encyclopedia": {
    title: "Blockchain Encyclopedia",
    description: "Master blockchain from zero to pro. Learn, invest, and build in the crypto space.",
    price: "₹999",
    image: "/blockchain-ebook-cryptocurrency.jpg",
    features: [
      "10+ Comprehensive Chapters",
      "Real Case Studies",
      "Trading Guides",
      "Investment Strategies",
      "Smart Contract Basics",
    ],
    razorpayButtonId: "pl_RVFnbIIu2zWlnY",
    fullDescription:
      "The Blockchain Encyclopedia is your ultimate guide to understanding blockchain technology. From basic concepts to advanced implementations, this comprehensive guide covers everything you need to know about blockchain, cryptocurrency, and decentralized finance.",
  },
  "portfolio-design": {
    title: "Portfolio Design for Developers & Businessmen",
    description: "Build your online brand with this sleek, modern portfolio layout.",
    price: "₹999",
    image: "/portfolio-website-design-template.jpg",
    features: [
      "Fully Responsive Design",
      "Easy to Customize",
      "Modern UI/UX",
      "Mobile Optimized",
      "Professional Templates",
    ],
    razorpayButtonId: "pl_RbHthnJPTC9Q8K",
    fullDescription:
      "Create a stunning online presence with our professional portfolio template. Designed for developers and businessmen, this template combines modern design with functionality to showcase your work effectively.",
  },
  "whale-wallet-tracker": {
    title: "Blockchain Whale Wallet Tracker",
    description: "Track movements of major crypto whales in real-time and gain market insights.",
    price: "₹999",
    image: "/crypto-whale-tracker-dashboard-analytics.jpg",
    features: [
      "Real-time Wallet Tracking",
      "Live Transaction Alerts",
      "Advanced Analytics",
      "Market Insights",
      "24/7 Monitoring",
    ],
    razorpayButtonId: "pl_RbHvjnMIvII0RM",
    fullDescription:
      "Monitor major cryptocurrency whale movements in real-time. Get instant alerts on large transactions and gain valuable market insights to make informed trading decisions.",
  },
}

export default function ProductDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  const product = productData[slug]

  useEffect(() => {
    if (!product?.razorpayButtonId) return

    // Remove existing script if any
    const existingScript = document.getElementById("razorpay-script")
    if (existingScript) existingScript.remove()

    // Create form container
    const formElement = document.getElementById("razorpay-form")
    if (!formElement) return

    // Clear previous content
    formElement.innerHTML = ""

    // Create and append script
    const script = document.createElement("script")
    script.id = "razorpay-script"
    script.src = "https://checkout.razorpay.com/v1/payment-button.js"
    script.async = true
    script.setAttribute("data-payment_button_id", product.razorpayButtonId)

    formElement.appendChild(script)
  }, [product?.razorpayButtonId, slug])

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 pt-24 pb-8">
        <Link href="/#featured" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold">
          <ChevronLeft size={20} />
          Back to Products
        </Link>
      </div>

      {/* Main Product Section */}
      <main className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div>
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50 shadow-lg border-2 border-blue-200">
              <Image
                src={product.image || "/placeholder.svg?height=600&width=600&query=premium digital product"}
                alt={product.title}
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info & Payment */}
          <div className="flex flex-col gap-8">
            {/* Title & Price */}
            <div>
              <h1 className="text-5xl font-black text-gray-950 mb-4">{product.title}</h1>
              <p className="text-3xl font-black text-blue-600 mb-6">{product.price}</p>
              <p className="text-gray-700 font-bold text-lg mb-4">{product.description}</p>
              <p className="text-gray-600 text-base leading-relaxed">{product.fullDescription}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-black text-gray-950 mb-4">What's Included:</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check size={20} className="text-blue-600 flex-shrink-0 font-black" />
                    <span className="font-bold text-gray-800">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Payment Section - FIXED */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 shadow-lg border-2 border-blue-500">
              <div className="mb-6">
                <p className="text-xs font-black text-blue-100 uppercase tracking-wider mb-2">Secure Checkout</p>
                <p className="text-2xl font-black text-white">Ready to Purchase?</p>
              </div>

              <div id="razorpay-form" className="bg-white rounded-lg p-4"></div>

              <div className="mt-6 flex gap-3 text-xs font-bold text-blue-100">
                <div>✓ Instant Access</div>
                <div>✓ Secure Payment</div>
                <div>✓ 24/7 Support</div>
              </div>
            </div>

            {/* Support */}
            <div className="text-center p-4 bg-gray-100 rounded-lg border border-gray-300">
              <p className="text-sm text-gray-800 font-bold">
                Questions?{" "}
                <Link href="/#contact" className="text-blue-600 hover:text-blue-700 font-black">
                  Contact us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
