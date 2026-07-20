'use client'
import { useState } from 'react'

const reviews = [
  {
    id: 1,
    name: 'Aman Sharma',
    rating: 5,
    title: 'Extreme pumps and clean energy!',
    text: 'Crank pre-workout is a game changer. The pump is insane, and the Fruit Punch flavor is actually pleasant. Zero post-workout crash or jitters.',
    product: 'CRANK Pre-Workout',
    productColor: '#f43f5e',
    date: '2 weeks ago',
  },
  {
    id: 2,
    name: 'Vikram Singh',
    rating: 5,
    title: 'High quality whey isolate',
    text: 'Mixes super easily and doesn\'t cause bloating like other concentrates. The Chocolate flavor is rich. Highly recommended.',
    product: 'Whey Isolate',
    productColor: '#C9A84C',
    date: '1 month ago',
  },
  {
    id: 3,
    name: 'Pooja Roy',
    rating: 5,
    title: 'Authentic supplements, trust verified',
    text: 'Was skeptical initially, but the packaging has a scratch code to verify authenticity. The daily vitamins and ZMA help sleep and recovery.',
    product: 'ZMA Capsules',
    productColor: '#a855f7',
    date: '3 weeks ago',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsSection() {
  const [page, setPage] = useState(0)
  const pageSize = 3
  const totalPages = Math.ceil(reviews.length / pageSize)
  const visible = reviews.slice(page * pageSize, page * pageSize + pageSize)

  return (
    <section className="bg-white py-24 border-t border-zinc-200 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-black mb-4 uppercase tracking-widest">Customer Arsenal</h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <StarRating rating={5} />
          </div>
          <p className="text-zinc-600 text-sm font-medium">from verified athletes</p>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visible.map(review => (
            <div key={review.id} className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all flex flex-col justify-between">
              <div>
                <StarRating rating={review.rating} />
                <h3 className="font-bold text-black mt-4 mb-3 text-lg leading-snug">{review.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">{review.text}</p>
              </div>
              
              <div className="pt-4 border-t border-zinc-200 flex items-center justify-between">
                <div>
                  <div className="font-bold text-black text-sm">{review.name}</div>
                  <div className="text-zinc-400 text-xs mt-1 uppercase tracking-wider">{review.date}</div>
                </div>
                <div
                  className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-sm border"
                  style={{
                    backgroundColor: review.productColor + '15',
                    color: review.productColor === '#C9A84C' ? '#b89228' : review.productColor,
                    borderColor: review.productColor + '40'
                  }}
                >
                  {review.product}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
