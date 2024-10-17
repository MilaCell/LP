import Image from 'next/image';
import React from 'react';

const TestimonialCard: React.FC<Testimonial> = ({ name, content }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 border-2 border-white hover:border-[#408F4E]">
    <p className="font-bold text-[#676767] mb-4">{name}</p>
    <p className="text-[#676767] mb-4">&ldquo;{content}&rdquo;</p>
  </div>
);

const TestimonialsSection: React.FC = () => {
  return (
    <section id="plans" className="py-20 max-w-7xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl mb-12">Algumas das <span className='text-[#408F4E] font-bold'>avaliações</span> dos nossos clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.name}-${index}`} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface Testimonial {
  name: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Ana Silva",
    content: "Desde que troquei para este provedor, minha experiência online melhorou drasticamente. A conexão é estável e rápida, mesmo nos horários de pico. Recomendo a todos que buscam qualidade e confiabilidade."
  },
  {
    name: "José Carlos",
    content: "O atendimento ao cliente é muito bom. A equipe é bem rápida e eficiente em resolver problemas. A internet é rápida e nunca me deixa na mão."
  },
  {
    name: "Laís Souza",
    content: "Trabalho de casa e preciso de uma conexão que não falhe. Até agora, a experiência tem sido ótima, com excelente velocidade e suporte técnico sempre disponível."
  }
];
export default TestimonialsSection;