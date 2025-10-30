import React from 'react';

export const StorySection: React.FC = () => {
  return (
    <div className="mb-20">
      <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/30 transform hover:scale-[1.01] transition-all duration-500">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 flex items-center gap-3">
          <span className="text-4xl">Our Journey</span>
        </h2>
        <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
          <p>
            Dimulai dari <strong className="text-amber-600">dapur rumah tahun 1995</strong>, kami cuma bikin masakan buat keluarga. Tapi satu gigitan, satu cerita, satu pelanggan — kini kami udah kirim ke <strong>seluruh Indonesia</strong>.
          </p>
          <p>
            Setiap masakan dibuat pakai <em>resep nenek</em> + <strong>bahan premium</strong>. Karena buat kami, <span className="text-orange-600 font-bold">masakan khas bukan cuma makanan — tapi momen</span>.
          </p>
        </div>
      </div>
    </div>
  );
};