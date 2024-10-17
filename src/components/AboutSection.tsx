import Image from 'next/image';
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="About" className="mb-40 mt-60 max-w-7xl mx-auto px-4">
      <div className="text-center relative">
        <div className='absolute bottom-32 left-0 right-0 flex items-center justify-center'>        
          <h2
            className="inline-block text-4xl font-bold mb-4 uppercase font-['Roboto_Condensed']"
            style={{
              color: '#69696900',
              WebkitTextStrokeWidth: '2px',
              WebkitTextStrokeColor: '#00000037',
              fontSize: '14rem',
              lineHeight: '1',
            }}
            >
            SOBRE
          </h2>
        </div>
        <h3
          className="text-7xl font-bold mb-6 text-gray-800 -tracking-widest font-['Roboto_Condensed']"
          style={{
            letterSpacing: '0.15rem',
            textTransform: 'uppercase',
          }}
        >
          Transformando Seu Aparelho em Novo, Sempre!
        </h3>
        <p className="text-lg text-gray-600 mb-8">
          Com anos de experiência, a Milacell é especializada em conserto de celulares e eletrônicos, oferecendo 
          soluções rápidas e eficientes para você. Desde troca de telas, reparo de componentes internos, até a 
          aplicação de películas e venda de acessórios como capinhas e carregadores, garantimos o melhor atendimento e qualidade.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center">
          <Image src="/repair-icon.png" alt="Reparos rápidos" width={60} height={60} />
          <h3 className="text-xl font-semibold mt-4">Reparos rápidos e eficientes</h3>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/expert-icon.png" alt="Equipe especializada" width={60} height={60} />
          <h3 className="text-xl font-semibold mt-4">Equipe especializada</h3>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/quality-icon.png" alt="Garantia de qualidade" width={60} height={60} />
          <h3 className="text-xl font-semibold mt-4">Garantia de qualidade</h3>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/accessories-icon.png" alt="Variedade de acessórios" width={60} height={60} />
          <h3 className="text-xl font-semibold mt-4">Ampla variedade de acessórios</h3>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
