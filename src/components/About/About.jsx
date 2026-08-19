import React from 'react';
import i1 from '../../assets/villaparadisojamaica/villaparadisojamaica/video/i1.webp';
import i2 from '../../assets/villaparadisojamaica/villaparadisojamaica/video/i2.webp';
import i3 from '../../assets/villaparadisojamaica/villaparadisojamaica/video/i3.webp';
import i4 from '../../assets/villaparadisojamaica/villaparadisojamaica/video/i4.webp';
import i5 from '../../assets/villaparadisojamaica/villaparadisojamaica/video/i5.webp';

const About = () => {
  return (
    <section className="w-full bg-[#0D9488] py-16 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto rounded-[2rem] md:rounded-[3rem] bg-[#0D9488] text-white">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-12">

          {/* Left Column: Exact Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center animate-fade-in-up pr-0 lg:pr-8 py-8">


            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">
              Welcome to Villa Paradiso
            </h2>

            <p className="text-white text-[15px] md:text-base leading-[1.8] mb-6 font-light">
              Welcome to Villa Paradiso, an exquisite villa in the prestigious Mammee Bay
              Estate in Ocho Rios. Renowned for its pristine white sand beaches and
              captivating attractions like Dunn's River Falls, Dolphin Cove, and Mystic
              Mountain, Ocho Rios promises an unforgettable escape for you, your family
              and friends.
            </p>

            <p className="text-white text-[15px] md:text-base leading-[1.8] mb-12 font-light">
              Featuring 8 lavish bedrooms accommodating up to 18 guests, Villa Paradiso
              offers a haven of luxury and comfort. Immerse yourself in the refreshing
              waters of our private freshwater swimming pool, or stroll along our 150 feet of
              secluded white sand beach.
            </p>

            {/* <button className="bg-[#004e66] hover:bg-[#003d52] text-white px-10 py-4 text-sm font-medium transition-all duration-300 w-fit uppercase tracking-wider">
              READ MORE
            </button> */}

          </div>

          {/* Right Column: Bento Grid Images */}
          <div className="w-full lg:w-1/2 flex gap-4 h-[400px] lg:h-[460px]">

            {/* Grid Column 1 */}
            <div className="w-1/2 flex flex-col gap-4">
              <div className="relative w-full flex-[4] rounded-3xl overflow-hidden group shadow-lg">
                <img src={i1} alt="Villa view" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-5 left-5 right-5 pointer-events-none">
                  <h4 className="text-3xl font-bold text-white mb-1">150ft</h4>
                  <p className="text-white/90 text-xs font-medium leading-tight">
                    Of pristine white <br /> <span className="text-blue-300 font-bold">sand beach</span>
                  </p>
                </div>
              </div>

              <div className="relative w-full flex-[6] rounded-3xl overflow-hidden group shadow-lg">
                <img src={i2} alt="Villa view" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-5 left-5 right-5 pointer-events-none">
                  <h4 className="text-3xl font-bold text-white mb-1">100%</h4>
                  <p className="text-white/90 text-xs font-medium leading-tight">
                    Private and <br /> <span className="text-blue-300 font-bold">secluded</span> escape
                  </p>
                </div>
              </div>
            </div>

            {/* Grid Column 2 */}
            <div className="w-1/2 flex flex-col gap-4">
              <div className="relative w-full flex-[3] rounded-3xl overflow-hidden group shadow-lg">
                <img src={i3} alt="Villa view" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                  <h4 className="text-2xl font-bold text-white mb-1">8</h4>
                  <p className="text-white/90 text-[10px] font-medium leading-tight">
                    Lavish <span className="text-blue-300 font-bold">bedrooms</span>
                  </p>
                </div>
              </div>

              <div className="relative w-full flex-[5] rounded-3xl overflow-hidden group shadow-lg">
                <img src={i4} alt="Villa view" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-5 left-5 right-5 pointer-events-none">
                  <h4 className="text-3xl font-bold text-white mb-1">Pool</h4>
                  <p className="text-white/90 text-xs font-medium leading-tight">
                    Private freshwater <br /> <span className="text-blue-300 font-bold">swimming</span>
                  </p>
                </div>
              </div>

              <div className="relative w-full flex-[3] rounded-3xl overflow-hidden group shadow-lg">
                <img src={i5} alt="Villa view" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                  <h4 className="text-2xl font-bold text-white mb-1">18</h4>
                  <p className="text-white/90 text-[10px] font-medium leading-tight">
                    Guests can be <br /> <span className="text-blue-300 font-bold">accommodated</span>
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
