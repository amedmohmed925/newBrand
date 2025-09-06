import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { usePageTitle } from '../hooks/usePageTitle';
import { formatPrice } from '../utils/priceUtils';
import { IslamicIcon } from '../components/Icons/IslamicIcon';
import { cartUtils } from '../utils/cartUtils';
import { TrashIcon, PlusIcon, MinusIcon, ShoppingBagIcon, ClockIcon } from '@heroicons/react/24/outline';

export const CartPage: React.FC = () => {
  const { items, updateQuantity, removeItem, total, clearCart } = useCart();
  const cartSummary = cartUtils.getCartSummary();
  
  // تحديث تايتل الصفحة مع عدد العناصر
  usePageTitle({ 
    title: items.length > 0 ? `عربة التسوق (${items.length} منتج)` : 'عربة التسوق'
  });
  
  // تحديث تايتل الصفحة مع عدد العناصر
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  usePageTitle({ 
    title: items.length === 0 ? 'عربة التسوق فارغة' : `عربة التسوق (${itemCount} عنصر)`
  });

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="bg-white p-12 rounded-lg shadow-sm">
              <ShoppingBagIcon className="mx-auto h-16 w-16 text-gray-300 mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 font-cairo mb-4">
                السلة فارغة
              </h2>
              <p className="text-gray-600 font-cairo mb-8">
                لا يوجد منتجات في سلة التسوق
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center bg-gold-500 text-white px-8 py-3 rounded-lg font-semibold font-cairo hover:bg-gold-600 transition-colors"
              >
                تسوق الآن
                <IslamicIcon type="star" size="sm" className="mr-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <IslamicIcon type="star" className="text-gold-500" />
              <h1 className="text-3xl font-bold text-gray-900 font-cairo">سلة التسوق</h1>
              <IslamicIcon type="star" className="text-gold-500" />
            </div>
            <p className="text-gray-600 font-cairo">{items.length} منتج في السلة</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div key={`${item.product.id}-${item.size}-${item.color}`} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex gap-6">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 font-cairo">
                        {item.product.name}
                      </h3>
                      <p className="text-gray-600 font-cairo text-sm">
                        المقاس: {item.size} • اللون: {item.color}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                            className="p-2 text-gray-600 hover:text-gray-800"
                          >
                            <MinusIcon className="h-4 w-4" />
                          </button>
                          <span className="px-3 py-2 font-cairo">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                            className="p-2 text-gray-600 hover:text-gray-800"
                          >
                            <PlusIcon className="h-4 w-4" />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeItem(item.product.id, item.size, item.color)}
                          className="p-2 text-red-500 hover:text-red-700"
                        >
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="text-left">
                        <p className="text-lg font-bold text-gray-900 font-cairo">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                        <p className="text-sm text-gray-500 font-cairo">
                          {formatPrice(item.product.price)} × {item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Clear Cart */}
            <div className="flex justify-between items-center pt-4">
              <button
                onClick={clearCart}
                className="text-red-600 hover:text-red-700 font-cairo text-sm"
              >
                مسح السلة
              </button>
              <Link
                to="/shop"
                className="text-gold-600 hover:text-gold-700 font-cairo text-sm"
              >
                متابعة التسوق
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 font-cairo mb-6 flex items-center gap-2">
                <IslamicIcon type="crescent" size="sm" className="text-gold-500" />
                ملخص الطلب
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600 font-cairo">المجموع الفرعي</span>
                  <span className="font-cairo">{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-cairo">الشحن</span>
                  <span className="font-cairo text-green-600">مجاني</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-gray-900 font-cairo">المجموع الكلي</span>
                    <span className="text-gray-900 font-cairo">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="bg-gold-50 p-4 rounded-lg mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <IslamicIcon type="star" size="sm" className="text-gold-500" />
                  <span className="text-sm font-semibold text-gold-800 font-cairo">شحن مجاني</span>
                </div>
                <p className="text-sm text-gold-700 font-cairo">
                  للطلبات فوق 800 جنيه مصري
                </p>
                {cartSummary.lastUpdated && (
                  <div className="flex items-center gap-1 mt-2 text-xs text-gold-600">
                    <ClockIcon className="h-3 w-3" />
                    <span className="font-cairo">
                      آخر تحديث: {new Date(cartSummary.lastUpdated).toLocaleString('ar-SA')}
                    </span>
                  </div>
                )}
              </div>

              <Link
                to="/checkout"
                className="w-full bg-gold-500 text-white py-4 px-6 rounded-lg font-semibold font-cairo hover:bg-gold-600 transition-colors text-center block"
              >
                إتمام الطلب
              </Link>

              <div className="mt-4 text-center">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 font-cairo">
                  <IslamicIcon type="pattern" size="sm" className="text-gray-400" />
                  <span>إرجاع مجاني خلال 7 أيام</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};