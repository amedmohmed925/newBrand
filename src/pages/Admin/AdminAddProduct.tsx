import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IslamicIcon } from '../../components/Icons/IslamicIcon';
import { 
  PhotoIcon,
  XMarkIcon,
  PlusIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

interface ProductForm {
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  price: number;
  originalPrice?: number;
  category: string;
  sizes: string[];
  colors: string[];
  stock: number;
  images: string[];
  featured: boolean;
  new: boolean;
  limited: boolean;
  tags: string[];
}

export const AdminAddProduct: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<ProductForm>({
    name: '',
    nameEn: '',
    description: '',
    descriptionEn: '',
    price: 0,
    originalPrice: undefined,
    category: '',
    sizes: [],
    colors: [],
    stock: 0,
    images: [],
    featured: false,
    new: false,
    limited: false,
    tags: []
  });

  const categories = [
    'ثياب رجالي',
    'عبايات', 
    'قمصان',
    'تنانير',
    'ملابس خارجية',
    'حجاب واكسسوارات'
  ];

  const availableSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'واحد'];
  const availableColors = ['أبيض', 'أسود', 'كحلي', 'رمادي', 'بيج', 'ذهبي', 'فضي', 'وردي', 'أزرق', 'أخضر', 'بني'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleArrayToggle = (array: string[], item: string, field: keyof ProductForm) => {
    const newArray = array.includes(item)
      ? array.filter(i => i !== item)
      : [...array, item];
    setFormData(prev => ({ ...prev, [field]: newArray }));
  };

  const handleImageAdd = () => {
    const url = prompt('أدخل رابط الصورة:');
    if (url) {
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, url]
      }));
    }
  };

  const handleImageRemove = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleTagAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const value = e.currentTarget.value.trim();
      if (value && !formData.tags.includes(value)) {
        setFormData(prev => ({
          ...prev,
          tags: [...prev.tags, value]
        }));
        e.currentTarget.value = '';
      }
    }
  };

  const handleTagRemove = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tag)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // التحقق من البيانات المطلوبة
    if (!formData.name || !formData.description || !formData.price || !formData.category) {
      toast.error('يرجى ملء جميع الحقول المطلوبة');
      setIsLoading(false);
      return;
    }

    try {
      // محاكاة حفظ المنتج
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('تم إضافة المنتج بنجاح!');
      navigate('/admin/products');
    } catch (error) {
      toast.error('حدث خطأ في إضافة المنتج');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 font-cairo mb-2">إضافة منتج جديد</h1>
          <p className="text-gray-600 font-cairo">أضف منتج جديد إلى المتجر</p>
        </div>
        <button
          onClick={() => navigate('/admin/products')}
          className="inline-flex items-center text-gray-600 hover:text-gray-800 font-cairo"
        >
          <ArrowRightIcon className="h-5 w-5 ml-2" />
          العودة إلى المنتجات
        </button>
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 font-cairo mb-4 flex items-center gap-2">
                <IslamicIcon type="star" size="sm" className="text-gold-500" />
                المعلومات الأساسية
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                    اسم المنتج (عربي) *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                    اسم المنتج (إنجليزي)
                  </label>
                  <input
                    type="text"
                    name="nameEn"
                    value={formData.nameEn}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                  وصف المنتج (عربي) *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                  وصف المنتج (إنجليزي)
                </label>
                <textarea
                  name="descriptionEn"
                  value={formData.descriptionEn}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                />
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 font-cairo mb-4 flex items-center gap-2">
                <IslamicIcon type="pattern" size="sm" className="text-gold-500" />
                التسعير
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                    السعر الحالي (ج.م) *
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    min="0"
                    step="0.01"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                    السعر الأصلي (ج.م)
                  </label>
                  <input
                    type="number"
                    name="originalPrice"
                    value={formData.originalPrice || ''}
                    onChange={handleInputChange}
                    min="0"
                    step="0.01"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                    الكمية المتوفرة *
                  </label>
                  <input
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Category and Variants */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 font-cairo mb-4 flex items-center gap-2">
                <IslamicIcon type="crescent" size="sm" className="text-gold-500" />
                التصنيف والمتغيرات
              </h2>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                  التصنيف *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
                  required
                >
                  <option value="">اختر التصنيف</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                  المقاسات المتوفرة
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableSizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => handleArrayToggle(formData.sizes, size, 'sizes')}
                      className={`px-3 py-2 rounded-lg border font-cairo text-sm transition-colors ${
                        formData.sizes.includes(size)
                          ? 'bg-gold-500 text-white border-gold-500'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-gold-500'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                  الألوان المتوفرة
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableColors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => handleArrayToggle(formData.colors, color, 'colors')}
                      className={`px-3 py-2 rounded-lg border font-cairo text-sm transition-colors ${
                        formData.colors.includes(color)
                          ? 'bg-gold-500 text-white border-gold-500'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-gold-500'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Images */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 font-cairo mb-4">صور المنتج</h3>
              
              <div className="space-y-4">
                {formData.images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image}
                      alt={`Product ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => handleImageRemove(index)}
                      className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                    >
                      <XMarkIcon className="h-4 w-4" />
                    </button>
                  </div>
                ))}
                
                <button
                  type="button"
                  onClick={handleImageAdd}
                  className="w-full py-8 border-2 border-dashed border-gray-300 rounded-lg hover:border-gold-500 transition-colors flex flex-col items-center justify-center text-gray-500 hover:text-gold-500"
                >
                  <PhotoIcon className="h-8 w-8 mb-2" />
                  <span className="font-cairo">إضافة صورة</span>
                </button>
              </div>
            </div>

            {/* Settings */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 font-cairo mb-4">إعدادات المنتج</h3>
              
              <div className="space-y-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded"
                  />
                  <span className="mr-2 text-sm text-gray-700 font-cairo">منتج مميز</span>
                </label>
                
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="new"
                    checked={formData.new}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded"
                  />
                  <span className="mr-2 text-sm text-gray-700 font-cairo">منتج جديد</span>
                </label>
                
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="limited"
                    checked={formData.limited}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded"
                  />
                  <span className="mr-2 text-sm text-gray-700 font-cairo">إصدار محدود</span>
                </label>
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 font-cairo mb-4">العلامات</h3>
              
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="اكتب علامة واضغط Enter"
                  onKeyDown={handleTagAdd}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
                />
                
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 font-cairo"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => handleTagRemove(tag)}
                        className="mr-2 text-gray-400 hover:text-gray-600"
                      >
                        <XMarkIcon className="h-4 w-4" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gold-500 text-white py-4 px-6 rounded-lg font-semibold font-cairo hover:bg-gold-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white ml-2"></div>
                  جاري الحفظ...
                </div>
              ) : (
                <>
                  <PlusIcon className="h-5 w-5 ml-2" />
                  إضافة المنتج
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
