'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Logo {
  src: string;
  alt: string;
}

const logos: Logo[] = [
  { src: "/icons/motorola.svg", alt: "Motorola" },
  { src: "/icons/apple.svg", alt: "Apple" },
  { src: "/icons/samsung.svg", alt: "Samsung" },
  { src: "/icons/xiaomi.svg", alt: "Xiaomi" },
  { src: "/icons/lg.svg", alt: "LG" },
];

const AnimatedLogoGrid: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="w-full grid grid-cols-3 md:grid-cols-5 gap-4 pb-32"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {logos.map((logo, index) => (
        <motion.div
          key={logo.alt}
          className="flex justify-center items-center"
          initial={{ x: -50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={80}
            height={80}
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedLogoGrid;