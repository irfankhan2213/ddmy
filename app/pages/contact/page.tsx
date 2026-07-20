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

        <h1 className="text-4xl md:text-5xl font-black uppercase text-center tracking-wide mb-4">Contact</h1>
        <p className="text-zinc-400 text-sm text-center max-w-md mx-auto mb-12">
          Have questions about our products, orders, or partnership opportunities? Reach out and our team will get back to you shortly.
        </p>

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
                  className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-sm text-white outline-none focus:border-[#C9A84C] transition-colors"
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
                  className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-sm text-white outline-none focus:border-[#C9A84C] transition-colors"
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
                className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-sm text-white outline-none focus:border-[#C9A84C] transition-colors"
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
                className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-sm text-white outline-none focus:border-[#C9A84C] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-gold text-black font-extrabold text-sm py-4 rounded-lg active:scale-[0.99] transition-all uppercase tracking-wider shadow-[0_0_15px_rgba(201,168,76,0.3)]"
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
          <a href="mailto:Contact@Nitrogennutri.com" className="text-white hover:text-[#C9A84C] font-semibold underline decoration-zinc-700 transition-colors">
            Contact@Nitrogennutri.com
          </a>
        </div>
      </div>

      <Footer />
    </main>
  )
}
