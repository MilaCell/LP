'use client'
import React, { useState } from 'react';
import Image from 'next/image';

interface ProjectProps {
  alt: string;
  srcBase: string;
  nome: string;
  contagemFotos: number;
  tipo: string;
}

export const Project: React.FC<ProjectProps> = ({ alt, srcBase, nome, contagemFotos, tipo }) => {
  const [isHovered, setIsHovered] = useState(false);
  const src = `${srcBase}/${contagemFotos}.png`;

  return (
    <div className="p-6 rounded-xl shadow-lg flex flex-col">
      <div 
        className="relative mb-4 rounded-3xl overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={src}
          alt={alt}
          width={400}
          height={400}
          className="object-contain w-full max-h-[400px] aspect-square bg-black border-2 rounded-3xl transition-transform duration-300 ease-in-out"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        <div 
          className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center transition-all duration-300 ease-in-out rounded-3xl"
          style={{ backgroundColor: isHovered ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)' }}
        >
          <button
            className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-3xl hover:bg-orange-600 transition-all opacity-0 transform translate-y-4 duration-300 ease-in-out"
            onClick={() => {/* Add your click handler here */}}
            style={{ opacity: isHovered ? 1 : 0, transform: isHovered ? 'translateY(0)' : 'translateY(1rem)' }}
          >
            Visualizar o projeto
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-3xl font-bold text-white">{nome}</h3>
        <p className="font-semibold text-orange-600">{tipo}</p>
        <button
          className="mt-2 px-2 text-xs py-1 border-2 border-gray-600 text-gray-600 font-semibold rounded-3xl hover:bg-orange-500 hover:text-white transition-all"
        >
          Visualizar o projeto
        </button>
      </div>
    </div>
  );
};
