import React from 'react';
import {
  Trophy, Users, Heart, Sparkles, TrendingUp, Shield,
  Smile, Star, Leaf, Zap, Award
} from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

const features = [
  {
    lucideIcon: Trophy,
    title: 'Kualitas Premium',
    desc: 'Bahan pilihan berkualitas tinggi',
    detail: '100% natural tanpa pengawet',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'from-amber-50 to-orange-50'
  },
  {
    lucideIcon: Users,
    title: 'Bisnis Keluarga',
    desc: 'Resep turun temurun yang autentik',
    detail: 'Sejak 1995 melayani Anda',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50'
  },
  {
    lucideIcon: Heart,
    title: 'Dibuat dengan Cinta',
    desc: 'Setiap produk dibuat dengan perhatian detail',
    detail: 'Handcrafted setiap hari',
    color: 'from-pink-500 to-rose-500',
    bgColor: 'from-pink-50 to-rose-50'
  },
];

const stats = [
  { number: '10K+', label: 'Happy Customers', icon: Smile },
  { number: '15+', label: 'Years Experience', icon: Star },
  { number: '100%', label: 'Fresh & Natural', icon: Leaf },
  { number: '4.9', label: 'Customer Rating', icon: Zap },
];

export const FeaturesSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-white via-amber-50/30 to-white overflow-hidden">

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full mb-6">
            <Sparkles size={16} className="text-amber-600" />
            <span className="text-sm font-bold text-amber-900">Why Choose Us</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Kenapa Harus
            </span>
            <br />
            <span className="text-gray-900">Pilih Kami?</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lebih dari sekadar tahu & tempe biasa. Ini tentang <span className="font-bold text-amber-600">kualitas</span>,
            <span className="font-bold text-orange-600"> tradisi</span>, dan <span className="font-bold text-amber-600">kepercayaan</span>.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((item, idx) => {
            const IconComponent = item.lucideIcon;
            return (
              <div
                key={idx}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-3xl opacity-0 group-hover:opacity-20 blur transition duration-500`}></div>

                {/* Card */}
                <div className={`relative bg-gradient-to-br ${item.bgColor} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-white`}>

                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-white rounded-2xl blur opacity-50"></div>
                    <div className={`relative w-20 h-20 mx-auto bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-xl`}>
                      <IconComponent size={36} className="text-white" />
                    </div>
                    {/* Floating Icon */}
                    <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                      <IconComponent size={16} className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-black text-gray-900 group-hover:scale-105 transition-transform">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                    <div className={`inline-flex items-center gap-1 px-3 py-1.5 bg-white rounded-full text-xs font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent shadow-sm`}>
                      <TrendingUp size={12} />
                      {item.detail}
                    </div>
                  </div>

                  {/* Bottom Badge */}
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className={`bg-gradient-to-r ${item.color} text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap`}>
                      Terpercaya
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="relative">
          {/* Background Card */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 rounded-3xl transform -rotate-1"></div>

          {/* Content Card */}
          <div className="relative bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl p-8 md:p-12 shadow-2xl">

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-10">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
                  Numbers Don't Lie
                </h3>
                <p className="text-white/90 text-lg">
                  Bukti nyata kepercayaan pelanggan kami
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, idx) => {
                  const StatIcon = stat.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <StatIcon size={40} className="mx-auto mb-3 text-white" />
                      <div className="text-3xl md:text-4xl font-black text-white mb-2">
                        {stat.number}
                      </div>
                      <div className="text-white/90 text-sm font-semibold">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-bold border border-white/30">
                  <Shield size={16} />
                  <span>Halal Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-bold border border-white/30">
                  <Sparkles size={16} />
                  <span>Fresh Daily</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-bold border border-white/30">
                  <Award size={16} />
                  <span>Best Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-600">
          <p className="text-gray-600 text-lg mb-4">
            Masih ragu? <span className="font-bold text-amber-600">Coba dulu, baru percaya!</span>
          </p>
          <button
            onClick={() => onNavigate('Produk')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <span>Lihat Produk Kami</span>
            <span className="text-xl">→</span>
          </button>
        </div>

      </div>
    </section>
  );
};