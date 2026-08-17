import React from 'react';

const Location = () => {
  return (
    <section className="w-full bg-[#fcfcfc] py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-[1440px] mx-auto">

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Column: Text Content */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-[#00A3E0] uppercase tracking-[0.2em] text-xs md:text-sm font-bold mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Find Us Here
            </h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-gray-900">
              Our Location
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00A3E0] to-[#004e66] rounded-full mb-10"></div>

            <div className="text-gray-600 text-[15px] leading-relaxed font-light flex flex-col gap-6">
              <p>
                We aim to help you and your family experience all the beauty, tranquility, and adventure that Jamaica has to offer. The Villa is located within the gated Mammee Bay Estate just five miles west of Ocho Rios and four miles east of St. Ann's Bay on the North Coast of Jamaica.
              </p>
              <p>
                Ocho Rios is a popular tourist destination and has many famous attractions such as Dunn's River Falls, Dolphin Bay and Mystic Mountain. The Villa is located directly on the beautiful Mammee Bay beachfront with its own 150-foot frontage of shimmering white sand beach.
              </p>
            </div>

            <div className="mt-10">
              <a
                href="https://maps.google.com/?q=Mammee+Bay,+Ocho+Rios,+Jamaica"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#004e66] hover:bg-[#003d52] text-white px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                Get Directions
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map */}
          <div className="w-full lg:w-1/2 relative">
            {/* Decorative background shape */}
            <div className="absolute -inset-4 bg-[#00A3E0]/5 rounded-[3rem] transform -rotate-3 z-0"></div>

            <div className="w-full h-[400px] md:h-[450px] lg:h-[500px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgb(0,0,0,0.1)] relative z-10 border border-white">
              {/* Google Maps embed pointing to Mammee Bay, Ocho Rios */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15147.242967664426!2d-77.1584984!3d18.4239845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eda47a1b020a1eb%3A0xcbbf1d5dc3e0bc93!2sMammee%20Bay%2C%20Jamaica!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                title="Villa Paradiso Location"
              ></iframe>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Location;
