import React from 'react';
import { ContactForm } from './components/ContactForm';
import { ContactInfo } from './components/ContactInfo';
import { MapSection } from './components/MapSection';

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-16 pb-20 px-4 bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50">
      <div className="max-w-6xl mx-auto mt-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-black mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
            Let’s Talk!
          </h1>
          <p className="text-lg sm:text-xl text-amber-800 font-semibold">
            DM, WA, atau datang langsung — kami siap jawab!
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="order-1">
            <ContactForm />
          </div>
          <div className="order-3 lg:order-2">
            <ContactInfo />
          </div>
          <div className="order-2 lg:order-3 lg:col-span-2 mt-8">
            <MapSection />
          </div>
        </div>
      </div>
    </div>
  );
};