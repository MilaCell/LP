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
              <li><Link href="https://central.xpandtec.com.br/central_assinante_web/login" target="_blank">Área do Cliente</Link></li>
              <li><Link href="https://wa.me/559591312670" target="_blank">Fale conosco</Link></li>
              <li><Link href="/privacidade" target="_blank">Política de privacidade</Link></li>
              <li><Link href="/termos" target="_blank">Termos de uso</Link></li>
              <li><Link href="https://fast.com/pt/" target="_blank">Teste velocidade internet</Link></li>
            </ul>
          </div>

          {/* Atendimento */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4">Atendimento</h4>
            <ul className="text-gray-600">
              <li>Email: <a href="mailto:financeiro@xpandtec.com.br">financeiro@xpandtec.com.br</a></li>
              <li>Telefone: +55 (95) 9 9131-2670</li>
              <li>
                Instagram:{' '}
                <a href="https://www.instagram.com/xpandtec/?igsh=M2R0cm96ZXp4bGhh" target="_blank" rel="noreferrer">
                  @xpandtec
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Informação legal */}
        <div className="mt-10 text-center text-gray-600 text-sm">
          XPAND INTERNET & TECNOLOGIA LTDA | CNPJ: 53.085.807/0001-30 |
          Rua Nivaldo da Conceição Gutierrez, 517 – Pintolândia – Boa Vista – RR
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
