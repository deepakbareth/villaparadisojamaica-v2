import React, { useEffect, useState } from 'react';
import heroVideo from '../../assets/villaparadisojamaica/villaparadisojamaica/video/v1.mov';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after a slight delay
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900/40 to-slate-900/60 z-10"></div>

      {/* Content */}
      {/* <div className="relative z-20 text-center text-white px-8 max-w-[900px] flex flex-col items-center">
        <h1 className={`text-[clamp(3rem,8vw,5.5rem)] font-bold leading-[1.1] mb-6 tracking-tight opacity-0 translate-y-8 ${loaded ? 'animate-fade-up' : ''}`}>
          Escape to Paradise.
        </h1>
        <p className={`text-[clamp(1.1rem,3vw,1.35rem)] font-light leading-relaxed mb-10 max-w-[700px] text-white/90 opacity-0 translate-y-8 ${loaded ? 'animate-fade-up [animation-delay:0.2s]' : ''}`}>
          Experience the ultimate luxury at Villa Paradiso Jamaica.
          Your exclusive private beachfront retreat awaits.
        </p>
        <div className={`flex flex-col md:flex-row gap-6 opacity-0 translate-y-8 w-full md:w-auto justify-center ${loaded ? 'animate-fade-up [animation-delay:0.4s]' : ''}`}>
          <button className="bg-accent text-white px-10 py-4 rounded-full text-base font-semibold transition-all duration-300 border-2 border-accent shadow-[0_4px_14px_0_rgba(2,132,199,0.39)] hover:bg-accent-dark hover:border-accent-dark hover:-translate-y-0.5 w-full md:w-auto">
            Book Your Stay
          </button>
          <button className="bg-transparent text-white px-10 py-4 rounded-full text-base font-semibold transition-all duration-300 border-2 border-white hover:bg-white hover:text-primary hover:-translate-y-0.5 w-full md:w-auto">
            Explore The Villa
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
