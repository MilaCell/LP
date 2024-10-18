"use client";
import React from 'react';
import { motion } from 'framer-motion';

const MovingInstagramText: React.FC = () => {
  // Array com textos duplicados para criar efeito infinito
  const texts = Array(16).fill("SIGA NO INSTAGRAM");

  // Variante para o container principal
  const containerVariants = {
    animate: {
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 600, // 10 minutos = 600 segundos
          ease: "linear"
        }
      }
    }
  };

  return (
    <div className="bg-[#fe090a] w-full flex flex-col justify-center items-center relative overflow-hidden py-8">
      {/* Versão Desktop */}
      <motion.div 
        className="hidden md:flex items-center whitespace-nowrap"
        variants={containerVariants}
        animate="animate"
        style={{ width: "200%" }} // Garante que temos espaço suficiente para a animação
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
  );
};

export default MovingInstagramText;