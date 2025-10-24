// components/WhatsAppDialog.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface WhatsAppDialogProps {
  isOpen: boolean;
  onClose: () => void;
  variant?: 'white' | 'black';
}

export const WhatsAppDialog: React.FC<WhatsAppDialogProps> = ({ isOpen, onClose, variant = 'black' }) => {
  const stores = [
    {
      name: "Loja 1 - Vila Virgínia",
      phone: "16988208334",
      displayPhone: "(16) 98820-8334"
    },
    {
      name: "Loja 2 - Parque Ribeirão",
      phone: "16996209082",
      displayPhone: "(16) 99620-9082"
    }
  ];

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`${variant === 'white' ? 'bg-white' : 'bg-black'} p-8 -skew-x-6 md:-skew-x-12`}>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white text-center font-['Roboto_Condensed'] uppercase"
              style={{ letterSpacing: '-0.1rem' }}
            >
              Escolha uma loja
            </h2>
            
            <div className="space-y-6">
              {stores.map((store, index) => (
                <a
                  key={index}
                  href={`https://wa.me/55${store.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white hover:bg-opacity-90 text-black p-6 transition-all duration-300 -skew-x-2 md:-skew-x-4 hover:scale-105"
                >
                  <div className="skew-x-6 md:skew-x-12">
                    <div className="flex items-center gap-3 mb-2">
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      <div className="font-bold text-xl md:text-2xl">{store.name}</div>
                    </div>
                    <div className="text-lg md:text-xl ml-9">{store.displayPhone}</div>
                  </div>
                </a>
              ))}
            </div>

            <button
              onClick={onClose}
              className="mt-8 w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-bold py-4 transition-all duration-300 text-xl -skew-x-2 md:-skew-x-4"
            >
              <span className="skew-x-6 md:skew-x-12 inline-block">Fechar</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};