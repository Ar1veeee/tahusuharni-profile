import React from 'react';
import { MapPin, Phone, Home, ShoppingBag, Users, Mail, Instagram, Facebook, Clock } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: 'Home', icon: Home },
    { name: 'Produk', icon: ShoppingBag },
    { name: 'Tentang', icon: Users },
    { name: 'Kontak', icon: Phone },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Tahu Suharni
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Kelezatan tahu premium yang dibuat dengan cinta dan resep turun temurun sejak 1995.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.instagram.com/_nuranggrainii"
                className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/erni.setyowati.799883?mibextid=rS40aB7S9Ucbxw6v"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-400">Menu Cepat</h3>
            <ul className="space-y-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <button
                      onClick={() => onNavigate(item.name)}
                      className={`w-full text-left transition-colors duration-300 flex items-center gap-2 group focus:outline-none ${currentPage === item.name
                        ? 'text-amber-400' // AKTIF
                        : 'text-gray-400 hover:text-amber-400'
                        }`}
                    >
                      <Icon size={18} className="flex-shrink-0" />
                      <span className="inline-block w-0 group-hover:w-2 h-0.5 bg-amber-400 transition-all duration-300"></span>
                      <span>{item.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-400">Hubungi Kami</h3>
            <ul className="space-y-4">

              {/* Alamat */}
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="text-amber-400 flex-shrink-0 mt-1" />
                <span>Parangjoro Rt 01 Rw 03 Grogol, Sukoharjo</span>
              </li>

              {/* WhatsApp Admin 1 */}
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-amber-400 flex-shrink-0" />
                <a
                  href="https://wa.me/6288980982376"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-medium group"
                >
                  <span className="block">+62 889-8098-2376</span>
                  <span className="text-xs text-amber-400 group-hover:text-amber-300">
                    Admin 1 (Pemesanan)
                  </span>
                </a>
              </li>

              {/* WhatsApp Admin 2 */}
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-amber-400 flex-shrink-0" />
                <a
                  href="https://wa.me/6285643415298"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-medium group"
                >
                  <span className="block">+62 856-4341-5298</span>
                  <span className="text-xs text-amber-400 group-hover:text-amber-300">
                    Admin 2 (Pemesanan)
                  </span>
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={20} className="text-amber-400 flex-shrink-0" />
                <a href="mailto:nuranggrainii03@gmail.com" className="hover:text-white transition-colors">
                  nuranggrainii03@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-400">Jam Operasional</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-amber-400 flex-shrink-0 mt-1" />
                <div className="text-gray-400">
                  <p className="font-semibold text-white">Senin - Sabtu</p>
                  <p>06.00 - 19.00 WIB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} Tahu Suharni. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};