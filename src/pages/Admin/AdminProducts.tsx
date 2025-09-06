import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IslamicIcon } from '../../components/Icons/IslamicIcon';
import { formatPrice } from '../../utils/priceUtils';
import { mockProducts } from '../../data/mockProducts';
import { 
  PlusIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  PhotoIcon
} from '@heroicons/react/24/outline';

export const AdminProducts: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [products] = useState(mockProducts);

  const categories = ['جميع الفئات', 'ثياب رجالي', 'عبايات', 'قمصان', 'تنانير', 'ملابس خارجية', 'حجاب واكسسوارات'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !filterCategory || filterCategory === 'جميع الفئات' || product.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const getStockStatus = (stock: number) => {
    if (stock === 0) return { text: 'نفدت الكمية', color: 'bg-red-100 text-red-800' };
    if (stock < 5) return { text: 'كمية قليلة', color: 'bg-yellow-100 text-yellow-800' };
    return { text: 'متوفر', color: 'bg-green-100 text-green-800' };
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 font-cairo mb-2">إدارة المنتجات</h1>
          <p className="text-gray-600 font-cairo">إدارة وتحديث منتجات المتجر</p>
        </div>
        <Link
          to="/admin/products/new"
          className="mt-4 md:mt-0 inline-flex items-center bg-gold-500 text-white px-6 py-3 rounded-lg font-semibold font-cairo hover:bg-gold-600 transition-colors"
        >
          <PlusIcon className="h-5 w-5 ml-2" />
          إضافة منتج جديد
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="البحث في المنتجات..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
            />
          </div>
          
          <div className="relative">
            <FunnelIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo appearance-none"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center text-sm text-gray-600 font-cairo">
            <span>إجمالي المنتجات: {filteredProducts.length}</span>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">المنتج</th>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">الفئة</th>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">السعر</th>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">المخزون</th>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">الحالة</th>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredProducts.map((product) => {
                const stockStatus = getStockStatus(product.stock);
                return (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-12 w-12">
                          {product.images?.[0] ? (
                            <img
                              className="h-12 w-12 rounded-lg object-cover"
                              src={product.images[0]}
                              alt={product.name}
                            />
                          ) : (
                            <div className="h-12 w-12 rounded-lg bg-gray-200 flex items-center justify-center">
                              <PhotoIcon className="h-6 w-6 text-gray-400" />
                            </div>
                          )}
                        </div>
                        <div className="mr-4">
                          <div className="text-sm font-medium text-gray-900 font-cairo">
                            {product.name}
                          </div>
                          <div className="text-sm text-gray-500 font-cairo">
                            ID: {product.id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 font-cairo">
                        {product.category}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm font-medium text-gray-900 font-cairo">
                        {formatPrice(product.price)}
                      </div>
                      {product.originalPrice && (
                        <div className="text-sm text-gray-500 line-through font-cairo">
                          {formatPrice(product.originalPrice)}
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm text-gray-900 font-cairo">
                        {product.stock} قطعة
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium font-cairo ${stockStatus.color}`}>
                        {stockStatus.text}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <button
                          className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors"
                          title="عرض"
                        >
                          <EyeIcon className="h-4 w-4" />
                        </button>
                        <button
                          className="p-2 text-green-600 hover:text-green-800 hover:bg-green-50 rounded-lg transition-colors"
                          title="تحرير"
                        >
                          <PencilIcon className="h-4 w-4" />
                        </button>
                        <button
                          className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors"
                          title="حذف"
                        >
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900 font-cairo">لا توجد منتجات</h3>
            <p className="mt-1 text-sm text-gray-500 font-cairo">ابدأ بإضافة منتج جديد</p>
            <div className="mt-6">
              <Link
                to="/admin/products/new"
                className="inline-flex items-center bg-gold-500 text-white px-4 py-2 rounded-lg font-semibold font-cairo hover:bg-gold-600 transition-colors"
              >
                <PlusIcon className="h-4 w-4 ml-2" />
                إضافة منتج جديد
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
