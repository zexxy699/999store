"use client"

import type React from "react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({ email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      console.log("Form submitted:", formData)
      setFormData({ email: "", message: "" })
      setIsSubmitting(false)
      alert("Thank you! We received your message.")
    }, 1000)
  }

  return (
    <section id="contact" className="py-12 sm:py-20 px-4 bg-white animate-fade-in">
      <div className="max-w-2xl mx-auto">
        <div className="text-blue-600 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 sm:mb-6 animate-slide-in-up">
          Get In Touch
        </div>

        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-8 sm:mb-12 text-balance animate-slide-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Have Questions? Let's Talk.
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-blue-50 to-white border border-blue-200/50 rounded-2xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 shadow-lg transition-all duration-500 hover:shadow-xl animate-scale-in"
        >
          <div>
            <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-gray-900 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white border border-blue-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none input-smooth placeholder-gray-400 text-sm sm:text-base"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs sm:text-sm font-bold text-gray-900 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 bg-white border border-blue-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none input-smooth resize-none placeholder-gray-400 text-sm sm:text-base"
              placeholder="Your message here..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 disabled:from-gray-400 disabled:to-gray-400 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl btn-premium uppercase tracking-wider text-sm sm:text-base"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  )
}
