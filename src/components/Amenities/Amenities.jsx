import React from 'react';
import {
  Users,
  BedDouble,
  Bath,
  SlidersHorizontal,
  Snowflake,
  Fan,
  Crown,
  Home
} from 'lucide-react';

const Amenities = () => {
  const amenitiesList = [
    {
      icon: <Users className="w-7 h-7 text-white" strokeWidth={1.5} />,
      label: "Sleeps",
      value: "18 Guests"
    },
    {
      icon: <BedDouble className="w-7 h-7 text-white" strokeWidth={1.5} />,
      label: "Bedrooms",
      value: "Up to 8"
    },
    {
      icon: <Bath className="w-7 h-7 text-white" strokeWidth={1.5} />,
      label: "Bathrooms",
      value: "8 (All Ensuite)"
    },
    {
      icon: <SlidersHorizontal className="w-7 h-7 text-white" strokeWidth={1.5} />,
      label: "Rental Config",
      value: "5, 6, 7 or 8 Beds"
    },
    {
      icon: <Snowflake className="w-7 h-7 text-white" strokeWidth={1.5} />,
      label: "Air Conditioning",
      value: "All Bedrooms"
    },
    {
      icon: <Fan className="w-7 h-7 text-white" strokeWidth={1.5} />,
      label: "Ceiling Fans",
      value: "All Bedrooms"
    },
    {
      icon: <Crown className="w-7 h-7 text-white" strokeWidth={1.5} />,
      label: "King Beds",
      value: "4 Bedrooms"
    },
    {
      icon: <Home className="w-7 h-7 text-white" strokeWidth={1.5} />,
      label: "Property Layout",
      value: "Villa + 2-Bed Cottage"
    }
  ];

  return (
    <section className="w-full bg-[#95cfc9] py-24 px-6 md:px-12 lg:px-16 relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h3 className="text-gray-700 uppercase tracking-[0.2em] text-xs md:text-sm font-bold mb-4 flex items-center justify-center gap-2">
            Unmatched Comfort
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">
            World-Class Amenities
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#a2f2ea] to-[#0f766e] rounded-full mb-10 mx-auto"></div>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-16 lg:gap-x-12 lg:gap-y-20">
          {amenitiesList.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center group cursor-default"
            >
              {/* Icon Container with Hover Effect */}
              <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/5 group-hover:border-[#a2f2ea]/50 group-hover:shadow-[0_0_30px_rgba(0,163,224,0.15)] transition-all duration-500 relative">
                {/* Inner glowing dot on hover */}
                <div className="absolute inset-0 rounded-full bg-[#a2f2ea]/0 group-hover:bg-[#a2f2ea]/10 scale-50 group-hover:scale-100 transition-all duration-500"></div>
                <div className="relative z-10 group-hover:scale-110 group-hover:text-[#a2f2ea] transition-transform duration-500">
                  {item.icon}
                </div>
              </div>

              {/* Text Content */}
              <p className="text-gray-500 text-[11px] md:text-xs uppercase tracking-[0.15em] mb-2 font-semibold">
                {item.label}
              </p>
              <h4 className="text-white text-base md:text-lg font-medium text-center tracking-wide">
                {item.value}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Amenities;
