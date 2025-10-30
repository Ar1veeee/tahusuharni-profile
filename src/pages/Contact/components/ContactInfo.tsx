import React from 'react';
import { MessageCircle, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

export const ContactInfo: React.FC = () => {
  return (
    <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/30 shadow-lg">
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-2xl font-black text-gray-900 tracking-tight">Hubungi Kami</h3>
        <p className="text-sm text-amber-700 mt-1">Pilih cara favoritmu</p>
      </div>

      <div className="space-y-5">

        {/* WhatsApp 1 – Hover Animation */}
        <a
          href="https://wa.me/6288980982376"
          target="_blank"
          rel="noopener noreferrer"
          className={`
            flex items-center justify-between p-4 rounded-2xl
            bg-gradient-to-r from-green-500 to-emerald-600 text-white
            transition-all duration-300 ease-out
            hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]
          `}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle size={20} />
            </div>
            <div>
              <p className="text-xs opacity-90">Pemesanan</p>
              <p className="font-semibold">+62 889-8098-2376</p>
            </div>
          </div>
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </a>

        {/* WhatsApp 2 – Hover Animation */}
        <a
          href="https://wa.me/6285643415298"
          target="_blank"
          rel="noopener noreferrer"
          className={`
            flex items-center justify-between p-4 rounded-2xl
            bg-gradient-to-r from-emerald-500 to-teal-600 text-white
            transition-all duration-300 ease-out
            hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]
          `}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle size={20} />
            </div>
            <div>
              <p className="text-xs opacity-90">Info & Reseller</p>
              <p className="font-semibold">+62 856-4341-5298</p>
            </div>
          </div>
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </a>

        {/* Email – Hover Animation */}
        <a
          href="mailto:nuranggrainii03@gmail.com"
          className={`
            flex items-center justify-between p-4 rounded-2xl
            bg-amber-50 border border-amber-200
            transition-all duration-300 ease-out
            hover:bg-amber-100 hover:shadow-md hover:-translate-y-1 hover:scale-[1.02]
          `}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-xs text-amber-700">Email</p>
              <p className="font-semibold text-amber-900">nuranggrainii03@gmail.com</p>
            </div>
          </div>
          <Mail size={16} className="text-amber-600" />
        </a>

        {/* Alamat & Jam – Compact (tidak ada aksi, jadi tanpa hover) */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/50 border border-amber-100">
            <MapPin size={18} className="text-amber-600" />
            <p className="font-medium text-gray-800">Parangjoro, Sukoharjo</p>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/50 border border-orange-100">
            <Clock size={18} className="text-orange-600" />
            <p className="font-medium text-gray-800">06.00 - 19.00</p>
          </div>
        </div>
      </div>

      {/* Social Media – Hover Animation */}
      <div className="mt-8 pt-6 border-t border-gray-200/50 flex justify-center gap-4">
        <a
          href="https://www.instagram.com/_nuranggrainii"
          target="_blank"
          rel="noopener noreferrer"
          className={`
            w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-400
            rounded-2xl flex items-center justify-center text-white
            transition-all duration-300 ease-out
            hover:shadow-lg hover:-translate-y-1 hover:scale-110
          `}
          aria-label="Instagram"
        >
          <Instagram size={22} />
        </a>
        <a
          href="https://www.facebook.com/erni.setyowati.799883"
          target="_blank"
          rel="noopener noreferrer"
          className={`
            w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500
            rounded-2xl flex items-center justify-center text-white
            transition-all duration-300 ease-out
            hover:shadow-lg hover:-translate-y-1 hover:scale-110
          `}
          aria-label="Facebook"
        >
          <Facebook size={22} />
        </a>
      </div>
    </div>
  );
};