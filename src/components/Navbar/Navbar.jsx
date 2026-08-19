import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import logo from '../../assets/logo2.png'; // Make sure this path is correct

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { title: 'HOME', href: '#' },
    { title: 'ABOUT US', href: '#' },
    {
      title: 'VILLA',
      href: '#',
      subLinks: [
        { title: 'RATES & AVAILABILITY', href: '#' },
        { title: 'ACTIVITIES', href: '#' },
        { title: 'REVIEWS', href: '#' },
        { title: 'GALLERY', href: '#' },
      ]
    },
    {
      title: 'SPECIAL PACKAGES',
      href: '#',
      subLinks: [
        { title: 'KOSHER VACATION RENTALS', href: '#' },
        { title: 'RETREAT PACKAGES AT VILLA PARADISO', href: '#' },
        { title: 'WEDDINGS', href: '#' },
      ]
    },
    { title: "FAQ'S", href: '#' },
    { title: "BLOG'S", href: '#' },
    { title: 'CONTACT US', href: '#' },
  ];

  const toggleMobileDropdown = (title) => {
    setOpenMobileDropdown(openMobileDropdown === title ? null : title);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled
        ? 'py-2 bg-[#edfcfc]/95 backdrop-blur-xl shadow-sm border-b border-black/5'
        : 'py-3 bg-[#edfcfc]'
        }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 flex justify-between items-center relative z-[101]">
        {/* Logo area */}
        <div className="flex-shrink-0">
          <a href="#">
            <img
              src={logo}
              alt="Villa Paradiso Logo"
              className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-4 xl:gap-6">
            {navLinks.map((link, index) => (
              <li key={index} className="group relative">
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-[13px] font-bold text-text-primary/90 hover:text-accent transition-colors duration-300 py-6 tracking-wide uppercase"
                >
                  {link.title}
                  {link.subLinks && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
                </a>

                {/* Desktop Dropdown */}
                {link.subLinks && (
                  <div className="absolute left-0 top-[100%] w-64 bg-white shadow-xl rounded-b-lg border-t-2 border-accent opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    {/* Small triangle pointer */}
                    <div className="absolute -top-[10px] left-6 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent border-b-white"></div>
                    <ul className="py-2 flex flex-col">
                      {link.subLinks.map((sublink, subIndex) => (
                        <li key={subIndex} className="border-b border-gray-100 last:border-0">
                          <a
                            href={sublink.href}
                            className="block px-6 py-3.5 text-[12px] font-bold text-gray-700 hover:bg-gray-50 hover:text-accent transition-colors duration-200 uppercase tracking-wide"
                          >
                            {sublink.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden lg:block">
          <button className="bg-primary text-white px-7 py-3 rounded-full font-bold text-[13px] transition-all duration-300 shadow-md border border-transparent hover:bg-accent hover:-translate-y-0.5 hover:shadow-lg uppercase tracking-wide">
            Book Now
          </button>
        </div>

        {/* Mobile Menu Toggle Hamburger */}
        <div
          className="block lg:hidden cursor-pointer z-[1001]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`block h-[2px] w-full bg-primary rounded-sm transition-all duration-300 origin-left ${isMobileMenuOpen ? 'rotate-45 translate-x-[2px] -translate-y-[1px]' : ''}`}></span>
            <span className={`block h-[2px] w-full bg-primary rounded-sm transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-[2px] w-full bg-primary rounded-sm transition-all duration-300 origin-left ${isMobileMenuOpen ? '-rotate-45 translate-x-[2px] translate-y-[1px]' : ''}`}></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-[100dvh] bg-brand-beige/95 backdrop-blur-xl pt-24 pb-8 px-6 md:px-12 transition-transform duration-500 ease-in-out z-[90] overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <ul className="flex flex-col gap-2">
          {navLinks.map((link, index) => (
            <li key={index} className="flex flex-col">
              <div className="flex justify-between items-center border-b border-gray-300/50">
                <a
                  href={link.href}
                  className="block py-4 text-[15px] font-bold text-text-primary hover:text-accent transition-colors duration-300 uppercase tracking-wide flex-1"
                  onClick={(e) => {
                    if (link.subLinks) {
                      e.preventDefault();
                      toggleMobileDropdown(link.title);
                    } else {
                      setIsMobileMenuOpen(false);
                    }
                  }}
                >
                  {link.title}
                </a>
                {link.subLinks && (
                  <button
                    className="p-4"
                    onClick={() => toggleMobileDropdown(link.title)}
                  >
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openMobileDropdown === link.title ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>

              {/* Mobile Dropdown items */}
              {link.subLinks && (
                <div
                  className={`overflow-hidden transition-all duration-300 bg-white/50 rounded-b-lg ${openMobileDropdown === link.title ? 'max-h-96 opacity-100 mb-2' : 'max-h-0 opacity-0'
                    }`}
                >
                  <ul className="flex flex-col py-2">
                    {link.subLinks.map((sublink, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={sublink.href}
                          className="block px-6 py-3 text-[13px] font-bold text-gray-700 hover:text-accent transition-colors duration-200 uppercase tracking-wide"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sublink.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
          <li className="mt-6">
            <button
              className="bg-primary text-white px-7 py-4 rounded-full font-bold text-[14px] transition-all duration-300 shadow-md hover:bg-accent w-full uppercase tracking-wider"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Now
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;