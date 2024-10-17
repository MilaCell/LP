import React from 'react';
import Navbar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PlansSection from '../components/Plans';
import PortfolioSection from '../components/PortfolioSection';
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
      {/* <div className='w-full flex justify-center'>  
        <PlansSection />
      </div>
      <div className='w-full flex justify-center'>
        <PortfolioSection />
      </div>
      <div className='w-full flex justify-center'>
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
