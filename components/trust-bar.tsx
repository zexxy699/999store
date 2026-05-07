"use client"

const trustItems = [
  { icon: "🔒", label: "100% Secure Payment" },
  { icon: "⚡", label: "Instant Digital Delivery" },
  { icon: "🛡️", label: "Verified Products" },
  { icon: "🌐", label: "24/7 Support" },
  { icon: "✅", label: "500+ Happy Customers" },
]

export default function TrustBar() {
  return (
    <div className="bg-blue-950 border-b border-blue-800 py-3 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-2">
          {trustItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-blue-200 text-xs sm:text-sm font-semibold whitespace-nowrap">
              <span className="text-base">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
