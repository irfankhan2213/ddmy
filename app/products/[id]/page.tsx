'use client'
import { useState, useMemo } from 'react'
import AnnouncementBar from '@/components/AnnouncementBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { products, Product } from '@/data/products'
import Link from 'next/link'
import Image from 'next/image'
import CheckoutModal from '@/components/CheckoutModal'

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const productId = params.id
  const product = useMemo(() => products.find(p => p.id === productId), [productId])

  const [selectedFlavor, setSelectedFlavor] = useState<string>(
    product?.flavors?.[0] || 'Default'
  )
  const [purchaseOption, setPurchaseOption] = useState<'one-time' | 'subscribe'>('one-time')
  const [quantity, setQuantity] = useState(1)
  const [cartMessage, setCartMessage] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  if (!product) {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col justify-between">
        <AnnouncementBar />
        <Header />
        <div className="pt-32 text-center py-20">
          <h1 className="text-3xl font-black uppercase">Product Not Found</h1>
          <p className="text-zinc-500 mt-2">The product you are looking for does not exist.</p>
          <Link href="/collections/shop-all" className="mt-6 inline-block bg-white text-black px-6 py-3 font-bold rounded">
            Back to Shop
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  // Calculate prices
  const priceOneTime = product.price
  const priceSubscribe = Math.round(product.price * 0.9) // 10% discount for subscription
  const discountPercent = product.salePrice && product.salePrice > product.price
    ? Math.round(((product.salePrice - product.price) / product.salePrice) * 100)
    : 0

  const handleAddToCart = () => {
    setCartMessage(true)
    setTimeout(() => setCartMessage(false), 3000)
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <AnnouncementBar />
      <Header />

      <div className="pt-24 max-w-[1400px] mx-auto px-6 pb-20">
        {/* Breadcrumbs */}
        <div className="text-zinc-500 text-xs uppercase tracking-wider mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link> /{' '}
          <Link href={`/collections/shop-all`} className="hover:text-white transition-colors">Products</Link> /{' '}
          <span className="text-white">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Product Image Representation */}
          <div className="relative">
            <div
              className="w-full aspect-square rounded-2xl flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-zinc-950 to-black border border-zinc-800 p-8"
            >
              {/* Custom ambient blur bg */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none blur-3xl"
                style={{ background: `radial-gradient(circle, ${product.accent} 0%, transparent 70%)` }}
              />

              <div className="relative w-full h-[80%] flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
                />
              </div>
              <h2 className="text-3xl font-black mt-6 tracking-wider uppercase" style={{ color: product.accent }}>
                {product.name}
              </h2>
            </div>
          </div>

          {/* Right Column - Product Purchase Interface */}
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tight mb-4">{product.name}</h1>

            <div className="flex items-center gap-4 mb-3">
              <span className="text-2xl font-black text-white">₹{priceOneTime} INR</span>
              {product.salePrice && product.salePrice > product.price && (
                <>
                  <span className="text-zinc-500 line-through">₹{product.salePrice} INR</span>
                  <span className="text-[#C9A84C] text-xs font-bold px-2 py-0.5 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded">
                    {discountPercent}% off
                  </span>
                </>
              )}
            </div>

            <p className="text-xs text-zinc-500 leading-relaxed mb-6">
              Pay in interest-free installments with <span className="font-extrabold text-indigo-400">Simpl</span> or <span className="font-extrabold text-green-400">LazyPay</span> at checkout.
            </p>

            {/* Stars */}
            <div className="flex items-center gap-2 mb-6 border-b border-zinc-900 pb-6">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <span className="text-xs text-zinc-400 font-bold">{product.reviewCount} reviews</span>
            </div>

            {/* Stock Level Alert */}
            <div className="mb-6">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2 text-[#00C87A]">
                <span>Stock Adequate!</span>
                <span>Ready to ship</span>
              </div>
              <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-[#00C87A] w-[95%]" />
              </div>
            </div>

            {/* Flavor Swatches */}
            {product.flavors && product.flavors.length > 0 && (
              <div className="mb-6">
                <div className="text-sm font-bold text-zinc-300 mb-3">
                  Flavor: <span className="text-white">{selectedFlavor}</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.flavors.map(flavor => (
                    <button
                      key={flavor}
                      onClick={() => setSelectedFlavor(flavor)}
                      className={`px-4 py-2 border text-sm rounded-full font-semibold transition-all ${
                        selectedFlavor === flavor
                          ? 'border-[#C9A84C] text-[#C9A84C] bg-[#C9A84C]/5'
                          : 'border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'
                      }`}
                    >
                      {flavor}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Purchase Options */}
            <div className="space-y-4 mb-6">
              <div className="text-sm font-bold text-zinc-300">Purchase Options</div>

              {/* One Time */}
              <label
                onClick={() => setPurchaseOption('one-time')}
                className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-all ${
                  purchaseOption === 'one-time'
                    ? 'border-[#C9A84C] bg-[#C9A84C]/5'
                    : 'border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    purchaseOption === 'one-time' ? 'border-[#C9A84C]' : 'border-zinc-700'
                  }`}>
                    {purchaseOption === 'one-time' && <div className="w-2.5 h-2.5 rounded-full bg-[#C9A84C]" />}
                  </div>
                  <span className="font-bold text-sm text-white">One Time Purchase</span>
                </div>
                <span className="font-bold text-sm text-white">₹{priceOneTime}</span>
              </label>

              {/* Subscription */}
              <label
                onClick={() => setPurchaseOption('subscribe')}
                className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-all ${
                  purchaseOption === 'subscribe'
                    ? 'border-[#C9A84C] bg-[#C9A84C]/5'
                    : 'border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    purchaseOption === 'subscribe' ? 'border-[#C9A84C]' : 'border-zinc-700'
                  }`}>
                    {purchaseOption === 'subscribe' && <div className="w-2.5 h-2.5 rounded-full bg-[#C9A84C]" />}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-white flex items-center gap-2">
                      Subscribe and Save
                      <span className="bg-[#00C87A]/25 text-[#00C87A] text-[9px] font-black px-1.5 py-0.5 rounded">
                        SAVE 10%
                      </span>
                    </span>
                    <span className="text-zinc-500 text-xs mt-0.5">Delivered every 30 days automatically</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-bold text-sm text-[#00C87A]">₹{priceSubscribe}</span>
                  <span className="text-zinc-500 text-xs line-through block mt-0.5">₹{priceOneTime}</span>
                </div>
              </label>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-bold text-zinc-300">Quantity</span>
              <div className="flex items-center border border-zinc-800 rounded-lg overflow-hidden h-11 bg-zinc-950">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 text-lg hover:bg-zinc-900 transition-colors border-r border-zinc-800"
                >
                  -
                </button>
                <span className="w-12 text-center font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 text-lg hover:bg-zinc-900 transition-colors border-l border-zinc-800"
                >
                  +
                </button>
              </div>
            </div>

            {/* Purchase Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 btn-gold text-black font-extrabold text-sm sm:text-base py-4 rounded-xl hover:shadow-[0_0_25px_rgba(201,168,76,0.5)] active:scale-[0.99] transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to Cart
              </button>
              
              <button
                onClick={() => setIsCheckoutOpen(true)}
                className="flex-1 bg-[#25D366] text-white font-extrabold text-sm sm:text-base py-4 rounded-xl hover:bg-[#20bd5a] active:scale-[0.99] transition-all flex items-center justify-center gap-2 uppercase tracking-wider shadow-[0_0_15px_rgba(37,211,102,0.3)]"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Buy via WhatsApp
              </button>
            </div>

            {cartMessage && (
              <div className="mt-4 p-3 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-[#00C87A] flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Item added to cart successfully!
              </div>
            )}
          </div>
        </div>

        {/* Product Features Section */}
        {product.features && product.features.length > 0 && (
          <div className="mt-16 pt-16 border-t border-zinc-900">
            <h3 className="text-xl font-bold uppercase tracking-wide mb-6">Product Details & Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.features.map((feature, i) => (
                <div key={i} className="flex gap-3 items-start border border-zinc-800 p-4 rounded-lg bg-zinc-900/10">
                  <span className="text-[#C9A84C] text-lg font-bold">✓</span>
                  <span className="text-zinc-300 text-sm leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={[{
          product: product,
          quantity: quantity,
          flavor: selectedFlavor
        }]}
        subtotal={purchaseOption === 'subscribe' ? Math.round(product.price * 0.9) * quantity : product.price * quantity}
        shipping={0} // Just assume free shipping for single product buy now for simplicity, or we can calculate it
      />

      <Footer />
    </main>
  )
}
