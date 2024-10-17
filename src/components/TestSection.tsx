import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TestSection: React.FC = () => (
  <section id="test" className="mb-20 max-w-7xl">
    <div className="container mx-auto px-4">
      <div className="bg-white gap-6 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between transform border-2 border-white">
        
        {/* Parte Esquerda: Texto e Imagem */}
        <div className="flex flex-col items-center space-x-4">
          {/* Texto */}
          <div>
            <p className="text-[#676767] font-bold text-xl md:text-2xl mb-2">
              Será que a sua internet passa<br/>no nosso teste de velocidade?
            </p>
          </div>

          {/* Imagem */}
          <div className='w-fit'>
            <Image
              src="/icons/desempenho.png"
              alt="Ícone de desempenho"
              width={80}
              height={50}
            />
          </div>
        </div>

        {/* Parte Direita: Botão */}
        <div className="mt-4 md:mt-0">
          <Link href="https://fast.com/pt/" passHref>
          <button className="bg-custom-gradient text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300">
            FAZER TESTE
          </button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default TestSection;
