import React from 'react';
import { MessageCircle, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

export const ContactInfo: React.FC = () => {
  return (
    <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/20">
      <h3 className="text-2xl font-black mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
        Chat Yuk!
      </h3>

      <div className="space-y-4">
        {/* WhatsApp Admin 1 */}
        <a
          href="https://wa.me/6288980982376"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 text-white transform hover:scale-105 hover:shadow-xl transition-all duration-300 group"
        >
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
            <MessageCircle size={24} />
          </div>
          <div>
            <p className="text-xs opacity-90">Admin 1 (Pemesanan)</p>
            <p className="font-bold">+62 889-8098-2376</p>
          </div>
        </a>

        {/* WhatsApp Admin 2 */}
        <a
          href="https://wa.me/6285643415298"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 text-white transform hover:scale-105 hover:shadow-xl transition-all duration-300 group"
        >
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
            <MessageCircle size={24} />
          </div>
          <div>
            <p className="text-xs opacity-90">Admin 2 (Info & Reseller)</p>
            <p className="font-bold">+62 856-4341-5298</p>
          </div>
        </a>

        {/* Email */}
        <a
          href="mailto:nuranggrainii03@gmail.com"
          className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-amber-50 transition-all duration-300 group"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
            <Mail size={24} />
          </div>
          <div>
            <p className="text-xs text-gray-600">Email</p>
            <p className="font-bold text-gray-900">nuranggrainii03@gmail.com</p>
          </div>
        </a>

        {/* Alamat */}
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 backdrop-blur-sm">
          <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center text-white">
            <MapPin size={24} />
          </div>
          <div>
            <p className="text-xs text-gray-600">Lokasi</p>
            <p className="font-bold text-gray-900">Parangjoro, Grogol, Sukoharjo</p>
          </div>
        </div>

        {/* Jam Buka */}
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 backdrop-blur-sm">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white">
            <Clock size={24} />
          </div>
          <div>
            <p className="text-xs text-gray-600">Buka Setiap Hari</p>
            <p className="font-bold text-gray-900">06.00 - 19.00 WIB</p>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="mt-8 pt-6 border-t border-white/30">
        <p className="text-sm font-bold text-gray-700 mb-3">Stalk Kami di:</p>
        <div className="flex gap-3">
          <a
            href="https://www.instagram.com/_nuranggrainii"
            target="_blank"
            className="w-14 h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-2xl flex items-center justify-center text-white hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg"
          >
            <Instagram size={28} />
          </a>
          <a
            href="https://www.facebook.com/erni.setyowati.799883"
            target="_blank"
            className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center text-white hover:scale-110 hover:-rotate-6 transition-all duration-300 shadow-lg"
          >
            <Facebook size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};