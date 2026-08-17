import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="w-full bg-[#f8f9fa] py-24 px-6 md:px-12 lg:px-16 relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#6284A6]/5 pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        
        <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_50px_rgb(0,0,0,0.05)] overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          
          {/* Left Column: Contact Info & Text (From Screenshot) */}
          <div className="w-full lg:w-5/12 bg-[#0a1128] text-white p-10 md:p-16 flex flex-col justify-between relative overflow-hidden">
            {/* Background decorative circles */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#00A3E0]/20 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-teal-500/20 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Contact Us
              </h2>
              <div className="w-16 h-1 bg-[#00A3E0] mb-8 rounded-full"></div>
              
              <p className="text-white/80 text-[15px] leading-relaxed font-light mb-10 max-w-md">
                Dear Friends, if you have any questions or need a quotation, just fill in the below and submit them to me and I will provide you with answers as quickly as possible. If you need to speak to me please call:
              </p>
              
              {/* Highlighted Phone Number */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm mb-12 transform transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#00A3E0]/20 rounded-full flex items-center justify-center text-[#00A3E0]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-widest font-bold mb-1">Direct Line</p>
                    <a href="tel:4165616664" className="text-2xl md:text-3xl font-bold tracking-wider hover:text-[#00A3E0] transition-colors">
                      416-561-6664
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 space-y-4">
              <button className="bg-[#004e66] hover:bg-[#003d52] text-white px-10 py-4 text-sm font-bold uppercase tracking-wider transition-colors duration-300 w-full sm:w-auto shadow-md">
                CONTACT US
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full lg:w-7/12 p-10 md:p-16 lg:p-20 flex flex-col justify-center bg-white">
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h3>
              <p className="text-gray-500 text-sm">We'll get back to you within 24 hours.</p>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">First Name</label>
                  <input 
                    type="text" 
                    placeholder="John" 
                    className="w-full border-b border-gray-200 py-3 bg-transparent text-gray-800 focus:outline-none focus:border-[#00A3E0] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Doe" 
                    className="w-full border-b border-gray-200 py-3 bg-transparent text-gray-800 focus:outline-none focus:border-[#00A3E0] transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full border-b border-gray-200 py-3 bg-transparent text-gray-800 focus:outline-none focus:border-[#00A3E0] transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Your Message</label>
                <textarea 
                  rows="4"
                  placeholder="How can we help you?" 
                  className="w-full border-b border-gray-200 py-3 bg-transparent text-gray-800 focus:outline-none focus:border-[#00A3E0] transition-colors resize-none"
                ></textarea>
              </div>
              
              <button 
                type="button" 
                className="group flex items-center justify-center gap-3 bg-primary hover:bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full md:w-auto mt-4"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
