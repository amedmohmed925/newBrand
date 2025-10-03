import React, { useState, useMemo } from 'react';
import { ProductCard } from '../components/Product/ProductCard';
import { mockProducts } from '../data/mockProducts';
import { categories } from '../data/categories';
import { IslamicIcon } from '../components/Icons/IslamicIcon';
import { FunnelIcon, Squares2X2Icon, Bars3Icon } from '@heroicons/react/24/outline';

export const ShopPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popularity');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const selectedCategoryData = useMemo(() => {
    if (selectedCategory === 'all') return null;
    return categories.find(cat => cat.id === selectedCategory);
  }, [selectedCategory]);

  const filteredProducts = useMemo(() => {
    let products = mockProducts;
    
    if (selectedCategory !== 'all') {
      products = products.filter(product => product.category === selectedCategory);
    }

    if (selectedSubcategory !== 'all') {
      // فلترة حسب القسم الفرعي من خلال التاجز
      products = products.filter(product => product.tags.includes(selectedSubcategory));
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        products = [...products].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        products = [...products].sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        products = [...products].sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
        break;
      default:
        products = [...products].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return products;
  }, [selectedCategory, selectedSubcategory, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <IslamicIcon type="star" className="text-gold-500" />
              <h1 className="text-3xl font-bold text-gray-900 font-cairo">المتجر</h1>
              <IslamicIcon type="star" className="text-gold-500" />
            </div>
            <p className="text-gray-600 font-cairo">اكتشف جميع منتجاتنا الفريدة</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-8">
              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 font-cairo mb-4 flex items-center gap-2">
                  <IslamicIcon type="crescent" size="sm" className="text-gold-500" />
                  الفئات
                </h3>
                <div className="space-y-2">
                  {/* All Products */}
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedSubcategory('all');
                    }}
                    className={`block w-full text-right px-3 py-2 rounded font-cairo transition-colors ${
                      selectedCategory === 'all'
                        ? 'bg-gold-100 text-gold-700 border-gold-200 font-semibold'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    جميع المنتجات
                  </button>

                  {/* Categories */}
                  {categories.map((category) => (
                    <div key={category.id}>
                      <button
                        onClick={() => {
                          setSelectedCategory(category.id);
                          setSelectedSubcategory('all');
                        }}
                        className={`block w-full text-right px-3 py-2 rounded font-cairo transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-gold-100 text-gold-700 border-gold-200 font-semibold'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        <span className="ml-2">{category.icon}</span>
                        {category.name}
                      </button>

                      {/* Subcategories */}
                      {selectedCategory === category.id && category.subcategories && (
                        <div className="mr-4 mt-2 space-y-1">
                          <button
                            onClick={() => setSelectedSubcategory('all')}
                            className={`block w-full text-right px-3 py-1.5 rounded text-sm font-cairo transition-colors ${
                              selectedSubcategory === 'all'
                                ? 'bg-olive-50 text-olive-700 font-medium'
                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            الكل
                          </button>
                          {category.subcategories.map((subcategory) => (
                            <button
                              key={subcategory.id}
                              onClick={() => setSelectedSubcategory(subcategory.id)}
                              className={`block w-full text-right px-3 py-1.5 rounded text-sm font-cairo transition-colors ${
                                selectedSubcategory === subcategory.id
                                  ? 'bg-olive-50 text-olive-700 font-medium'
                                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                              }`}
                            >
                              {subcategory.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 font-cairo mb-4 flex items-center gap-2">
                  <IslamicIcon type="pattern" size="sm" className="text-gold-500" />
                  الترتيب
                </h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded font-cairo text-right"
                >
                  <option value="popularity">الأكثر شعبية</option>
                  <option value="newest">الأحدث</option>
                  <option value="price-low">السعر: من الأقل للأعلى</option>
                  <option value="price-high">السعر: من الأعلى للأقل</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden flex items-center gap-2 text-gray-600 hover:text-gray-900 font-cairo"
                  >
                    <FunnelIcon className="h-5 w-5" />
                    الفلاتر
                  </button>
                  
                  <p className="text-gray-600 font-cairo">
                    {filteredProducts.length} منتج
                    {selectedCategory !== 'all' && selectedCategoryData && ` في ${selectedCategoryData.name}`}
                    {selectedSubcategory !== 'all' && selectedCategoryData && 
                      ` - ${selectedCategoryData.subcategories?.find(s => s.id === selectedSubcategory)?.name}`
                    }
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gold-100 text-gold-600' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    <Squares2X2Icon className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-gold-100 text-gold-600' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    <Bars3Icon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white p-12 rounded-lg shadow-sm border border-gray-200 text-center">
                <IslamicIcon type="crescent" size="lg" className="text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 font-cairo mb-2">
                  لا توجد منتجات
                </h3>
                <p className="text-gray-600 font-cairo">
                  لم يتم العثور على منتجات في هذه الفئة
                </p>
              </div>
            ) : (
              <div className={viewMode === 'grid' 
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' 
                : 'space-y-6'
              }>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};