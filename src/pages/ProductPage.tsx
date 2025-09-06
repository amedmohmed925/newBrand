import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockProducts } from '../data/mockProducts';
import { IslamicIcon } from '../components/Icons/IslamicIcon';
import { useCart } from '../hooks/useCart';
import { StarIcon, ShoppingCartIcon, HeartIcon, ShareIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import toast from 'react-hot-toast';

export const ProductPage: React.FC = () => {
  const { id } = useParams();
  const product = mockProducts.find(p => p.id === id);
  const { addItem } = useCart();
  
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <IslamicIcon type="crescent" size="lg" className="text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 font-cairo mb-2">المنتج غير موجود</h2>
          <p className="text-gray-600 font-cairo mb-6">لم يتم العثور على المنتج المطلوب</p>
          <Link 
            to="/shop" 
            className="inline-flex items-center bg-gold-500 text-white px-6 py-3 rounded-lg font-semibold font-cairo hover:bg-gold-600 transition-colors"
          >
            العودة للمتجر
            <ChevronLeftIcon className="mr-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    );
  }

  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercentage = hasDiscount 
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('يرجى اختيار المقاس', { duration: 3000 });
      return;
    }
    if (!selectedColor) {
      toast.error('يرجى اختيار اللون', { duration: 3000 });
      return;
    }

    addItem(product, selectedSize, selectedColor, quantity);
    toast.success('تم إضافة المنتج للسلة بنجاح!', { duration: 3000 });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm font-cairo">
            <Link to="/" className="text-gray-500 hover:text-gray-700">الرئيسية</Link>
            <ChevronLeftIcon className="h-4 w-4 text-gray-400" />
            <Link to="/shop" className="text-gray-500 hover:text-gray-700">المتجر</Link>
            <ChevronLeftIcon className="h-4 w-4 text-gray-400" />
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden group">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Arabesque Frame Overlay */}
              <div className="absolute inset-4 border border-gold-200/50 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 left-0 w-8 h-8">
                  <IslamicIcon type="pattern" size="sm" className="text-gold-300" />
                </div>
                <div className="absolute top-0 right-0 w-8 h-8 transform rotate-90">
                  <IslamicIcon type="pattern" size="sm" className="text-gold-300" />
                </div>
                <div className="absolute bottom-0 left-0 w-8 h-8 transform -rotate-90">
                  <IslamicIcon type="pattern" size="sm" className="text-gold-300" />
                </div>
                <div className="absolute bottom-0 right-0 w-8 h-8 transform rotate-180">
                  <IslamicIcon type="pattern" size="sm" className="text-gold-300" />
                </div>
              </div>

              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                  >
                    <ChevronRightIcon className="h-5 w-5 text-gray-600" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                  >
                    <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
                  </button>
                </>
              )}

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.limited && (
                  <div className="bg-gold-500 text-white text-xs px-3 py-1 rounded-full flex items-center font-cairo">
                    <IslamicIcon type="star" size="sm" className="ml-1" />
                    محدود
                  </div>
                )}
                {product.new && (
                  <div className="bg-olive-500 text-white text-xs px-3 py-1 rounded-full font-cairo">
                    جديد
                  </div>
                )}
                {hasDiscount && (
                  <div className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-cairo">
                    -{discountPercentage}%
                  </div>
                )}
              </div>
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === index
                        ? 'border-gold-500'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-500 font-cairo mb-2">
                <IslamicIcon type="crescent" size="sm" className="text-gold-500" />
                <span>{product.category}</span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 font-cairo mb-4">
                {product.name}
              </h1>
              
              <p className="text-lg text-gray-600 font-cairo leading-relaxed mb-4">
                {product.description}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIconSolid key={i} className="h-5 w-5 text-gold-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-500 font-cairo">(24 تقييم)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-gray-900 font-cairo">
                  {product.price} ر.س
                </span>
                {hasDiscount && (
                  <span className="text-xl text-gray-500 line-through font-cairo">
                    {product.originalPrice} ر.س
                  </span>
                )}
                {hasDiscount && (
                  <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded font-cairo">
                    وفر {product.originalPrice! - product.price} ر.س
                  </span>
                )}
              </div>
            </div>

            {/* Size Selection */}
            {product.sizes.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 font-cairo">المقاس</h3>
                  <button
                    onClick={() => setShowSizeGuide(true)}
                    className="text-sm text-gold-600 hover:text-gold-700 font-cairo underline"
                  >
                    دليل المقاسات
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-lg font-cairo transition-all ${
                        selectedSize === size
                          ? 'border-gold-500 bg-gold-50 text-gold-700'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colors.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 font-cairo mb-4">اللون</h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border rounded-lg font-cairo transition-all flex items-center gap-2 ${
                        selectedColor === color
                          ? 'border-gold-500 bg-gold-50 text-gold-700'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      <div
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{
                          backgroundColor: 
                            color === 'أبيض' ? '#ffffff' :
                            color === 'أسود' ? '#000000' :
                            color === 'بيج' ? '#F5F5DC' :
                            color === 'رمادي' ? '#808080' :
                            color === 'كحلي' ? '#000080' :
                            color === 'ذهبي' ? '#FFD700' :
                            color === 'وردي' ? '#FFC0CB' :
                            color === 'أزرق' ? '#0000FF' :
                            '#D1D5DB'
                        }}
                      />
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 font-cairo mb-4">الكمية</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-600 hover:text-gray-800"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 font-cairo">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-600 hover:text-gray-800"
                  >
                    +
                  </button>
                </div>
                <span className="text-sm text-gray-500 font-cairo">
                  متوفر: {product.stock} قطعة
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-gold-500 text-white py-4 px-6 rounded-lg font-semibold font-cairo hover:bg-gold-600 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <ShoppingCartIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                إضافة للسلة
              </button>
              
              <div className="flex gap-4">
                <button className="flex-1 border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-cairo hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <HeartIcon className="h-5 w-5" />
                  المفضلة
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-cairo hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <ShareIcon className="h-5 w-5" />
                  مشاركة
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="border-t border-gray-200 pt-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <IslamicIcon type="star" size="sm" className="text-gold-500" />
                  <span className="text-gray-700 font-cairo">شحن مجاني للطلبات فوق 200 ريال</span>
                </div>
                <div className="flex items-center gap-3">
                  <IslamicIcon type="crescent" size="sm" className="text-olive-500" />
                  <span className="text-gray-700 font-cairo">إمكانية الإرجاع خلال 7 أيام</span>
                </div>
                <div className="flex items-center gap-3">
                  <IslamicIcon type="pattern" size="sm" className="text-gold-500" />
                  <span className="text-gray-700 font-cairo">جودة عالية ومواد فاخرة</span>
                </div>
              </div>
            </div>

            {/* Product Tags */}
            {product.tags.length > 0 && (
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-semibold text-gray-900 font-cairo mb-3">العلامات</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-cairo"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Size Guide Modal */}
      {showSizeGuide && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 font-cairo">دليل المقاسات</h2>
                <button
                  onClick={() => setShowSizeGuide(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm font-cairo">
                  <thead>
                    <tr className="border-b">
                      <th className="text-right py-2">المقاس</th>
                      <th className="text-right py-2">الصدر (سم)</th>
                      <th className="text-right py-2">الخصر (سم)</th>
                      <th className="text-right py-2">الطول (سم)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b"><td className="py-2">S</td><td>86-90</td><td>70-74</td><td>140</td></tr>
                    <tr className="border-b"><td className="py-2">M</td><td>90-94</td><td>74-78</td><td>142</td></tr>
                    <tr className="border-b"><td className="py-2">L</td><td>94-98</td><td>78-82</td><td>144</td></tr>
                    <tr className="border-b"><td className="py-2">XL</td><td>98-102</td><td>82-86</td><td>146</td></tr>
                    <tr><td className="py-2">XXL</td><td>102-106</td><td>86-90</td><td>148</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};