'use client'
import { useState } from 'react'
import AnnouncementBar from '@/components/AnnouncementBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 4000)
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <AnnouncementBar />
      <Header />

      <div className="pt-24 max-w-[800px] mx-auto px-6 pb-20">
        {/* Breadcrumbs */}
        <div className="text-zinc-500 text-xs uppercase tracking-wider mb-8 text-center">
          <Link href="/" className="hover:text-white transition-colors">Home</Link> /{' '}
          <span className="text-white">Contact</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black uppercase text-center tracking-wide mb-4">Contact Us</h1>
        <p className="text-zinc-400 text-sm text-center max-w-md mx-auto mb-10">
          Have questions about our products, orders, or partnership opportunities? Reach out and our team will get back to you shortly.
        </p>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {/* Card 1: Headquarters */}
          <div className="bg-zinc-950/80 border border-zinc-900 rounded-xl p-6 text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#E50914]/10 text-[#E50914] flex items-center justify-center mb-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-sm tracking-wider uppercase text-white mb-1">Headquarters</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              <strong className="text-white block">PSYCHO NUTRITION</strong>
              5651 S Edmond Street<br />
              Las Vegas, NV 89118, U.S.A.
            </p>
          </div>

          {/* Card 2: Email */}
          <div className="bg-zinc-950/80 border border-zinc-900 rounded-xl p-6 text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#E50914]/10 text-[#E50914] flex items-center justify-center mb-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-sm tracking-wider uppercase text-white mb-1">Direct Email</h3>
            <a 
              href="mailto:psychonutrition@yahoo.com" 
              className="text-xs font-semibold text-zinc-300 hover:text-[#E50914] transition-colors block mt-1"
            >
              psychonutrition@yahoo.com
            </a>
            <span className="text-[10px] text-zinc-500 mt-1 block">24/7 Athlete Inquiries</span>
          </div>
        </div>

        {/* Contact Form Container */}
        <div className="border border-zinc-900 bg-zinc-900/10 rounded-2xl p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-sm text-white outline-none focus:border-[#E50914] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Your Email"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-sm text-white outline-none focus:border-[#E50914] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Phone Number</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Your Phone Number (Optional)"
                className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-sm text-white outline-none focus:border-[#E50914] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Message</label>
              <textarea
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your message here..."
                className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-sm text-white outline-none focus:border-[#E50914] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#E50914] text-white font-display text-lg py-4 rounded-sm hover:bg-red-600 active:scale-[0.99] transition-all uppercase tracking-widest shadow-[0_0_20px_rgba(229,9,20,0.4)]"
            >
              Send Message
            </button>
          </form>

          {submitted && (
            <div className="mt-6 p-4 bg-zinc-950 border border-[#00C87A]/30 rounded-lg text-sm text-[#00C87A] flex items-center gap-3 justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Thank you! Your message has been sent. We will contact you soon.
            </div>
          )}
        </div>

        {/* Contact details row */}
        <div className="mt-12 text-center text-sm text-zinc-500">
          Email us directly at:{' '}
          <a href="mailto:psychonutrition@yahoo.com" className="text-white hover:text-[#E50914] font-semibold underline decoration-zinc-700 transition-colors">
            psychonutrition@yahoo.com
          </a>
        </div>
      </div>

      <Footer />
    </main>
  )
}
