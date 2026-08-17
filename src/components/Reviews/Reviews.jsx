import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const reviewsData = [
  {
    id: 1,
    name: "Lisa",
    date: "July 29 on Airbnb",
    initial: "L",
    text: "We were a group of 4 families, 4 adults and 11 kids from 11 to 17. We had an absolutely wonderful time. The staff was excellent and were able to help us with everything we needed. From excursions to braids to picky eaters, they handled it all flawlessly.",
    platform: "Airbnb",
    color: "bg-rose-100 text-rose-700"
  },
  {
    id: 2,
    name: "Jenna",
    date: "July 1 on Airbnb",
    initial: "J",
    text: "Our family of 16 traveled to Paradiso Villa in Jamaica to celebrate our parents' 50th wedding anniversary, and it exceeded every expectation. From Ronnie's warm airport welcome with cold drinks to the breathtaking views, it was perfect.",
    platform: "Airbnb",
    color: "bg-blue-100 text-blue-700"
  },
  {
    id: 3,
    name: "Nancy S.",
    date: "June 24 on Vrbo",
    initial: "N",
    text: "Our host, Anthony was very responsive to us and all of our needs. The home is beautiful. The staff were very helpful and performed all their duties professionally and efficiently. Chef Rowan prepared scrumptious meals.",
    platform: "Vrbo",
    color: "bg-teal-100 text-teal-700"
  },
  {
    id: 4,
    name: "Elege H.",
    date: "April 8 on Vrbo",
    initial: "E",
    text: "Villa Paradiso was exactly that—paradise. We traveled as a multi-generational family of 15 (ages 12-80), which is no small feat, and the trip exceeded every expectation. From the moment we landed, we were treated like royalty.",
    platform: "Vrbo",
    color: "bg-amber-100 text-amber-700"
  },
  {
    id: 5,
    name: "April",
    date: "September 16, 2023 on Airbnb",
    initial: "A",
    text: "All guests were excited from day one! The staff were friendly, responsive, and took pride making my birthday celebration the best ever. We were greeted at the door by the team and they quickly learned all our names.",
    platform: "Airbnb",
    color: "bg-purple-100 text-purple-700"
  },
  {
    id: 6,
    name: "DrMagalie P.",
    date: "August 28, 2023 on Vrbo",
    initial: "D",
    text: "Such a lovely well maintained property. I travel to Jamaica often - first time to this property and won't be my last! Staff was so friendly and hospitable. Rooms and groundspace was immaculate. Private beach is a huge plus.",
    platform: "Vrbo",
    color: "bg-emerald-100 text-emerald-700"
  }
];

const Reviews = () => {
  return (
    <section className="w-full bg-[#FDFBF7] py-24 px-6 md:px-12 lg:px-16 relative overflow-hidden">

      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#0f766e 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="max-w-[1440px] mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h3 className="text-gray-700 uppercase tracking-[0.2em] text-xs md:text-sm font-bold mb-4 flex items-center justify-center gap-2">
            Guest Testimonials
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-gray-900">
            Unforgettable Memories
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#a2f2ea] to-[#0f766e] rounded-full mb-10 mx-auto"></div>
        </div>

        {/* Masonry-style Grid for Reviews */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 lg:gap-8 space-y-6 lg:space-y-8">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="break-inside-avoid bg-white rounded-3xl p-8 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 group"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-8 text-gray-100 group-hover:text-blue-50 transition-colors duration-500">
                <Quote className="w-16 h-16 rotate-180 opacity-50" />
              </div>

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 text-[15px] leading-relaxed font-light mb-8 italic">
                  "{review.text}"
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-gray-100 mb-6"></div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${review.color}`}>
                    {review.initial}
                  </div>

                  {/* Name & Platform */}
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <h4 className="text-gray-900 font-bold text-sm">
                        {review.name}
                      </h4>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#a2f2ea]" />
                    </div>
                    <p className="text-gray-400 text-xs font-medium">
                      {review.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;
