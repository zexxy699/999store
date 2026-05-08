"use client"

import Link from "next/link"
import { Home, ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-80 pointer-events-none" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3b82f6" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 text-center max-w-lg">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-2 mb-10 group">
          <img
            src="/999store-logo.png"
            alt="999stores"
            className="h-9 w-9 object-contain group-hover:scale-110 transition-transform duration-300"
          />
          <span className="text-xl font-black text-blue-900 group-hover:text-blue-600 transition-colors">
            999stores
          </span>
        </Link>

        {/* 404 number */}
        <div className="relative mb-4">
          <p className="text-[120px] sm:text-[160px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-blue-100 select-none">
            404
          </p>
          <div className="absolute inset-0 flex items-center justify-center">
            <Search size={40} className="text-blue-400 opacity-80" />
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
          Page Not Found
        </h1>
        <p className="text-gray-500 font-medium text-base sm:text-lg mb-10 leading-relaxed">
          Looks like this page doesn't exist — or was moved. Head back and explore our digital products.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-black rounded-xl transition-all shadow-lg hover:shadow-xl uppercase tracking-wider text-sm btn-premium"
          >
            <Home size={16} />
            Back to Home
          </Link>
          <Link
            href="/#featured"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border-2 border-blue-200 hover:border-blue-400 text-blue-700 font-bold rounded-xl transition-all text-sm hover:bg-blue-50"
          >
            <ArrowLeft size={16} />
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  )
}
