import React from 'react';
import AnimatedLogoGrid from './BrandIconsGrid';
import { Clock, Truck } from 'lucide-react';

const WhyMeSection: React.FC = () => {
  return (
    <section id="WhyMe" className="relative pt-20 w-full bg-black flex flex-col justify-center items-center">
      <AnimatedLogoGrid />
      <div className="flex flex-col items-center text-center relative max-w-7xl pb-40 px-4">
        <div className='absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full'>        
          <h2
            className="inline-block text-[3rem] sm:text-[7rem] md:text-[12rem] font-bold mb-4 uppercase font-['Roboto_Condensed'] whitespace-nowrap"
            style={{
              color: '#69696900',
              WebkitTextStrokeWidth: '2px',
              WebkitTextStrokeColor: '#ffffff1e',
              lineHeight: '1',
            }}
          >
            DIFERENCIAIS
          </h2>
        </div>
        <div className='relative z-10 mt-20'>      
          <h3
            className="text-4xl sm:text-6xl md:text-8xl font-bold mb-10 text-white font-['Roboto_Condensed']"
            style={{
              letterSpacing: '-0.15rem',
              textTransform: 'uppercase'
            }}
          >
            Agilidade e Conveniência
          </h3>
        </div>
         
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          <div className="bg-white bg-opacity-10 p-8 rounded-lg flex flex-col items-center">
            <Clock className="text-white w-16 h-16 mb-4" />
            <h4 className="text-2xl font-bold text-white mb-4">Rapidez no Atendimento</h4>
            <p className="text-xl text-white text-center">
              Orçamento no mesmo dia e entrega do serviço em até 2 horas.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 p-8 rounded-lg flex flex-col items-center">
            <Truck className="text-white w-16 h-16 mb-4" />
            <h4 className="text-2xl font-bold text-white mb-4">Busca e Entrega</h4>
            <p className="text-xl text-white text-center">
              Buscamos e entregamos na sua casa em um raio de 1 km.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;