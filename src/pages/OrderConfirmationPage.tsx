import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { IslamicIcon } from '../components/Icons/IslamicIcon';
import { usePageTitle } from '../hooks/usePageTitle';
import { formatPrice } from '../utils/priceUtils';
import { CheckCircleIcon, PrinterIcon, ShareIcon } from '@heroicons/react/24/outline';

export const OrderConfirmationPage: React.FC = () => {
  const location = useLocation();
  const { orderId, customerData, items, total } = location.state || {};
  
  // تحديث تايتل الصفحة مع رقم الطلب
  usePageTitle({ 
    title: orderId ? `تأكيد الطلب #${orderId}` : 'تأكيد الطلب'
  });

  if (!orderId) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 font-cairo">لم يتم العثور على معلومات الطلب</p>
          <Link to="/" className="text-gold-600 hover:text-gold-700 font-cairo">العودة للرئيسية</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Success Header with Islamic Pattern */}
      <div className="relative bg-gradient-to-l from-green-50 to-white border-b border-gray-200">
        <div className="absolute inset-0 opacity-5 -z-10">
          <IslamicIcon type="pattern" className="w-full h-full text-green-500" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <CheckCircleIcon className="mx-auto h-16 w-16 text-green-500 mb-6" />
          <div className="flex items-center justify-center gap-3 mb-4">
            <IslamicIcon type="star" className="text-green-500" />
            <h1 className="text-3xl font-bold text-gray-900 font-cairo">تم تأكيد طلبك بنجاح!</h1>
            <IslamicIcon type="star" className="text-green-500" />
          </div>
          <p className="text-xl text-gray-600 font-cairo mb-2">شكراً لك على تسوقك من رونق</p>
          <p className="text-lg text-green-600 font-cairo">رقم الطلب: #{orderId}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Details */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 font-cairo mb-6 flex items-center gap-2">
              <IslamicIcon type="crescent" size="sm" className="text-gold-500" />
              تفاصيل الطلب
            </h2>

            <div className="space-y-6">
              {/* Customer Info */}
              <div>
                <h3 className="font-semibold text-gray-900 font-cairo mb-3">معلومات العميل</h3>
                <div className="space-y-2 text-sm text-gray-600 font-cairo">
                  <p><span className="font-medium">الاسم:</span> {customerData?.fullName}</p>
                  <p><span className="font-medium">البريد:</span> {customerData?.email}</p>
                  <p><span className="font-medium">الهاتف:</span> {customerData?.phone}</p>
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h3 className="font-semibold text-gray-900 font-cairo mb-3">عنوان الشحن</h3>
                <div className="text-sm text-gray-600 font-cairo">
                  <p>{customerData?.address}</p>
                  <p>{customerData?.city}, {customerData?.postalCode}</p>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h3 className="font-semibold text-gray-900 font-cairo mb-3">طريقة الدفع</h3>
                <p className="text-sm text-gray-600 font-cairo">
                  {customerData?.paymentMethod === 'cod' ? 'الدفع عند الاستلام' : 'الدفع الإلكتروني'}
                </p>
              </div>

              {/* Notes */}
              {customerData?.notes && (
                <div>
                  <h3 className="font-semibold text-gray-900 font-cairo mb-3">ملاحظات</h3>
                  <p className="text-sm text-gray-600 font-cairo">{customerData.notes}</p>
                </div>
              )}
            </div>
          </div>

          {/* Order Items */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 font-cairo mb-6 flex items-center gap-2">
              <IslamicIcon type="pattern" size="sm" className="text-gold-500" />
              المنتجات المطلوبة
            </h2>

            <div className="space-y-4 mb-6">
              {items?.map((item: any) => (
                <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 font-cairo">
                      {item.product.name}
                    </h4>
                    <p className="text-sm text-gray-600 font-cairo">
                      المقاس: {item.size} • اللون: {item.color}
                    </p>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm text-gray-600 font-cairo">
                        الكمية: {item.quantity}
                      </span>
                      <span className="font-bold text-gray-900 font-cairo">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Total */}
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between text-xl font-bold text-gray-900 font-cairo">
                <span>المجموع الكلي</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-8 bg-gold-50 p-8 rounded-lg border border-gold-200">
          <h2 className="text-xl font-bold text-gray-900 font-cairo mb-6 flex items-center gap-2">
            <IslamicIcon type="star" className="text-gold-500" />
            الخطوات التالية
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-gold-600 font-bold font-cairo">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 font-cairo mb-2">تأكيد الطلب</h3>
              <p className="text-sm text-gray-600 font-cairo">سنرسل لك رسالة تأكيد عبر البريد الإلكتروني خلال دقائق</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-gold-600 font-bold font-cairo">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 font-cairo mb-2">تحضير الطلب</h3>
              <p className="text-sm text-gray-600 font-cairo">سنبدأ في تحضير طلبك وتغليفه بعناية فائقة</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-gold-600 font-bold font-cairo">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 font-cairo mb-2">الشحن والتوصيل</h3>
              <p className="text-sm text-gray-600 font-cairo">سيصلك الطلب خلال 2-5 أيام عمل حسب موقعك</p>
            </div>
          </div>
        </div>

        {/* Contact & Actions */}
        <div className="mt-8 bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 font-cairo mb-2">
                هل تحتاج لمساعدة؟
              </h3>
              <p className="text-gray-600 font-cairo mb-3">
                تواصل معنا عبر واتساب أو البريد الإلكتروني
              </p>
              <div className="flex items-center gap-4 text-sm">
                <a href="https://wa.me/201012345678" className="text-green-600 hover:text-green-700 font-cairo">
                  واتساب: +20 10 1234 5678
                </a>
                <a href="mailto:support@rawnaq.com" className="text-gold-600 hover:text-gold-700 font-cairo">
                  support@rawnaq.com
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-cairo">
                <PrinterIcon className="h-4 w-4" />
                طباعة
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-cairo">
                <ShareIcon className="h-4 w-4" />
                مشاركة
              </button>
              <Link
                to="/shop"
                className="flex items-center gap-2 px-6 py-2 bg-gold-500 text-white rounded-lg hover:bg-gold-600 transition-colors font-cairo"
              >
                <IslamicIcon type="star" size="sm" />
                متابعة التسوق
              </Link>
            </div>
          </div>
        </div>

        {/* Return Policy Reminder */}
        <div className="mt-6 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600 font-cairo">
            <IslamicIcon type="crescent" size="sm" className="text-gold-400" />
            <span>تذكير: يمكنك إرجاع أو استبدال منتجاتك خلال 7 أيام من الاستلام</span>
          </div>
        </div>
      </div>
    </div>
  );
};