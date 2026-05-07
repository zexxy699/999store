"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import TrustBar from "@/components/trust-bar"
import FeaturedProducts from "@/components/featured-products"
import Testimonials from "@/components/testimonials"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TrustBar />
      <FeaturedProducts />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
