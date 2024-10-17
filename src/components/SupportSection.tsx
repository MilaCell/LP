import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SupportSection: React.FC = () => (
  <section id="suport" className="w-full bg-custom-gradient flex justify-center items-center gap-8 py-4">
    <p className='font-bold text-white'>Precisa de suporte?</p>
    <Link href="https://wa.me/559591312670" passHref>
      <button className="bg-white text-[#79B84D] font-bold px-6 rounded-lg shadow-lg hover:scale-105 transition-scale duration-300">
        Fale conosco!
      </button>
    </Link>
  </section>
);

export default SupportSection;
