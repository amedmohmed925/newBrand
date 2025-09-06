import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IslamicIcon } from '../components/Icons/IslamicIcon';
import { ProductCard } from '../components/Product/ProductCard';
import { mockProducts } from '../data/mockProducts';
import { usePageTitle } from '../hooks/usePageTitle';
import { ChevronLeftIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

export const CollectionsPage: React.FC = () => {
  usePageTitle({ title: 'المجموعات' });
  
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('newest');

  const collections = [
    {
      id: 'heritage',
      name: 'مجموعة التراث',
      description: 'قطع أنيقة تحتفي بالتراث العربي الأصيل',
      image: '/api/placeholder/600/400',
      itemCount: mockProducts.filter(p => p.category === 'traditional').length,
      color: 'from-amber-100 to-gold-100'
    },
    {
      id: 'modern',
      name: 'المجموعة العصرية',
      description: 'تصاميم حديثة بلمسة عربية معاصرة',
      image: '/api/placeholder/600/400',
      itemCount: mockProducts.filter(p => p.category === 'modern').length,
      color: 'from-blue-100 to-indigo-100'
    },
    {
      id: 'luxury',
      name: 'المجموعة الفاخرة',
      description: 'قطع حصرية للمناسبات الخاصة',
      image: '/api/placeholder/600/400',
      itemCount: mockProducts.filter(p => p.category === 'luxury').length,
      color: 'from-purple-100 to-pink-100'
    },
    {
      id: 'casual',
      name: 'المجموعة الكاجوال',
      description: 'ملابس مريحة للاستخدام اليومي',
      image: '/api/placeholder/600/400',
      itemCount: mockProducts.filter(p => p.category === 'casual').length,
      color: 'from-green-100 to-emerald-100'
    }
  ];

  const categories = [
    { id: 'all', name: 'جميع المجموعات' },
    { id: 'heritage', name: 'التراث' },
    { id: 'modern', name: 'العصرية' },
    { id: 'luxury', name: 'الفاخرة' },
    { id: 'casual', name: 'الكاجوال' }
  ];

  const sortOptions = [
    { id: 'newest', name: 'الأحدث' },
    { id: 'oldest', name: 'الأقدم' },
    { id: 'popular', name: 'الأكثر شعبية' },
    { id: 'name', name: 'الاسم' }
  ];

  const filteredCollections = selectedCategory === 'all' 
    ? collections 
    : collections.filter(collection => collection.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-l from-gold-50 to-white">
        <div className="absolute inset-0 opacity-10">
          <IslamicIcon type="pattern" className="w-full h-full text-gold-500" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-4">
                <IslamicIcon type="star" size="md" className="text-gold-500" />
                <div className="w-12 h-0.5 bg-gold-300"></div>
                <IslamicIcon type="crescent" size="md" className="text-gold-500" />
                <div className="w-12 h-0.5 bg-gold-300"></div>
                <IslamicIcon type="star" size="md" className="text-gold-500" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-cairo mb-4">
              مجموعاتنا
            </h1>
            
            <p className="text-xl text-gold-600 font-cairo mb-6">
              اكتشف تشكيلاتنا المتنوعة من الأزياء العربية
            </p>
            
            <p className="text-lg text-gray-600 font-cairo max-w-2xl mx-auto">
              كل مجموعة تحكي قصة فريدة وتجمع بين الأصالة والحداثة
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            {/* Categories Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-cairo text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-gold-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-3">
              <AdjustmentsHorizontalIcon className="h-5 w-5 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 font-cairo text-sm focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCollections.map((collection) => (
              <div key={collection.id} className="group cursor-pointer">
                <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${collection.color} p-8 h-80 transition-transform group-hover:scale-105`}>
                  <div className="absolute inset-0 opacity-10">
                    <IslamicIcon type="pattern" className="w-full h-full text-gray-700" />
                  </div>
                  
                  <div className="relative h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <IslamicIcon type="star" className="text-gold-600" />
                        <span className="text-sm text-gray-600 font-cairo">
                          {collection.itemCount} قطعة
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 font-cairo mb-3">
                        {collection.name}
                      </h3>
                      
                      <p className="text-gray-700 font-cairo leading-relaxed">
                        {collection.description}
                      </p>
                    </div>
                    
                    <Link
                      to={`/shop?collection=${collection.id}`}
                      className="inline-flex items-center text-gold-600 font-semibold font-cairo hover:text-gold-700 transition-colors group/link"
                    >
                      تصفح المجموعة
                      <ChevronLeftIcon className="mr-2 h-4 w-4 group-hover/link:transform group-hover/link:-translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products from Collections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <IslamicIcon type="crescent" size="md" className="text-gold-500" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 font-cairo mb-4">
              قطع مختارة من مجموعاتنا
            </h2>
            <p className="text-gray-600 font-cairo">
              اكتشف أفضل القطع من كل مجموعة
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center bg-gold-500 text-white px-8 py-3 rounded-lg font-semibold font-cairo hover:bg-gold-600 transition-colors"
            >
              عرض جميع المنتجات
              <ChevronLeftIcon className="mr-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
