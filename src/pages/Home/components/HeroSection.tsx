import React from 'react';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold font-sans text-gray-900 mb-6 leading-tight">
            Kelezatan yang
            <span className="block bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
              Dibuat dengan Cinta
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto font-medium font-sans">
            Masakan premium buatan rumahan dengan resep turun temurun dan bahan pilihan terbaik
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mx-20">
            <button
              onClick={() => onNavigate('Produk')}
              className="px-8 py-4 min-w-[250px] bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-full font-semibold font-sans text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Lihat Produk
            </button>
            <button
              onClick={() => onNavigate('Kontak')}
              className="px-8 py-4 min-w-[250px] bg-white text-amber-600 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-amber-600"
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};