import React from 'react';
import { teamMembers } from '../../../data';

export const TeamSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-gray-900">
        Meet the Squad
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="group text-center p-6 rounded-3xl bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
          >
            {/* Foto Placeholder */}
            <div className="w-32 h-32 mx-auto mb-5 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-6xl text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
              {member.image}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
            <p className="text-sm font-medium text-white bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-1 rounded-full inline-block">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};