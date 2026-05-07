"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ChevronLeft, Check, Star, ShieldCheck, Zap, Clock } from "lucide-react"
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
    rating: number
    reviewCount: number
    badge: string
  }
> = {
  "blockchain-encyclopedia": {
    title: "Blockchain Encyclopedia",
    description: "Master blockchain from zero to pro. Learn, invest, and build in the crypto space.",
    price: "₹999",
    image: "/blockchain-ebook-cryptocurrency.jpg",
    features: [
      "10+ Comprehensive Chapters",
      "Real-World Case Studies",
      "Trading & Investment Guides",
      "Investment Strategies",
      "Smart Contract Basics",
    ],
    razorpayButtonId: "pl_RVFnbIIu2zWlnY",
    fullDescription:
      "The Blockchain Encyclopedia is your ultimate guide to understanding blockchain technology. From basic concepts to advanced implementations, this comprehensive guide covers everything you need — blockchain fundamentals, DeFi strategies, NFTs, trading psychology, and investment frameworks used by professionals.",
    rating: 4.9,
    reviewCount: 187,
    badge: "Bestseller",
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
      "Create a stunning online presence with our professional portfolio template. Designed for developers and businessmen, this template combines modern design with functionality to showcase your work effectively. Deploy in minutes — no design skills needed.",
    rating: 4.8,
    reviewCount: 143,
    badge: "Popular",
  },
  "whale-wallet-tracker": {
    title: "Blockchain Whale Wallet Tracker",
    description: "Track movements of major crypto whales in real-time and gain market insights.",
    price: "₹999",
    image: "/crypto-whale-tracker-dashboard-analytics.jpg",
    features: [
      "Real-time Wallet Tracking",
      "Live Transaction Alerts",
      "Advanced Analytics Dashboard",
      "Market Movement Insights",
      "24/7 Automated Monitoring",
    ],
    razorpayButtonId: "pl_RbHvjnMIvII0RM",
    fullDescription:
      "Monitor major cryptocurrency whale movements in real-time. Get instant alerts on large transactions and gain valuable market insights to make informed trading decisions before the crowd reacts. Access the tool immediately after purchase.",
    rating: 4.9,
    reviewCount: 98,
    badge: "New",
  },
}

const trustBadges = [
  { icon: ShieldCheck, label: "Secure Payment" },
  { icon: Zap, label: "Instant Access" },
  { icon: Clock, label: "24/7 Support" },
]

export default function ProductDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  const product = productData[slug]

  useEffect(() => {
    if (!product?.razorpayButtonId) return

    const existingScript = document.getElementById("razorpay-script")
    if (existingScript) existingScript.remove()

    const formElement = document.getElementById("razorpay-form")
    if (!formElement) return

    formElement.innerHTML = ""

    const form = document.createElement("form")
    const script = document.createElement("script")
    script.id = "razorpay-script"
    script.src = "https://checkout.razorpay.com/v1/payment-button.js"
    script.async = true
    script.setAttribute("data-payment_button_id", product.razorpayButtonId)

    form.appendChild(script)
    formElement.appendChild(form)
  }, [product?.razorpayButtonId, slug])

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-3xl font-black text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-700 font-bold">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 pt-24 pb-6">
        <Link
          href="/#featured"
          className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-bold text-sm group"
        >
          <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Products
        </Link>
      </div>

      <main className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — Image */}
          <div className="sticky top-24">
            {/* Badge */}
            {product.badge && (
              <div className="mb-3">
                <span className="text-xs font-black px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white uppercase tracking-wider">
                  {product.badge}
                </span>
              </div>
            )}

            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50 shadow-xl border border-blue-100">
              <Image
                src={product.image || "/placeholder.svg?height=600&width=600"}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Trust badges below image */}
            <div className="mt-5 grid grid-cols-3 gap-3">
              {trustBadges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1.5 bg-blue-50 border border-blue-100 rounded-xl py-3 px-2"
                >
                  <Icon size={18} className="text-blue-600" />
                  <span className="text-xs font-bold text-gray-700 text-center">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Info & Payment */}
          <div className="flex flex-col gap-7">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-200"}
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-gray-600">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Title & Price */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 mb-3 leading-tight">{product.title}</h1>
              <div className="flex items-baseline gap-3">
                <p className="text-3xl font-black text-blue-600">{product.price}</p>
                <span className="text-sm text-gray-400 font-medium">one-time payment</span>
              </div>
            </div>

            {/* Descriptions */}
            <div className="space-y-2">
              <p className="text-gray-800 font-semibold text-base">{product.description}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{product.fullDescription}</p>
            </div>

            {/* Features */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
              <h3 className="text-sm font-black text-gray-900 uppercase tracking-wide mb-4">What&apos;s Included</h3>
              <ul className="space-y-2.5">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-white" strokeWidth={3} />
                    </span>
                    <span className="font-semibold text-gray-800 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Payment Section */}
            <div className="bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl p-6 sm:p-8 shadow-xl border border-blue-600/50">
              <div className="mb-5">
                <p className="text-xs font-black text-blue-200 uppercase tracking-wider mb-1">Secure Checkout</p>
                <p className="text-xl sm:text-2xl font-black text-white">Ready to Purchase?</p>
              </div>

              <div id="razorpay-form" className="bg-white rounded-xl p-4 min-h-12" />

              <div className="mt-5 flex flex-wrap gap-3 text-xs font-bold text-blue-200">
                <span>✓ Instant Access</span>
                <span>✓ Secure Payment</span>
                <span>✓ 24/7 Support</span>
              </div>
            </div>

            {/* Contact prompt */}
            <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-sm text-gray-700 font-medium">
                Questions before buying?{" "}
                <Link href="/#contact" className="text-blue-600 hover:text-blue-700 font-black">
                  Contact us
                </Link>
                {" "}— we reply fast.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
