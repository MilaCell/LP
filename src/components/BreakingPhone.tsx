"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const BreakingPhone: React.FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isGifPlaying, setIsGifPlaying] = useState(true);

  useEffect(() => {
    const gifDuration = 5000; // Duração aproximada do GIF em milissegundos (5 segundos aqui)
    const timer = setTimeout(() => {
      setIsGifPlaying(false); // Para de exibir o GIF após a duração
    }, gifDuration);

    return () => clearTimeout(timer); // Limpa o timer se o componente desmontar
  }, []);

  const floatingAnimation = {
    y: [0, -15, 0],
    rotate: [-2, 2, -2],
    transition: {
      y: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
      rotate: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div className="relative w-full h-full" animate={floatingAnimation}>
      {isGifPlaying ? (
        <Image
          ref={imgRef}
          src="/celular_quebrando.gif"
          alt="Celular quebrando"
          layout="fill"
          objectFit="cover"
          className="z-10"
        />
      ) : (
        <Image
          src="/celular_quebrando.png" // Imagem estática para exibir após o GIF
          alt="Celular quebrado"
          layout="fill"
          objectFit="cover"
          className="z-10"
        />
      )}
    </motion.div>
  );
};

export default BreakingPhone;
