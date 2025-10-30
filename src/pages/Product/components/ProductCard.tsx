import React, { useState } from 'react';
import type { Product } from '../../../types';
import { formatCurrency } from '../../../utils';
import { ShoppingCart, Heart, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      {/* Floating Action Buttons */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`w-10 h-10 rounded-full backdrop-blur-md transition-all duration-300 flex items-center justify-center ${
            isLiked 
              ? 'bg-red-500 text-white scale-110' 
              : 'bg-white/80 text-gray-700 hover:bg-red-50 hover:scale-110'
          }`}
        >
          <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
        </button>
      </div>

      {/* Badge Collection */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-emerald-400 to-green-500 text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm">
          <Sparkles size={12} />
          Fresh Daily
        </span>
      </div>

      {/* Image Section */}
      <div className="relative h-64 bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 bg-orange-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-amber-400 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        
        {/* Product Image with Lazy Load & Fallback */}
        <div className="relative h-full flex items-center justify-center p-8">
          {imageError ? (
            <div className="text-6xl">Tahu</div>
          ) : (
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              onError={() => setImageError(true)}
              className="max-h-full max-w-full object-contain drop-shadow-xl 
                       transform group-hover:scale-110 group-hover:rotate-3 
                       transition-all duration-500"
            />
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Title & Description */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price & Stock */}
        <div className="flex items-end justify-between pt-2">
          <div>
            <p className="text-xs text-gray-500 mb-1">Mulai dari</p>
            <p className="text-2xl font-black bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
              {formatCurrency(product.price)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-emerald-600 font-semibold">• Stok Tersedia</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <a
            href={`https://wa.me/6288980982376?text=Halo,%20saya%20mau%20pesan%20*${encodeURIComponent(product.name)}*%20seharga%20*${formatCurrency(product.price)}*`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group/btn"
          >
            <ShoppingCart size={18} className="group-hover/btn:animate-bounce" />
            <span>Order Now</span>
          </a>
        </div>
      </div>
    </div>
  );
};