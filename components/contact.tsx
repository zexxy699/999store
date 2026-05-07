"use client"

import type React from "react"
import { useState } from "react"
import { CheckCircle, Mail, MessageSquare } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({ email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((res) => setTimeout(res, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-blue-600 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 sm:mb-5 animate-slide-in-up">
          Get In Touch
        </div>

        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 text-balance animate-slide-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Have Questions? Let&apos;s Talk.
        </h2>
        <p className="text-gray-500 font-medium mb-10 sm:mb-12 animate-slide-in-up" style={{ animationDelay: "0.15s" }}>
          We typically reply within a few hours. No spam, ever.
        </p>

        {submitted ? (
          <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-2xl p-10 text-center shadow-md animate-scale-in">
            <CheckCircle size={52} className="text-green-500 mx-auto mb-5" />
            <h3 className="text-xl font-black text-gray-900 mb-2">Message Received!</h3>
            <p className="text-gray-600 font-medium mb-6">
              Thanks for reaching out. We&apos;ll get back to you at <strong>{formData.email}</strong> shortly.
            </p>
            <button
              onClick={() => { setSubmitted(false); setFormData({ email: "", message: "" }) }}
              className="text-blue-600 font-bold text-sm hover:text-blue-700 underline underline-offset-2"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-blue-50 to-white border border-blue-200/50 rounded-2xl p-6 sm:p-8 space-y-5 shadow-md hover:shadow-xl transition-shadow duration-500 animate-scale-in"
          >
            <div>
              <label htmlFor="email" className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-gray-800 mb-2">
                <Mail size={14} className="text-blue-500" />
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-blue-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none input-smooth text-sm sm:text-base"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-gray-800 mb-2">
                <MessageSquare size={14} className="text-blue-500" />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-white border border-blue-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none input-smooth resize-none text-sm sm:text-base"
                placeholder="Your question or message..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 disabled:from-gray-400 disabled:to-gray-400 text-white font-black rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl btn-premium uppercase tracking-wider text-sm"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>

            <p className="text-center text-xs text-gray-400 font-medium">
              Or reach us directly at{" "}
              <a href="https://t.me/the999store" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold hover:text-blue-600">
                Telegram
              </a>
              {" "}·{" "}
              <a href="https://instagram.com/the999stores" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold hover:text-blue-600">
                Instagram
              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
