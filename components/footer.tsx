"use client"

const quickLinks = [
  { label: "Products", href: "#featured" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

const products = [
  { label: "Blockchain Encyclopedia", href: "/products/blockchain-encyclopedia" },
  { label: "Portfolio Design Template", href: "/products/portfolio-design" },
  { label: "Whale Wallet Tracker", href: "/products/whale-wallet-tracker" },
]

const socials = [
  { label: "X (Twitter)", href: "https://x.com" },
  { label: "Instagram", href: "https://instagram.com/the999stores" },
  { label: "Telegram", href: "https://t.me/the999store" },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black border-t border-gray-800 py-14 sm:py-16 px-4 relative overflow-hidden">
      {/* Subtle logo watermark */}
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
        <img src="/999store-logo.png" alt="" className="w-64 h-64 object-contain" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-4 group">
              <img src="/999store-logo.png" alt="999store" className="h-9 w-auto object-contain" />
              <span className="text-xl font-black text-white group-hover:text-blue-400 transition-colors">999stores</span>
            </a>
            <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-xs">
              Premium digital products for the future. Blockchain, design, and tech tools for creators and entrepreneurs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-wider mb-4">Navigate</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-2.5">
              {products.map((p) => (
                <li key={p.href}>
                  <a
                    href={p.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-medium"
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-wider mb-4">Follow Us</h4>
            <ul className="space-y-2.5">
              {socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-medium"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs sm:text-sm font-medium">
            © 2025 999stores. All Rights Reserved.
          </p>
          <p className="text-gray-600 text-xs font-medium">
            Crafted with care · Instant digital delivery
          </p>
        </div>
      </div>
    </footer>
  )
}
