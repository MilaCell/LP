import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { PlayIcon } from './Play';

interface ServiceFeatureProps {
  number: string;
  title: string;
  description: string;
  mediaSource: string;
  isRed: boolean;
  isVideo?: boolean;
}

const ServiceFeature: React.FC<ServiceFeatureProps> = ({ number, title, description, mediaSource, isRed, isVideo = false }) => (
  <div className={`sticky top-0 w-full pt-20 py-10 sm:py-20 ${isRed ? 'bg-[#fe090a]' : 'bg-white'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
      <div className="w-full lg:w-1/2 pr-0 lg:pr-8 flex flex-col sm:flex-row gap-4 items-center mb-8 lg:mb-0">
        <div className={`text-6xl sm:text-8xl lg:text-[15rem] font-black ${isRed ? 'text-white' : 'text-[#fe090a]'}`}>{number}</div>
        <div className="text-center sm:text-left">
          <h3 className={`text-2xl sm:text-3xl font-bold ${isRed ? 'text-white' : 'text-[#fe090a]'}`}>{title}</h3>
          <p className={`mt-2 text-sm sm:text-base ${isRed ? 'text-white' : 'text-black'}`}>{description}</p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-[200px] sm:h-[250px] lg:h-[350px] aspect-video relative">
        <div className="f-1 h-full w-full bg-black">
          {isVideo ? (
            <video
              src={mediaSource}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            />
          ) : (
            <div className="absolute inset-0">
              <div className="w-full h-full relative transform origin-top-left" style={{ top: '-10%', height: '120%' }}>
                <Image 
                  src={mediaSource}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

const ServicesSection: React.FC = () => {
  return (
    <section id="Service" className="relative pt-20 w-full bg-black flex flex-col justify-center items-center">
      <PlayIcon size={150} color='#fe090a' className='absolute hidden md:block md:-top-28 md:left-[26rem] z-[1]' noFill  />
      <Image 
        src="/images/phones.png"
        alt="Phones"
        width={800}
        height={2000}
        className="absolute left-0 -top-64 md:-top-20 md:left-32 z-0"
        priority
      />
      <div className="flex flex-col items-end text-right relative max-w-7xl pb-40 px-4 md:px-0">
        <div className='absolute bottom-[90%] sm:bottom-[85%] md:bottom-[80%] left-0 xl:left-auto right-0 xl:-right-56 flex items-center justify-center'>        
          <h2
            className="inline-block text-[4rem] sm:text-[7rem] md:text-[12rem] font-bold mb-4 uppercase font-['Roboto_Condensed']"
            style={{
              color: '#69696900',
              WebkitTextStrokeWidth: '2px',
              WebkitTextStrokeColor: '#ffffff1e',
              lineHeight: '1',
            }}
          >
            SERVIÇOS
          </h2>
        </div>
        <div className='relative z-10 md:max-w-[70%] max-w-[85%]'>      
          <h3
            className="text-4xl sm:text-8xl font-bold mb-6 text-white font-['Roboto_Condensed'] "
            style={{
              letterSpacing: '-0.15rem',
              textTransform: 'uppercase'
            }}
          >
            Soluções Rápidas para Seus Eletrônicos
          </h3>
        </div>
         
        <p className="text-xl sm:text-3xl text-white mb-8 z-10 md:max-w-[50%]">
          Na Milacell, cuidamos do seu aparelho como se fosse nosso. Confira alguns dos serviços que oferecemos:
        </p>
      </div>
      
      <ServiceFeature
        number="1"
        title="Troca de Tela"
        description="Substituímos a tela do seu smartphone com agilidade e eficiência, garantindo qualidade no reparo."
        mediaSource="/images/frontal.svg"
        isRed={true}
      />

      <ServiceFeature
        number="2"
        title="Venda de Acessórios"
        description="Temos uma variedade de acessórios para todos os modelos de smartphones, como capas, fones e carregadores."
        mediaSource="/images/acessorios.svg"
        isRed={false}
      />

      <ServiceFeature
        number="3"
        title="Aplicação de Película"
        description="Aplicamos películas de proteção para telas, garantindo maior durabilidade e segurança contra arranhões e quedas."
        mediaSource="/images/pelicula.svg"
        isRed={true}
      />

      <ServiceFeature
        number="4"
        title="Troca de Vidro Traseiro"
        description="Fazemos a substituição do vidro traseiro do seu smartphone de forma rápida e eficaz."
        mediaSource="/images/traseiro.svg"
        isRed={false}
      />
      
      <ServiceFeature
        number="5"
        title="Aparelhos Novos e Seminovos"
        description="Oferecemos uma seleção de aparelhos novos e seminovos, prontos para atender às suas necessidades e proporcionar a melhor experiência."
        mediaSource="/images/telefones.svg"
        isRed={true}
      />
    </section>
  );
};

export default ServicesSection;