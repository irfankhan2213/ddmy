'use client'

const reviews = [
  {
    id: 1,
    name: 'Marcus Vance',
    rating: 5,
    title: 'Extreme pumps and clean energy!',
    text: 'Killer Clown is a game changer. The pump is insane, and the pineapple mango flavour is ultra smooth. Zero post-workout crash or jitters.',
    product: 'Killer Clown Pre-Workout',
    productColor: '#E50914',
    date: '2 weeks ago',
  },
  {
    id: 2,
    name: 'Derek Miller',
    rating: 5,
    title: 'High quality whey isolate',
    text: 'Mixes super easily and doesn\'t cause bloating like other concentrates. The consistency is exceptionally rich. Highly recommended.',
    product: 'Whey Isolate',
    productColor: '#E50914',
    date: '1 month ago',
  },
  {
    id: 3,
    name: 'Sarah Jenkins',
    rating: 5,
    title: 'Authentic supplements, trust verified',
    text: 'Was skeptical initially, but the packaging has a scratch code to verify authenticity. Testo Pro has genuinely helped my strength and stamina.',
    product: 'Testo Pro',
    productColor: '#E50914',
    date: '3 weeks ago',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i <= rating ? 'text-amber-400 fill-current' : 'text-zinc-700 fill-current'}`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsSection() {
  const visible = reviews

  return (
    <section className="bg-white py-10 sm:py-24 border-t border-zinc-200 relative z-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-14">
          <span className="text-[#E50914] font-display text-xs tracking-[0.25em] uppercase font-bold block mb-2">
            ATHLETE ENDORSEMENTS
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-zinc-900 mb-3 uppercase tracking-wider">
            CUSTOMER REVIEWS & TASTE TEST
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <StarRating rating={5} />
            <span className="text-zinc-700 text-xs font-bold ml-1">4.9 / 5.0 VERIFIED RATING</span>
          </div>
          <p className="text-zinc-500 text-xs uppercase tracking-widest font-display">
            FROM 10,000+ VERIFIED ATHLETES WORLDWIDE
          </p>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {visible.map((review) => (
            <div
              key={review.id}
              className="bg-zinc-50 border border-zinc-200 rounded-md p-4 sm:p-7 transition-all duration-300 hover:border-[#E50914] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] flex flex-col justify-between"
            >
              <div>
                <StarRating rating={review.rating} />
                <h3 className="font-display text-base sm:text-xl text-zinc-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 tracking-wide uppercase leading-snug">
                  {review.title}
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
              
              <div className="pt-4 border-t border-zinc-200 flex items-center justify-between">
                <div>
                  <div className="font-bold text-zinc-900 text-sm flex items-center gap-1.5">
                    {review.name}
                    <svg className="w-3.5 h-3.5 text-[#E50914]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-zinc-400 text-[10px] mt-0.5 uppercase tracking-wider font-semibold">
                    {review.date} • Verified Athlete
                  </div>
                </div>
                <div className="text-[10px] font-display font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm bg-red-50 text-[#E50914] border border-red-200">
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
