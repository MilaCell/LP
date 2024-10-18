"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Script from 'next/script';

const InstagramWidget = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <div className="elfsight-app-3ca6cf19-e8fa-454d-935e-51bcdee5897c" data-elfsight-app-lazy></div>
      <Script src="https://apps.elfsight.com/p/platform.js" strategy="lazyOnload" async />
    </>
  );
};

const MovingInstagramText: React.FC = () => {
  const texts = Array(16).fill("SIGA NO INSTAGRAM");

  const containerVariants = {
    animate: {
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 600,
          ease: "linear"
        }
      }
    }
  };

  return (
    <div className='max-w-[100vw] w-full overflow-hidden'>
      <div className="bg-[#fe090a] w-full flex flex-col justify-center items-center relative overflow-hidden py-8">
        {/* Versão Desktop */}
        <motion.div 
          className="hidden md:flex items-center whitespace-nowrap"
          variants={containerVariants}
          animate="animate"
          style={{ width: "200%" }}
        >
          {texts.map((text, index) => (
            <motion.span
              key={index}
              className="mx-44 text-white text-6xl font-bold tracking-wider"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
            >
              {text}
            </motion.span>
          ))}
        </motion.div>

        {/* Versão Mobile */}
        <div className="md:hidden flex justify-center items-center">
          <span
            className="text-4xl font-bold text-white tracking-wider"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
          >
            SIGA NO INSTAGRAM
          </span>
        </div>
      </div>
      
      <InstagramWidget />
    </div>
  );
};

export default MovingInstagramText;