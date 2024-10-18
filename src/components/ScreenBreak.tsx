"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScreenBreak: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Inicia a animação após 5 segundos
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const generateCracks = (numCracks: number) => {
    const cracks = [];
    for (let i = 0; i < numCracks; i++) {
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      const length = Math.random() * 40 + 30; // Linhas mais longas
      
      // Gera mais pontos para criar padrões mais complexos
      const points = [];
      for (let j = 0; j < 8; j++) { // Aumentei número de pontos
        points.push(`l ${Math.random() * length - length/2},${Math.random() * length - length/2}`);
      }

      cracks.push({
        id: i,
        path: `M ${startX},${startY} ${points.join(' ')}`,
        x: `${startX}%`,
        y: `${startY}%`,
        rotate: Math.random() * 360,
        scale: Math.random() * 0.7 + 0.5, // Aumentei a escala dos fragmentos
      });
    }
    return cracks;
  };

  // Aumentei significativamente o número de rachaduras
  const cracks = generateCracks(20);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white z-20">
      {/* Conteúdo da página */}
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-black text-4xl font-bold">
          {!isAnimating ? "Aguarde 5 segundos..." : "Tela Quebrada!"}
        </h1>
      </div> */}

      {/* Flash inicial */}
      <motion.div
        className="absolute inset-0 bg-white pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isAnimating ? {
          opacity: [0, 1, 0],
          transition: { duration: 0.3 }
        } : {}}
      />

      {/* Fragmentos de vidro */}
      {cracks.map((crack, index) => (
        <motion.div
          key={crack.id}
          className="absolute"
          style={{
            left: crack.x,
            top: crack.y,
            transformOrigin: 'center',
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={isAnimating ? {
            opacity: 1,
            scale: crack.scale,
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            rotate: crack.rotate,
          } : {}}
          transition={{
            duration: 1.2,
            delay: index * 0.01,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          {/* Fragmento de vidro com efeito de reflexo */}
          <div className="relative">
            <svg
              width="200"
              height="200"
              viewBox="0 0 100 100"
              className="pointer-events-none"
            >
              {/* Fundo do fragmento */}
              <motion.path
                d={crack.path}
                fill="rgba(0, 0, 0, 0.05)"
                stroke="rgba(0, 0, 0, 0.2)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={isAnimating ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: index * 0.02 }}
              />
              {/* Efeito de reflexo */}
              <motion.path
                d={crack.path}
                fill="none"
                stroke="rgba(0, 0, 0, 0.3)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isAnimating ? {
                  pathLength: [0, 1],
                  opacity: [0, 0.6, 0],
                } : {}}
                transition={{
                  duration: 1.5,
                  delay: index * 0.02,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 2 + 1
                }}
              />
            </svg>
          </div>
        </motion.div>
      ))}

      {/* Fragmentos maiores com efeito de vidro */}
      {isAnimating && cracks.map((crack, index) => (
        <motion.div
          key={`glass-${crack.id}`}
          className="absolute w-40 h-40 rounded-lg bg-black/5 backdrop-blur-sm"
          style={{
            left: crack.x,
            top: crack.y,
            transformOrigin: 'center',
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 0.2,
            scale: crack.scale,
            x: Math.random() * 150 - 75,
            y: Math.random() * 150 - 75,
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: 1.5,
            delay: index * 0.01,
            type: "spring",
            stiffness: 50,
            damping: 20
          }}
        />
      ))}
    </div>
  );
};

export default ScreenBreak;