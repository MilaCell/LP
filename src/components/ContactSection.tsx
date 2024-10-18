import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DiagonalDivisionTopLeft } from './DiagonalSvg';
import { ButtonCTA } from './ButtonCTA';

const ContactSection: React.FC = () => (
  <section id="Contact" className="bg-[#fe090a] w-full flex flex-col justify-center items-center relative overflow-hidden">
    <DiagonalDivisionTopLeft />
    <div className="text-center relative py-20 px-4 max-w-7xl flex flex-col justify-center w-full items-center">
      <div className='absolute bottom-[85%] md:bottom-[70%] left-0 right-0 flex items-center justify-center'>        
        <h2
          className="inline-block text-[5rem] sm:text-[10rem] md:text-[14rem] font-bold mb-4 uppercase font-['Roboto_Condensed']"
          style={{
            color: '#69696900',
            WebkitTextStrokeWidth: '2px',
            WebkitTextStrokeColor: '#00000037',
            lineHeight: '1',
          }}
        >
          Contato
        </h2>
      </div>
      <div className='relative z-10 mb-8'>      
        <h3
          className="text-4xl sm:text-7xl font-bold mb-6 text-white font-['Roboto_Condensed']"
          style={{
            letterSpacing: '-0.15rem',
            textTransform: 'uppercase'
          }}
        >
          Faça agora seu Orçamento!
        </h3>
        <p className="text-xl sm:text-3xl text-white mb-8">
          Estamos prontos para atender você e resolver seus problemas eletrônicos.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8">
        <div className="w-[85%] md:w-1/2 relative h-[300px] md:h-[400px] -skew-x-12 bg-black overflow-hidden">
          <Image
            src="/images/atendimento.webp"
            alt="Técnico pronto para atender"
            fill
            className="object-cover skew-x-12 scale-125"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col ">
          <ButtonCTA />
            
          <p className="mt-4 text-white text-lg text-left">
            Atendimento rápido e eficiente!
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;