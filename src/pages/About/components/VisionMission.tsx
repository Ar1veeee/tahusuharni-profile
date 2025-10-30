import React from 'react';
import { Target, Heart } from 'lucide-react';

export const VisionMission: React.FC = () => {
  return (
    <div className="mb-20">
      <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-gray-900">
        Visi & Misi
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Visi */}
        <div className="group p-8 rounded-3xl bg-gradient-to-br from-amber-100 to-orange-100 hover:from-amber-200 hover:to-orange-200 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-2">
          <div className="flex items-center gap-3 mb-4">
            <Target className="text-amber-700 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-2xl font-bold text-amber-800">Visi</h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Jadi <strong>#1 kue kering</strong> di Indonesia yang selalu bikin orang bilang: <em>"Ini sih beda!"</em>
          </p>
        </div>

        {/* Misi */}
        <div className="group p-8 rounded-3xl bg-gradient-to-br from-pink-100 to-rose-100 hover:from-pink-200 hover:to-rose-200 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-2">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="text-rose-700 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-2xl font-bold text-rose-800">Misi</h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Jaga <strong>rasa autentik</strong>, pake <strong>bahan terbaik</strong>, dan kasih <strong>love</strong> di setiap box.
          </p>
        </div>
      </div>
    </div>
  );
};