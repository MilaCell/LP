'use client';
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const buttonVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 1
    }
  }
};

interface ButtonOpenMapProps {
  variant?: 'red' | 'black';
}

export const ButtonOpenMap: React.FC<ButtonOpenMapProps> = ({ variant = 'black' }) => {
  const baseClasses = `
    inline-flex items-center justify-center
    text-3xl text-white
    py-6 px-4 md:py-8 md:px-6 hover:px-12
    mt-4 sm:mt-6
    transition-all duration-300
  `;

  const variantClasses = {
    red: 'bg-[#fe090a] hover:bg-white hover:text-[#fe090a]',
    black: 'bg-black hover:bg-white hover:text-black',
  };

  const buttonClasses = twMerge(baseClasses, variantClasses[variant]);

  return (
    <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] flex items-center justify-start mt-6 -skew-x-12">
      <Link href="https://maps.app.goo.gl/2ZS7BWLWe2zQAJuw9" passHref>
        <motion.button 
          variants={buttonVariants}
          className={buttonClasses}
        >
          <span className="-skew-x-6 inline-flex items-center">
            Abrir No Mapa
          </span>
        </motion.button>
      </Link>
    </div>
  );
};