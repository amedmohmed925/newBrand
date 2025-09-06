import React from 'react';
import { Product } from '../../types';
import { IslamicIcon } from '../Icons/IslamicIcon';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/priceUtils';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercentage = hasDiscount 
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.limited && (
              <div className="bg-gold-500 text-white text-xs px-2 py-1 rounded flex items-center font-cairo">
                <IslamicIcon type="star" size="sm" className="ml-1" />
                محدود
              </div>
            )}
            {product.new && (
              <div className="bg-olive-500 text-white text-xs px-2 py-1 rounded font-cairo">
                جديد
              </div>
            )}
            {hasDiscount && (
              <div className="bg-red-500 text-white text-xs px-2 py-1 rounded font-cairo">
                -{discountPercentage}%
              </div>
            )}
          </div>

          {/* Islamic Pattern Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 right-4">
              <IslamicIcon type="pattern" size="lg" className="text-white/30" />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-cairo font-semibold text-gray-900 mb-2 line-clamp-2">
            {product.name}
          </h3>
          
          <p className="text-sm text-gray-600 font-cairo mb-3 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-gray-900 font-cairo">
                {formatPrice(product.price)}
              </span>
              {hasDiscount && (
                <span className="text-sm text-gray-500 line-through font-cairo">
                  {formatPrice(product.originalPrice!)}
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-1">
              <span className="text-xs text-gray-500 font-cairo">
                {product.colors.length} ألوان
              </span>
              <IslamicIcon type="star" size="sm" className="text-gold-400" />
            </div>
          </div>

          {/* Colors Preview */}
          <div className="flex gap-1 mt-3">
            {product.colors.slice(0, 3).map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border border-gray-200"
                style={{
                  backgroundColor: 
                    color === 'أبيض' ? '#ffffff' :
                    color === 'أسود' ? '#000000' :
                    color === 'بيج' ? '#F5F5DC' :
                    color === 'رمادي' ? '#808080' :
                    color === 'كحلي' ? '#000080' :
                    color === 'ذهبي' ? '#FFD700' :
                    '#D1D5DB'
                }}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-xs text-gray-500 font-cairo">
                +{product.colors.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};