import React from 'react';
import { DiagonalDivisionTopLeft } from './DiagonalSvg';
import { ButtonCTA } from './ButtonCTA';

const LocationSection: React.FC = () => (
  <section id="Location" className="bg-[#000] w-full flex flex-col justify-center items-center relative overflow-hidden">
    <DiagonalDivisionTopLeft />
    <div className="text-center relative py-20 px-4 max-w-7xl flex flex-col justify-center w-full items-center">
      <div className='absolute bottom-[88%] md:bottom-[70%] left-0 right-0 flex items-center justify-center'>        
        <h2
          className="inline-block text-[3.5rem] sm:text-[10rem] md:text-[14rem] font-bold mb-4 uppercase font-['Roboto_Condensed']"
          style={{
            color: '#000',
            WebkitTextStrokeWidth: '2px',
            WebkitTextStrokeColor: '#d1d1d137',
            lineHeight: '1',
          }}
        >
          Localização
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
          Onde Estamos
        </h3>
        <p className="text-xl sm:text-3xl text-white mb-8">
          Venha nos visitar ou entre em contato para atendimento personalizado.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8">
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <h4 className="text-2xl font-bold text-white mb-4">Nosso Endereço</h4>
          <p className="text-white text-lg mb-4">
            Rua João Guião, 1010 - Vila Virgínia<br />
            Ribeirão Preto - SP, 14030-440
          </p>
          <h4 className="text-2xl font-bold text-white mb-4">Horário de Funcionamento</h4>
          <p className="text-white text-lg mb-4">
            Segunda a Sexta: 9h às 18h<br />
            Sábado: 8h às 14h
          </p>
          <ButtonCTA variant='red' />
        </div>
        <div className="w-[85%] md:w-1/2 relative h-[300px] md:h-[400px] -skew-x-12 bg-black overflow-hidden">
          <div className="absolute inset-0 skew-x-12 scale-125">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1860.0735013159426!2d-47.82699789999999!3d-21.1863185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9be921186d693%3A0xfc3381e761288b8c!2sR.%20Dr.%20Jo%C3%A3o%20Gui%C3%A3o%2C%201010%20-%20Vila%20Virginia%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014030-440!5e0!3m2!1spt-BR!2sbr!4v1729204258409!5m2!1spt-BR!2sbr" 
              width="120%" 
              height="120%" 
              style={{
                border: 0,
                position: 'absolute',
                top: '-10%',
                left: '-10%'
              }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LocationSection;