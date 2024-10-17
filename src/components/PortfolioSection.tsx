import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const PortfolioSection: React.FC = () => {
  return (
    <section id="plans" className="py-20 max-w-7xl">
      <div className="container mx-auto px-4 shadow-xl rounded-3xl">
        <h2 className="text-3xl md:text-4xl mb-12">Nosso <span className='text-[#408F4E] font-bold'>Portifólio</span></h2>
        <div className="flex flex-col md:flex-row gap-16 p-8">
          <Image
            src="/channels.png"
            height={400}
            width={400}
            alt="Channels"
            className="rounded-lg shadow-2xl aspect-square object-cover"
          />
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-xs md:text-sm mb-4 text-[#408F4E]">
              <span className="font-bold">XPAND</span> PLAY
            </h2>
            <h2 className="text-2xl md:text-4xl mb-4 font-bold">
              TV por assinatura 100% digital
            </h2>
            <p className="text-xl md:text-2xl mb-4">
              Assista tv em seu celular! A Xpand oferece canais digitais e streamings como MAX e Deezer. Não perca!
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="https://apps.apple.com/br/app/xpand-play/id6535689586" passHref>
                <Image src="/AppStore.png" alt="App Store" width={150} height={50} />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=br.com.xpandtec.tv.mobile&hl=pt_BR" passHref>
                <Image src="/googleplay.png" alt="Play Store" width={150} height={50} />
              </Link>
            </div>
          </div>
        </div>
        <p className='w-full text-center text-[#676767] font-bold my-12'>Soluções inovadoras que atendem as suas necessidades e superam as suas expectativas! </p>
        <div className='w-full flex justify-center items-center'>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 items-center justify-center'>
            {logos.map((logo, index) => (
              <Image
                src={`/${logo}`}
                alt={`${logo}`}
                key={`${logo}-${index}`}
                width={150}
                height={80}
                className="w-full h-auto max-w-[150px] transition-all duration-300 ease-in-out"
              />
            ))}
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <Image
            src="/apps.png"
            alt="Apps"
            width={800}
            height={400}
            // layout="responsive"
          />
        </div>
      </div> 
    </section>
  );
};

const logos = [
  "deezer.png",
  "hbomax.png",
  "ubook.png",
  "looke.png",
]

export default PortfolioSection;