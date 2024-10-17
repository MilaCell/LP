'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PlayIcon } from './Play'; // Certifique-se de que o PlayIcon esteja importado corretamente.

interface PlayExplosionProps {
  size?: number;
  color?: string;
  iconCount?: number; // Número de ícones na explosão
}

const PlayExplosion: React.FC<PlayExplosionProps> = ({ size = 40, color = "#fff", iconCount = 10 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('About');
      if (aboutSection) {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.75; // 75% da altura da janela
        if (sectionTop < triggerPoint) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const explosionVariants = {
    hidden: { scale: 0.5, opacity: 0, x: 0, y: 0 },
    visible: (index: number) => ({
      scale: [0.5, 1],
      opacity: [0.5, 1],
      x: [0, Math.random() * 1600 - 800], // posição aleatória no eixo x
      y: [0, Math.random() * 600 - 300], // posição aleatória no eixo y
      rotate: [0, Math.random() * 360],  // rotação aleatória
      transition: {
        duration: 1 + Math.random(), // duração aleatória para variação
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <div className="relative flex items-center justify-center z-0">
      {/* Renderizar múltiplos PlayIcons com animações diferentes */}
      {Array.from({ length: iconCount }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute"
          custom={index}
          variants={explosionVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <PlayIcon size={size} color={color} />
        </motion.div>
      ))}
    </div>
  );
};

export default PlayExplosion;
