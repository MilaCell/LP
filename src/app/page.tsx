import React from 'react';
import Navbar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import Services from '../components/Services';
import WhyMeSection from '../components/WhyMeSection';
import Footer from '../components/Footer';
import TestimonialsSection from '@/components/TestimonialsSection';
import TestSection from '@/components/TestSection';
import SupportSection from '@/components/SupportSection';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />

      <div className='w-full flex justify-center'>  
        <AboutSection />
      </div>
      {/* SVG diagonal na parte inferior da primeira section */}
      <div className="w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1921.875 229.437"
        preserveAspectRatio="none"
        className="w-full h-[150px]"
      >
        {/* A parte de cima é transparente, a parte de baixo é preta */}
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
      </div>
      <div className='w-full flex justify-center'>
        <TestSection />
      </div>
      <SupportSection/> */}
      <Footer />
    </div>
  );
};

export default Home;
