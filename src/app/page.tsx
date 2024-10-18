import React from 'react';
import Navbar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import Services from '../components/Services';
import WhyMeSection from '../components/WhyMeSection';
import Footer from '../components/Footer';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import SupportSection from '@/components/SupportSection';
import {DiagonalDivisionTopLeft} from '@/components/DiagonalSvg';
import LocationSection from '@/components/LocationSection';
import MovingInstagramText from '@/components/MovingInstagramText';
const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />

      <div className='w-full flex justify-center'>  
        <AboutSection />
      </div>
      <div className="w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1921.875 229.437"
        preserveAspectRatio="none"
        className="w-full h-[150px]"
      >
        <polygon fill="#000" points="0,229.437 1921.875,0 1921.875,229.437" />
      </svg>
    </div>
      <div className='w-full flex justify-center'>  
        <Services />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1921.875 229.437"
        preserveAspectRatio="none"
        className="w-full h-[150px]"
      >
        {/* A parte de cima é transparente, a parte de baixo é preta */}
        <polygon fill="#000" points="0,229.437 1921.875,0 1921.875,229.437" />
      </svg>
      <div className='w-full flex justify-center'>
        <WhyMeSection />
      </div>
      {/* <div className='w-full flex justify-center'>
        <TestimonialsSection />
      </div> */}
      <div className='w-full flex justify-center'>
        <ContactSection />
      </div>
      <div className='w-full flex justify-center'>
        <LocationSection />
      </div>
      {/* <SupportSection/> */}
      <MovingInstagramText />
      <div className="elfsight-app-3ca6cf19-e8fa-454d-935e-51bcdee5897c" data-elfsight-app-lazy></div>
      
      <Footer />
    </div>
  );
};

export default Home;
