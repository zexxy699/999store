"use client"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-700 py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img src="/999store-logo.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/999store-logo.png" alt="999store" className="h-8 sm:h-10 w-auto object-contain" />
              <span className="text-lg sm:text-2xl font-bold text-white">999stores</span>
            </div>
            <p className="text-gray-300 max-w-sm font-medium text-sm sm:text-base">
              Premium digital products for the future. Blockchain, design, and tech tools for creators and
              entrepreneurs.
            </p>
          </div>

          <div className="flex items-start sm:items-end gap-4 sm:gap-6 justify-start sm:justify-end">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors text-base sm:text-lg font-bold"
            >
              X
            </a>
            <a
              href="https://instagram.com/the999stores"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors text-base sm:text-lg font-bold"
            >
              Instagram
            </a>
            <a
              href="https://t.me/the999store"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors text-base sm:text-lg font-bold"
            >
              Telegram
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <p className="text-center text-gray-400 text-xs sm:text-sm font-medium">
            © 999stores 2025 | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
