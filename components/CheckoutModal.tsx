'use client'
import { useState } from 'react'
import { createOrderInDb } from '@/lib/supabase/services'

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
  cartItems: any[]
  subtotal: number
  shipping: number
}

export default function CheckoutModal({ isOpen, onClose, cartItems, subtotal, shipping }: CheckoutModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!isOpen) return null

  const total = subtotal + shipping

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Record order to Supabase database
      await createOrderInDb(
        {
          customer_name: formData.name,
          customer_phone: formData.phone,
          delivery_address: formData.address,
          city: formData.city,
          pincode: formData.pincode,
          subtotal,
          shipping,
          total,
        },
        cartItems.map(item => ({
          product_id: item.product?.id,
          product_name: item.product?.name || 'Product',
          flavor: item.flavor,
          quantity: item.quantity,
          price: item.product?.price || 0,
        }))
      )
    } catch (err) {
      console.error('Order recording error:', err)
    }

    // Build the items list
    let itemsText = ''
    cartItems.forEach(item => {
      itemsText += `${item.quantity}x ${item.product.name} (Flavor: ${item.flavor}) - ₹${item.product.price * item.quantity}\n`
    })

    // Construct the full WhatsApp message
    const message = `Hello DDMY Nutrition! I would like to place an order:

📦 *ORDER DETAILS:*
${itemsText}
Subtotal: ₹${subtotal}
Shipping: ${shipping === 0 ? 'FREE' : `₹${shipping}`}
*Total Amount: ₹${total}*

📍 *SHIPPING DETAILS:*
Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}
City: ${formData.city}
Pincode: ${formData.pincode}

Please confirm my order and share payment details.`

    const whatsappNumber = '919876543210' // Replace with actual number
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    // Redirect to WhatsApp
    window.location.href = whatsappUrl
    
    // Fallback if window.location doesn't work (e.g. popups blocked, but href usually works)
    setTimeout(() => {
      setIsSubmitting(false)
      onClose()
    }, 1000)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-800 bg-zinc-900/50">
          <h2 className="text-xl font-black uppercase tracking-wider text-white">Checkout Details</h2>
          <button 
            onClick={onClose}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
            Please provide your shipping details. You will be redirected to WhatsApp to complete your order directly with our team.
          </p>

          <form id="checkout-form" onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">Full Name</label>
              <input
                required
                type="text"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C9A84C] transition-colors"
                placeholder="John Doe"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">Phone Number</label>
              <input
                required
                type="tel"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C9A84C] transition-colors"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">Delivery Address</label>
              <textarea
                required
                rows={3}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
                placeholder="123 Fitness Street, Apt 4B"
                value={formData.address}
                onChange={e => setFormData({ ...formData, address: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">City</label>
                <input
                  required
                  type="text"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C9A84C] transition-colors"
                  placeholder="Mumbai"
                  value={formData.city}
                  onChange={e => setFormData({ ...formData, city: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">Pincode</label>
                <input
                  required
                  type="text"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C9A84C] transition-colors"
                  placeholder="400001"
                  value={formData.pincode}
                  onChange={e => setFormData({ ...formData, pincode: e.target.value })}
                />
              </div>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-zinc-800 bg-zinc-900/50 flex flex-col gap-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-zinc-400">Total to Pay:</span>
            <span className="font-black text-xl text-[#C9A84C]">₹{total}</span>
          </div>
          
          <button
            type="submit"
            form="checkout-form"
            disabled={isSubmitting}
            className="w-full bg-[#25D366] text-white font-extrabold text-sm py-4 rounded-xl hover:bg-[#20bd5a] active:scale-[0.99] transition-all flex items-center justify-center gap-2 uppercase tracking-wider disabled:opacity-50 disabled:pointer-events-none"
          >
            {isSubmitting ? (
              <span className="animate-pulse">Redirecting...</span>
            ) : (
              <>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Confirm & Send via WhatsApp
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
