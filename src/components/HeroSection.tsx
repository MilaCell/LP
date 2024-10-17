import React from 'react';
import Link from 'next/link';
import { PlayIcon } from './Play';
import AnimatedPlayIcons from './AnimationPlayIcons';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden font-yorkten-slab"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/banner.jpg" // Caminho da sua imagem
          alt="Banner"
          layout="fill" // Preenche o contêiner
          objectFit="cover" // Cobre a área do contêiner
          className="filter opacity-60" // Efeitos na imagem
          priority
        />
        {/* Efeito de oval escurecido */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white via-white/70 to-transparent opacity-100" />
      </div>

      <AnimatedPlayIcons />
      <div className="relative z-[1] w-full px-4 sm:px-6 lg:px-8 py-12 md:py-24 font-['Mona_Sans_Compact',_Tahoma,_sans-serif]">
        <div 
          className="flex flex-col gap-2 md:items-start text-left opacity-100"
          style={{
            transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          <div className='mt-64 ml-16'>
            <p className="font-bold leading-7 text-4xl sm:text-9xl text-[#000] uppercase font-['Roboto_Condensed']">
              especialistas em<br/> 
              <span className="font-bold text-4xl sm:text-9xl text-[#fe090a] sm:tracking-tighter uppercase">
                ELETRÔNICOS E CELULARES
              </span>
            </p>
            <p className= "text-4xl text-black mt-4 font-['Roboto_Condensed']">Assistência em Geral, Capinha, Película e Muito Mais.</p> 
            <div className='w-[60%] flex items-center justify-center'>
              <Link href="https://wa.me/5516981841942" passHref>
                <button className="
                  inline-flex items-center justify-center
                  text-xl sm:text-3xl text-white
                  py-3 sm:py-6 px-6 hover:px-12
                  mt-4 sm:mt-6
                  bg-[#fe090a] hover:bg-black
                  hover:text-white
                  transition-all duration-300
                  -skew-x-12
                  ">
                  <span className="-skew-x-6 inline-flex items-center">
                    Contato 
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
