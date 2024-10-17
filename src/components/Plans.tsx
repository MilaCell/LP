import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

interface Plan {
  speed: 400 | 600 | 800 | 1000;
}

const plans: Plan[] = [
  { speed: 400 },
  { speed: 600 },
  { speed: 800 },
  { speed: 1000 }
];

const PlanCard: React.FC<Plan> = ({ speed }) => (
  <div className="bg-white rounded-lg">
    <div className="relative w-full" style={{ paddingBottom: '150.77%' }}>
      <Image
        src={`/plans/plans-${speed}.png`}
        alt={`${speed} Mbps Plan`}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="px-4 translate-y-[-30px]">
      <Link href="https://wa.me/559591312670" passHref>
        <button className="w-full text-lg sm:text-xl bg-custom-gradient-2 text-white py-3 sm:py-4 px-6 rounded-2xl font-bold shadow-lg hover:opacity-90 transition-opacity duration-300">
          Assinar agora
        </button>
      </Link>
    </div>
  </div>
);

const PlansSection: React.FC = () => {
  return (
    <section id="planos" className="py-20 w-full max-w-7xl">
      <div className="px-4 shadow-xl rounded-3xl">
        <h2 className="text-3xl md:text-4xl mb-12">Nossos <span className='text-[#408F4E] font-bold'>Planos</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
          {plans.map((plan) => (
            <PlanCard key={plan.speed} speed={plan.speed} />
          ))}
        </div>
      </div> 
    </section>
  );
};

export default PlansSection;