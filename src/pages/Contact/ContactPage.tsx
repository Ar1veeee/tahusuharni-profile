import React from 'react';
import { ContactForm } from './components/ContactForm';
import { ContactInfo } from './components/ContactInfo';
import { MapSection } from './components/MapSection';

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-16 pb-24 px-4 bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header — Bold & Playful */}
        <div className="text-center mb-16 mt-12">
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight bg-gradient-to-r from-amber-600 via-orange-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg">
            Let’s Talk!
          </h1>
          <p className="mt-3 text-lg sm:text-xl font-medium text-amber-900">
            DM, WA, atau mampir — kami <span className="underline decoration-wavy decoration-pink-500">siap jawab!</span>
          </p>
        </div>

        {/* Main Grid — Asimetris & Modern */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form — Kiri (span 7) */}
          <div className="lg:col-span-7 order-1">
            <ContactForm />
          </div>

          {/* Contact Info — Kanan Atas (span 5) */}
          <div className="lg:col-span-5 order-3 lg:order-2">
            <ContactInfo />
          </div>

          {/* Map — Full Width Bawah */}
          <div className="lg:col-span-12 order-2 lg:order-3 mt-10">
            <MapSection />
          </div>
        </div>
      </div>
    </div>
  );
};