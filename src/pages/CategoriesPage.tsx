import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

export const CategoriesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-50 via-white to-olive-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-cairo mb-4">
            الفئات
          </h1>
          <p className="text-lg text-gray-600 font-cairo">
            تصفح جميع فئات المنتجات المتوفرة
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Category Header */}
              <div className="bg-gradient-to-l from-gold-500 to-olive-500 p-6 text-white">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-5xl">{category.icon}</span>
                  <Link
                    to={`/shop?category=${category.id}`}
                    className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 flex items-center gap-2 text-sm font-cairo"
                  >
                    تصفح
                    <ChevronLeftIcon className="w-4 h-4" />
                  </Link>
                </div>
                <h2 className="text-2xl font-bold font-cairo mb-2">
                  {category.name}
                </h2>
                <p className="text-white/90 text-sm font-cairo">
                  {category.description}
                </p>
              </div>

              {/* Subcategories */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 font-cairo mb-4">
                  الأقسام الفرعية:
                </h3>
                <div className="space-y-2">
                  {category.subcategories?.map((subcategory) => (
                    <Link
                      key={subcategory.id}
                      to={`/shop?category=${category.id}&subcategory=${subcategory.id}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gold-50 transition-all duration-300 group/item"
                    >
                      <span className="text-gray-700 font-cairo group-hover/item:text-gold-600 transition-colors">
                        {subcategory.name}
                      </span>
                      <ChevronLeftIcon className="w-4 h-4 text-gray-400 group-hover/item:text-gold-600 group-hover/item:transform group-hover/item:-translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 pb-6">
                <Link
                  to={`/shop?category=${category.id}`}
                  className="block w-full bg-gradient-to-l from-gold-500 to-olive-500 text-white text-center py-3 rounded-lg font-semibold font-cairo hover:from-gold-600 hover:to-olive-600 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  عرض جميع المنتجات
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gold-600 font-cairo mb-2">
                {categories.length}
              </div>
              <div className="text-gray-600 font-cairo">فئة رئيسية</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-olive-600 font-cairo mb-2">
                {categories.reduce((sum, cat) => sum + (cat.subcategories?.length || 0), 0)}
              </div>
              <div className="text-gray-600 font-cairo">قسم فرعي</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-600 font-cairo mb-2">
                0
              </div>
              <div className="text-gray-600 font-cairo">منتج متوفر</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
