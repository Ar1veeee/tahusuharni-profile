import React from 'react';
import { Navigation } from 'lucide-react';

export const MapSection: React.FC = () => {

  const handleOpenMaps = () => {
    window.open(
      'https://maps.google.com/maps?q=-7.640886,110.799722&z=17&hl=id',
      '_blank'
    );
  };

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl h-64 sm:h-80 group cursor-pointer">
      {/* Google Maps Embed */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3954.39236584492!2d110.79714107500348!3d-7.640885992375076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMzgnMjcuMiJTIDExMMKwNDcnNTkuMCJF!5e0!3m2!1sid!2sid!4v1761783243089!5m2!1sid!2sid"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        title="Lokasi Kami"
        className="transition-transform duration-700 group-hover:scale-105"
      />

      {/* Dark Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* CTA Button — Muncul saat hover */}
      <button
        onClick={handleOpenMaps}
        className={`
          absolute bottom-6 left-1/2 transform -translate-x-1/2
          bg-white/95 backdrop-blur-lg px-6 py-3 rounded-full
          shadow-xl flex items-center gap-2 font-bold text-gray-800
          opacity-0 group-hover:opacity-100 
          translate-y-4 group-hover:translate-y-0
          transition-all duration-500 ease-out
          hover:scale-105 hover:shadow-2xl
        `}
      >
        <Navigation size={18} className="text-amber-600" />
        Buka di Google Maps
      </button>

      {/* Corner Label */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-amber-700 shadow-md">
        Parangjoro, Sukoharjo
      </div>
    </div>
  );
};