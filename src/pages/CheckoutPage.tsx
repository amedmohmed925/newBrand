import React, { useState } from 'react';
import { useCart } from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';
import { IslamicIcon } from '../components/Icons/IslamicIcon';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';

interface CheckoutFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  notes?: string;
  paymentMethod: 'cod' | 'online';
  acceptTerms: boolean;
}

const schema = yup.object({
  fullName: yup.string().required('الاسم الكامل مطلوب'),
  email: yup.string().email('البريد الإلكتروني غير صحيح').required('البريد الإلكتروني مطلوب'),
  phone: yup.string().required('رقم الهاتف مطلوب'),
  address: yup.string().required('العنوان مطلوب'),
  city: yup.string().required('المدينة مطلوبة'),
  postalCode: yup.string().required('الرمز البريدي مطلوب'),
  notes: yup.string(),
  paymentMethod: yup.string().oneOf(['cod', 'online']).required('طريقة الدفع مطلوبة'),
  acceptTerms: yup.boolean().oneOf([true], 'يجب الموافقة على الشروط والأحكام')
});

export const CheckoutPage: React.FC = () => {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const { register, handleSubmit, formState: { errors }, watch } = useForm<CheckoutFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      paymentMethod: 'cod'
    }
  });

  const paymentMethod = watch('paymentMethod');

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  const onSubmit = async (data: CheckoutFormData) => {
    setIsProcessing(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const orderId = 'ORD-' + Date.now();
      
      // Clear cart and redirect to success
      clearCart();
      toast.success('تم إرسال طلبك بنجاح!');
      navigate('/order-confirmation', { 
        state: { 
          orderId,
          customerData: data,
          items,
          total
        } 
      });
      
    } catch (error) {
      toast.error('حدث خطأ في إرسال الطلب. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Islamic Pattern */}
      <div className="relative bg-gradient-to-l from-gold-50 to-white border-b border-gray-200">
        <div className="absolute inset-0 opacity-5">
          <IslamicIcon type="pattern" className="w-full h-full text-gold-500" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <IslamicIcon type="crescent" className="text-gold-500" />
              <h1 className="text-3xl font-bold text-gray-900 font-cairo">إتمام الطلب</h1>
              <IslamicIcon type="crescent" className="text-gold-500" />
            </div>
            <p className="text-gray-600 font-cairo">املأ البيانات التالية لإتمام طلبك</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Customer Information */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 font-cairo mb-6 flex items-center gap-2">
                  <IslamicIcon type="star" size="sm" className="text-gold-500" />
                  معلومات العميل
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                      الاسم الكامل *
                    </label>
                    <input
                      {...register('fullName')}
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg font-cairo text-right focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                      placeholder="أدخل الاسم الكامل"
                    />
                    {errors.fullName && (
                      <p className="text-red-600 text-sm mt-1 font-cairo">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                      البريد الإلكتروني *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      className="w-full p-3 border border-gray-300 rounded-lg font-cairo text-right focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                      placeholder="example@email.com"
                      dir="ltr"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1 font-cairo">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                      رقم الهاتف *
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full p-3 border border-gray-300 rounded-lg font-cairo text-right focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                      placeholder="05xxxxxxxx"
                      dir="ltr"
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-sm mt-1 font-cairo">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                      المدينة *
                    </label>
                    <input
                      {...register('city')}
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg font-cairo text-right focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                      placeholder="الرياض"
                    />
                    {errors.city && (
                      <p className="text-red-600 text-sm mt-1 font-cairo">{errors.city.message}</p>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                    العنوان التفصيلي *
                  </label>
                  <textarea
                    {...register('address')}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg font-cairo text-right focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                    placeholder="الحي، الشارع، رقم المبنى، رقم الشقة"
                  />
                  {errors.address && (
                    <p className="text-red-600 text-sm mt-1 font-cairo">{errors.address.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                      الرمز البريدي *
                    </label>
                    <input
                      {...register('postalCode')}
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg font-cairo text-right focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                      placeholder="12345"
                      dir="ltr"
                    />
                    {errors.postalCode && (
                      <p className="text-red-600 text-sm mt-1 font-cairo">{errors.postalCode.message}</p>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                    ملاحظات إضافية
                  </label>
                  <textarea
                    {...register('notes')}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg font-cairo text-right focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                    placeholder="أي ملاحظات خاصة بالطلب..."
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 font-cairo mb-6 flex items-center gap-2">
                  <IslamicIcon type="crescent" size="sm" className="text-gold-500" />
                  طريقة الدفع
                </h2>

                <div className="space-y-4">
                  <label className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:border-gold-300 cursor-pointer transition-colors">
                    <input
                      {...register('paymentMethod')}
                      type="radio"
                      value="cod"
                      className="mt-1"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 font-cairo">الدفع عند الاستلام</div>
                      <div className="text-sm text-gray-600 font-cairo mt-1">
                        ادفع نقداً أو بالبطاقة عند استلام الطلب
                      </div>
                    </div>
                  </label>

                  <label className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:border-gold-300 cursor-pointer transition-colors">
                    <input
                      {...register('paymentMethod')}
                      type="radio"
                      value="online"
                      className="mt-1"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 font-cairo">الدفع الإلكتروني</div>
                      <div className="text-sm text-gray-600 font-cairo mt-1">
                        ادفع بالبطاقة الائتمانية أو العملة الرقمية
                      </div>
                    </div>
                  </label>
                </div>
                
                {errors.paymentMethod && (
                  <p className="text-red-600 text-sm mt-2 font-cairo">{errors.paymentMethod.message}</p>
                )}
              </div>

              {/* Terms and Conditions */}
              <div className="bg-gold-50 p-6 rounded-lg border border-gold-200">
                <div className="flex items-start gap-3">
                  <input
                    {...register('acceptTerms')}
                    type="checkbox"
                    className="mt-1"
                  />
                  <div className="text-sm text-gray-700 font-cairo">
                    <span>أوافق على </span>
                    <a href="/terms" className="text-gold-600 hover:text-gold-700 underline">الشروط والأحكام</a>
                    <span> و</span>
                    <a href="/privacy" className="text-gold-600 hover:text-gold-700 underline">سياسة الخصوصية</a>
                    <div className="mt-2 flex items-center gap-2">
                      <IslamicIcon type="star" size="sm" className="text-gold-500" />
                      <span className="font-semibold">سياسة الاسترجاع: يمكنك إرجاع المنتج خلال 7 أيام من الاستلام.</span>
                    </div>
                  </div>
                </div>
                {errors.acceptTerms && (
                  <p className="text-red-600 text-sm mt-2 font-cairo">{errors.acceptTerms.message}</p>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-8">
                <h2 className="text-xl font-bold text-gray-900 font-cairo mb-6 flex items-center gap-2">
                  <IslamicIcon type="pattern" size="sm" className="text-gold-500" />
                  ملخص الطلب
                </h2>

                {/* Items */}
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex gap-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 font-cairo text-sm truncate">
                          {item.product.name}
                        </h4>
                        <p className="text-xs text-gray-600 font-cairo">
                          {item.size} • {item.color} • {item.quantity}×
                        </p>
                        <p className="text-sm font-bold text-gray-900 font-cairo">
                          {item.product.price * item.quantity} ر.س
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="border-t border-gray-200 pt-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-cairo">المجموع الفرعي</span>
                    <span className="font-cairo">{total} ر.س</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-cairo">الشحن</span>
                    <span className="font-cairo text-green-600">مجاني</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t">
                    <span className="text-gray-900 font-cairo">المجموع الكلي</span>
                    <span className="text-gray-900 font-cairo">{total} ر.س</span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full mt-6 bg-gold-500 text-white py-4 px-6 rounded-lg font-semibold font-cairo hover:bg-gold-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      جاري المعالجة...
                    </>
                  ) : (
                    <>
                      <IslamicIcon type="star" size="sm" />
                      {paymentMethod === 'cod' ? 'تأكيد الطلب' : 'الدفع وتأكيد الطلب'}
                    </>
                  )}
                </button>

                {/* Security Notice */}
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 text-xs text-gray-600 font-cairo">
                    <IslamicIcon type="crescent" size="sm" className="text-gray-400" />
                    <span>بياناتك آمنة ومشفرة بأحدث تقنيات الأمان</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};