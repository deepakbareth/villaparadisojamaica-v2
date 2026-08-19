import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#cef4fc] text-black pt-20 pb-12 px-6 md:px-12 lg:px-16 font-sans">
      <div className="max-w-[1440px] mx-auto">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">

          {/* Column 1: About */}
          <div className="lg:pr-8">
            <h4 className="text-lg font-bold uppercase tracking-widest mb-6 text-black">
              VILLA PARADISO
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed mb-8">
              A luxurious, fully staffed Villa situated in the gated community of Mammee Bay Estate, Ocho Rios, boasting a fresh water swimming pool & whirlpool, and 150 feet of private white sand beach.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-black/5 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-black/5 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-black/5 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-widest mb-6 text-black">
              EXPLORE
            </h4>
            <ul className="space-y-4">
              {['Rates', 'Rooms', 'Activities', 'Cuisine', 'Gallery'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-black text-sm transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-widest mb-6 text-black">
              COMPANY
            </h4>
            <ul className="space-y-4">
              {['Privacy Statement', 'Short Term Lease', 'Cancellation Policy', 'Staff', 'Contact us'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-600 hover:text-black text-sm transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-widest mb-6 text-black">
              OUR LOCATION
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1 text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Mammee Bay, Ocho Rios,<br />Jamaica
                </p>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <a href="tel:+14165616664" className="text-gray-600 hover:text-black text-sm transition-colors">
                  +1 416-561-6664
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <a href="mailto:villaparadiso@gmail.com" className="text-gray-600 hover:text-black text-sm transition-colors">
                  villaparadiso@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            Villa Paradiso - All rights reserved
          </p>
          <p className="text-gray-500 text-xs text-center md:text-right">
            Designed and Developed by <span className="text-black font-medium hover:underline transition-colors cursor-pointer"><a href="https://premiumbusinesswebsites.com" target="_blank" rel="noreferrer">Premium Business Websites</a></span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;