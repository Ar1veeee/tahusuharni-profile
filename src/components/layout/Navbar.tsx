import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Users, Phone, Home } from 'lucide-react';
import { useScroll } from '../../hooks';
import logo from '../../assets/logo-suharni.jpg';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScroll(20);

  const navItems = [
    { name: 'Home', icon: Home },
    { name: 'Produk', icon: ShoppingBag },
    { name: 'Tentang', icon: Users },
    { name: 'Kontak', icon: Phone },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo + Nama Brand */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onNavigate('Home')}
          >
            {/* Logo */}
            <img
              src={logo}
              alt="Tahu Suharni Logo"
              className="w-10 h-10 rounded-full object-cover shadow-md"
            />

            {/* Nama Brand */}
            <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
              Tahu Suharni
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => onNavigate(item.name)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${currentPage === item.name
                    ? 'text-amber-600 bg-amber-50'
                    : 'text-gray-700 hover:text-amber-600 hover:bg-gray-50'
                  }`}
              >
                <item.icon size={18} />
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t animate-fade-in">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  onNavigate(item.name);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${currentPage === item.name
                    ? 'text-amber-600 bg-amber-50'
                    : 'text-gray-700 hover:bg-gray-50'
                  }`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};