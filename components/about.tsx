"use client"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-6">About Us</div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 border border-blue-700 rounded-xl p-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 text-balance">
            Empowering Digital Creators & Blockchain Enthusiasts
          </h2>

          <p className="text-lg text-blue-50 leading-relaxed font-bold">
            999stores is your gateway to premium digital products built for tomorrow. We curate high-end blockchain
            knowledge, modern design templates, and cutting-edge tools for developers and entrepreneurs who want to stay
            ahead of the curve.
          </p>

          <p className="text-lg text-blue-50 mt-6 leading-relaxed font-bold">
            Every product at 999stores is crafted with precision and delivered instantly. Whether you're diving into
            blockchain, building your portfolio, or tracking crypto markets — we have everything you need to succeed in
            the digital economy.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { label: "Products", value: "3+" },
              { label: "Price Point", value: "₹999" },
              { label: "Instant Access", value: "24/7" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-black text-blue-300">{stat.value}</div>
                <div className="text-blue-100 mt-2 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
