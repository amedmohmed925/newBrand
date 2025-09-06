import React, { useState } from 'react';
import { IslamicIcon } from '../components/Icons/IslamicIcon';
import { usePageTitle } from '../hooks/usePageTitle';
import toast from 'react-hot-toast';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

export const ContactPage: React.FC = () => {
  usePageTitle({ title: 'تواصل معنا' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'الهاتف',
      details: ['+20 10 1234 5678', '+20 2 2345 6789'],
      color: 'text-green-600'
    },
    {
      icon: EnvelopeIcon,
      title: 'البريد الإلكتروني',
      details: ['info@ronaq.com', 'support@ronaq.com'],
      color: 'text-blue-600'
    },
    {
      icon: MapPinIcon,
      title: 'العنوان',
      details: ['القاهرة، جمهورية مصر العربية', 'شارع التحرير، وسط البلد'],
      color: 'text-red-600'
    },
    {
      icon: ClockIcon,
      title: 'ساعات العمل',
      details: ['السبت - الخميس: 9:00 ص - 10:00 م', 'الجمعة: 2:00 م - 10:00 م'],
      color: 'text-purple-600'
    }
  ];

  const socialMedia = [
    { name: 'Instagram', icon: '📷', url: '#', followers: '150K' },
    { name: 'Twitter', icon: '🐦', url: '#', followers: '80K' },
    { name: 'Facebook', icon: '📘', url: '#', followers: '200K' },
    { name: 'TikTok', icon: '🎵', url: '#', followers: '300K' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // محاكاة إرسال الفورم
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً', {
        icon: '✅',
        duration: 5000
      });
      
      // إعادة تعيين الفورم
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch {
      toast.error('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-l from-gold-50 to-white">
        <div className="absolute inset-0 opacity-5">
          <IslamicIcon type="pattern" className="w-full h-full text-gold-500" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-4">
                <IslamicIcon type="star" size="md" className="text-gold-500" />
                <div className="w-12 h-0.5 bg-gold-300"></div>
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-gold-500" />
                <div className="w-12 h-0.5 bg-gold-300"></div>
                <IslamicIcon type="star" size="md" className="text-gold-500" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-cairo mb-4">
              تواصل معنا
            </h1>
            
            <p className="text-xl text-gold-600 font-cairo mb-6">
              نحن هنا لمساعدتك والإجابة على جميع استفساراتك
            </p>
            
            <p className="text-lg text-gray-600 font-cairo max-w-2xl mx-auto">
              فريق خدمة العملاء لدينا جاهز للمساعدة في أي وقت
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <IslamicIcon type="crescent" size="md" className="text-gold-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 font-cairo mb-4">
              معلومات التواصل
            </h2>
            <p className="text-gray-600 font-cairo">
              طرق متعددة للتواصل معنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  info.color === 'text-green-600' ? 'bg-green-100' :
                  info.color === 'text-blue-600' ? 'bg-blue-100' :
                  info.color === 'text-red-600' ? 'bg-red-100' :
                  'bg-purple-100'
                }`}>
                  <info.icon className={`h-6 w-6 ${info.color}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 font-cairo mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 font-cairo text-sm mb-1">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <IslamicIcon type="star" className="text-gold-500 mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 font-cairo mb-4">
                  أرسل لنا رسالة
                </h2>
                <p className="text-gray-600 font-cairo">
                  املأ النموذج أدناه وسنتواصل معك في أقرب وقت
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent font-cairo"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent font-cairo"
                      placeholder="05xxxxxxxx"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent font-cairo"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                    موضوع الرسالة *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent font-cairo"
                  >
                    <option value="">اختر موضوع الرسالة</option>
                    <option value="general">استفسار عام</option>
                    <option value="order">استفسار عن طلب</option>
                    <option value="product">استفسار عن منتج</option>
                    <option value="complaint">شكوى</option>
                    <option value="suggestion">اقتراح</option>
                    <option value="partnership">شراكة</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                    نص الرسالة *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent font-cairo resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold-500 text-white py-3 px-6 rounded-lg font-semibold font-cairo hover:bg-gold-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      جارٍ الإرسال...
                    </>
                  ) : (
                    <>
                      إرسال الرسالة
                      <PaperAirplaneIcon className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              <div className="mb-8">
                <IslamicIcon type="crescent" className="text-gold-500 mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 font-cairo mb-4">
                  موقعنا
                </h2>
                <p className="text-gray-600 font-cairo">
                  زورنا في متجرنا الرئيسي في القاهرة
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-100 h-64 rounded-2xl mb-8 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPinIcon className="h-12 w-12 text-gold-500 mx-auto mb-2" />
                    <p className="text-gray-600 font-cairo">خريطة الموقع</p>
                    <p className="text-sm text-gray-500 font-cairo">القاهرة، جمهورية مصر العربية</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 font-cairo mb-6">
                  تابعنا على وسائل التواصل الاجتماعي
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border-2 border-transparent hover:border-gold-200 group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{social.icon}</span>
                        <div>
                          <p className="font-semibold font-cairo text-gray-900 group-hover:text-gold-600">
                            {social.name}
                          </p>
                          <p className="text-sm text-gray-500 font-cairo">
                            {social.followers} متابع
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <IslamicIcon type="pattern" size="md" className="text-gold-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 font-cairo mb-4">
              أسئلة شائعة
            </h2>
            <p className="text-gray-600 font-cairo">
              إجابات على أكثر الأسئلة شيوعاً
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'ما هي مدة التوصيل؟',
                answer: 'نقوم بالتوصيل خلال 1-3 أيام عمل داخل القاهرة الكبرى، و3-7 أيام عمل للمحافظات الأخرى.'
              },
              {
                question: 'هل يمكنني إرجاع المنتج؟',
                answer: 'نعم، يمكنك إرجاع المنتج خلال 14 يوماً من تاريخ الاستلام بشرط أن يكون في حالته الأصلية.'
              },
              {
                question: 'ما هي طرق الدفع المتاحة؟',
                answer: 'نقبل الدفع النقدي عند الاستلام، بطاقات الائتمان، والمحافظ الإلكترونية مثل STC Pay و Apple Pay.'
              },
              {
                question: 'هل تقدمون خدمة التفصيل؟',
                answer: 'نعم، نقدم خدمة التفصيل للطلبات الخاصة. يرجى التواصل معنا لمعرفة التفاصيل والأسعار.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 font-cairo mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 font-cairo">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
