import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Amenities from './components/Amenities/Amenities';
import GalleryPreview from './components/GalleryPreview/GalleryPreview';
import Reviews from './components/Reviews/Reviews';
import Location from './components/Location/Location';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Amenities />
      <GalleryPreview />
      <Reviews />
      <Location />
      <Contact />



      <Footer />
    </>
  );
}

export default App;
