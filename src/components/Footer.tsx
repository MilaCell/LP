import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-white border-t border-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={150}
              height={50}
              className="w-auto h-auto"
            />
          </div>

          {/* Links Rápidos */}
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="text-gray-600">
              <li><Link href="https://www.instagram.com/milacell_rp" target="_blank">Instagram</Link></li>
            </ul>
          </div>

          {/* Atendimento */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4">Atendimento</h4>
            <ul className="text-gray-600">
              <li>Telefone: +55 (16) 9 8184-1942</li>

              <li>
                Instagram:{' '}
                <a href="https://www.instagram.com/milacell_rp" target="_blank" rel="noreferrer">
                  @milacell_rp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Informação legal */}
        <div className="mt-10 text-center text-gray-600 text-sm">
          MILA CELL |
          Rua João Guião 1010 - Vila Virgínia
        </div>

        {/* Feito com */}
        <div className="mt-4 text-center text-gray-600 text-sm">
          Feito com 💜 por{' '}
          <Link href="https://site.iappbr.com" target="_blank" rel="noreferrer">
            <span className="text-[#7F5C95] font-semibold hover:underline">iApp</span>
          </Link>.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
