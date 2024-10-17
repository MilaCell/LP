'use client';
import React from 'react';
import Link from 'next/link';
import AnimatedPlayIcons from './AnimationPlayIcons';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1
      }
    }
  };

  return (
    <section
      id="Hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center border-b-2 text-white overflow-hidden font-yorkten-slab w-[100vw]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden w-[100vw]">
        {/* <Image
          src="/banner.jpg"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          className="filter opacity-60"
          priority
        /> */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white via-white/70 to-[#fe090946] opacity-100" />
      </div>

      <AnimatedPlayIcons />
      <div className="relative z-[1] w-full px-4 sm:px-6 lg:px-8 py-12 md:py-24 font-['Mona_Sans_Compact',_Tahoma,_sans-serif]">
        <motion.div 
          className="flex flex-col gap-2 md:items-start text-left opacity-100"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <div className='mt-16 sm:mt-32 md:mt-64 sm:ml-16 ml-8 max-w-[70%] sm:max-w-full'>
            <motion.p variants={textVariants} className="font-bold leading-7 text-4xl sm:text-5xl md:text-6xl lg:text-9xl text-[#000] uppercase font-['Roboto_Condensed']" style={{lineHeight: 1}}>
              especialistas em<br/> 
              <motion.span variants={textVariants} className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-9xl text-[#fe090a] sm:tracking-tighter uppercase">
                ELETRÔNICOS E CELULARES
              </motion.span>
            </motion.p>
            <motion.p variants={textVariants} className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-black mt-4 font-['Roboto_Condensed']">
              Assistência em Geral, Capinha, Película e Muito Mais.
            </motion.p> 
            <div className='w-full sm:w-[80%] md:w-[70%] lg:w-[60%] flex items-center justify-start mt-6 -skew-x-12'>
              <Link href="https://wa.me/5516981841942" passHref>
                <motion.button 
                  variants={buttonVariants}
                  className="
                    inline-flex items-center justify-center
                    text-3xl text-white
                    py-6 px-4 md:py-8 md:px-6 hover:px-12
                    mt-4 sm:mt-6
                    bg-[#fe090a] hover:bg-black
                    hover:text-white
                    transition-all duration-300
                  "
                >
                  <span className="-skew-x-6 inline-flex items-center">
                    Contato 
                  </span>
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;