'use client'
import { useState } from 'react'
import AnnouncementBar from '@/components/AnnouncementBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/data/products'
import CheckoutModal from '@/components/CheckoutModal'

export default function CartPage() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  // Let's seed with one mock item for interactive display
  const [cartItems, setCartItems] = useState([
    {
      product: products[0], // CRANK Pre-Workout 250g
      quantity: 1,
      flavor: 'Fruit Punch',
    },
    {
      product: products[2], // Whey Protein Isolate 2kg
      quantity: 1,
      flavor: 'Chocolate',
    }
  ])

  const updateQty = (index: number, newQty: number) => {
    if (newQty < 1) {
      setCartItems(cartItems.filter((_, i) => i !== index))
    } else {
      const updated = [...cartItems]
      updated[index].quantity = newQty
      setCartItems(updated)
    }
  }

  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0)
  const shippingThreshold = 999
  const freeShippingProgress = Math.min((subtotal / shippingThreshold) * 100, 100)
  const remainingForFreeShipping = Math.max(shippingThreshold - subtotal, 0)

  return (
    <main className="min-h-screen bg-black text-white">
      <AnnouncementBar />
      <Header />

      <div className="pt-24 max-w-[1000px] mx-auto px-6 pb-20">
        <h1 className="text-4xl font-black uppercase tracking-tight mb-8">Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 border border-zinc-900 rounded-2xl">
            <svg className="w-16 h-16 text-zinc-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <h2 className="text-xl font-bold uppercase mb-2">Your Cart is Empty</h2>
            <p className="text-zinc-500 text-sm mb-6">Looks like you haven&apos;t added anything to your cart yet.</p>
            <Link href="/collections/shop-all" className="inline-block bg-[#C9A84C] text-black font-extrabold px-8 py-3 rounded uppercase tracking-wider hover:bg-[#dfc06a] transition-all">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Items Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Shipping Progress */}
              <div className="p-4 border border-zinc-900 bg-zinc-900/10 rounded-xl">
                <div className="text-sm font-bold mb-2 flex items-center justify-between">
                  <span>
                    {remainingForFreeShipping > 0
                      ? `Spend ₹${remainingForFreeShipping} more for Free Shipping`
                      : '🎉 You qualify for Free Shipping!'}
                  </span>
                  <span className="text-zinc-400 text-xs">₹{subtotal} / ₹999</span>
                </div>
                <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-[#00C87A] transition-all duration-500" style={{ width: `${freeShippingProgress}%` }} />
                </div>
              </div>

              {/* Items List */}
              <div className="border border-zinc-900 rounded-2xl overflow-hidden bg-zinc-900/10">
                {cartItems.map((item, index) => (
                  <div key={`${item.product.id}-${index}`} className="flex items-center gap-4 p-6 border-b border-zinc-900 last:border-b-0">
                    {/* Item Image */}
                    <div className="relative w-16 h-16 rounded-lg bg-zinc-950 flex items-center justify-center border border-zinc-800 flex-shrink-0 p-1">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>

                    {/* Item details */}
                    <div className="flex-1 min-w-0">
                      <Link href={`/products/${item.product.id}`} className="block">
                        <h3 className="font-bold text-white hover:text-[#C9A84C] transition-colors truncate">
                          {item.product.name}
                        </h3>
                      </Link>
                      <p className="text-zinc-500 text-xs mt-0.5">Flavor: {item.flavor}</p>
                      <button
                        onClick={() => updateQty(index, 0)}
                        className="text-xs text-zinc-500 hover:text-white underline mt-2"
                      >
                        Remove
                      </button>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center border border-zinc-800 rounded-lg overflow-hidden h-9 bg-zinc-950 flex-shrink-0">
                      <button
                        onClick={() => updateQty(index, item.quantity - 1)}
                        className="w-8 text-sm hover:bg-zinc-900 transition-colors border-r border-zinc-800"
                      >
                        -
                      </button>
                      <span className="w-10 text-center font-bold text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQty(index, item.quantity + 1)}
                        className="w-8 text-sm hover:bg-zinc-900 transition-colors border-l border-zinc-800"
                      >
                        +
                      </button>
                    </div>

                    {/* Item total price */}
                    <div className="text-right font-extrabold text-sm flex-shrink-0 min-w-[70px]">
                      ₹{item.product.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Summary Column */}
            <div>
              <div className="border border-zinc-900 bg-zinc-900/10 rounded-2xl p-6 sticky top-28">
                <h2 className="text-lg font-black uppercase tracking-wide mb-6 border-b border-zinc-900 pb-3">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm text-zinc-400">
                    <span>Subtotal</span>
                    <span className="font-bold text-white">₹{subtotal} INR</span>
                  </div>
                  <div className="flex justify-between text-sm text-zinc-400">
                    <span>Shipping</span>
                    <span className="font-bold text-white">
                      {subtotal >= shippingThreshold ? 'FREE' : '₹99 INR'}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-zinc-400">
                    <span>Taxes</span>
                    <span className="font-bold text-white">Calculated at checkout</span>
                  </div>
                </div>

                <div className="border-t border-zinc-900 pt-4 mb-8 flex justify-between">
                  <span className="font-bold text-base uppercase">Total</span>
                  <div className="text-right">
                    <span className="font-black text-xl text-[#C9A84C]">
                      ₹{subtotal >= shippingThreshold ? subtotal : subtotal + 99} INR
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setIsCheckoutOpen(true)}
                  className="w-full bg-[#C9A84C] text-black font-extrabold text-sm py-4 rounded-xl hover:bg-[#dfc06a] active:scale-[0.99] transition-all uppercase tracking-wider mb-3"
                >
                  Proceed to Checkout
                </button>

                <Link href="/collections/shop-all" className="block text-center text-xs text-zinc-500 hover:text-white underline mt-4">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
        cartItems={cartItems}
        subtotal={subtotal}
        shipping={subtotal >= shippingThreshold ? 0 : 99}
      />

      <Footer />
    </main>
  )
}
