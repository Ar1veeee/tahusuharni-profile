import React from 'react';

export const MapSection: React.FC = () => {
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl h-64 sm:h-80 group">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3954.39236584492!2d110.79714107500348!3d-7.640885992375076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMzgnMjcuMiJTIDExMMKwNDcnNTkuMCJF!5e0!3m2!1sid!2sid!4v1761783243089!5m2!1sid!2sid"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        title="Lokasi Kami"
        className="transition-all duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <p className="text-sm font-bold text-gray-800">Pin Lokasi Kami</p>
      </div>
    </div>
  );
};