import React from 'react';
import { Link } from 'react-router-dom';
import { IslamicIcon } from '../components/Icons/IslamicIcon';
import { ProductCard } from '../components/Product/ProductCard';
import { mockProducts } from '../data/mockProducts';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

export const HomePage: React.FC = () => {
  const featuredProducts = mockProducts.filter(product => product.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-l from-gold-50 to-white">
        <div className="absolute inset-0 opacity-5 -z-10">
          <IslamicIcon type="pattern" className="w-full h-full text-gold-500" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            {/* Decorative Element */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-4">
                <IslamicIcon type="star" size="lg" className="text-gold-500" />
                <div className="w-16 h-0.5 bg-gold-300"></div>
                <IslamicIcon type="crescent" size="lg" className="text-gold-500" />
                <div className="w-16 h-0.5 bg-gold-300"></div>
                <IslamicIcon type="star" size="lg" className="text-gold-500" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 font-cairo mb-6">
              رونق
            </h1>
            
            <p className="text-xl md:text-2xl text-gold-600 font-cairo mb-8 leading-relaxed">
              هوية عربية .. بروح عصرية
            </p>
            
            <p className="text-lg text-gray-600 font-cairo mb-10 max-w-2xl mx-auto leading-relaxed">
              اكتشف مجموعتنا الفريدة من الأزياء التي تجمع بين الأصالة العربية والتصميم العصري
            </p>

            <Link 
              to="/shop"
              className="inline-flex items-center bg-gold-500 text-white px-8 py-4 rounded-lg font-semibold font-cairo hover:bg-gold-600 transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              تسوق الآن
              <ChevronLeftIcon className="mr-2 h-5 w-5 group-hover:transform group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <IslamicIcon type="star" size="lg" className="text-gold-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-gray-900 font-cairo mb-2">جودة عالية</h3>
                <p className="text-gray-600 font-cairo">خامات فاخرة وتصنيع متقن يضمن الراحة والأناقة</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <IslamicIcon type="crescent" size="lg" className="text-olive-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-gray-900 font-cairo mb-2">تصاميم مستوحاة</h3>
                <p className="text-gray-600 font-cairo">تصاميم عصرية مستوحاة من التراث العربي والإسلامي</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <IslamicIcon type="pattern" size="lg" className="text-gold-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-gray-900 font-cairo mb-2">شحن عالمي</h3>
                <p className="text-gray-600 font-cairo">نصل إليك أينما كنت بخدمة شحن سريعة وآمنة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <IslamicIcon type="star" className="text-gold-500" />
              <h2 className="text-3xl font-bold text-gray-900 font-cairo">قطع مميزة</h2>
              <IslamicIcon type="star" className="text-gold-500" />
            </div>
            <p className="text-gray-600 font-cairo">اكتشف أحدث تصاميمنا المختارة بعناية</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/shop"
              className="inline-flex items-center border-2 border-gold-500 text-gold-500 px-8 py-3 rounded-lg font-semibold font-cairo hover:bg-gold-500 hover:text-white transition-all duration-300 group"
            >
              عرض جميع المنتجات
              <ChevronLeftIcon className="mr-2 h-5 w-5 group-hover:transform group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Collection Highlight */}
      <section className="py-16 bg-gradient-to-r from-olive-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/8867479/pexels-photo-8867479.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Ramadan Collection"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
                <div className="absolute top-4 right-4">
                  <IslamicIcon type="crescent" size="lg" className="text-white/80" />
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <IslamicIcon type="crescent" className="text-olive-500" />
                <span className="text-olive-600 font-cairo font-semibold">مجموعة رمضان 2024</span>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 font-cairo leading-tight">
                استعد لشهر رمضان المبارك
              </h2>
              
              <p className="text-gray-600 font-cairo text-lg leading-relaxed">
                مجموعة خاصة من الثياب والعبايات المصممة خصيصاً لشهر رمضان الكريم. 
                تجمع بين الأناقة والراحة لتكون رفيقك المثالي في هذا الشهر الفضيل.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <IslamicIcon type="star" size="sm" className="text-gold-500" />
                  <span className="text-gray-700 font-cairo">تطريز يدوي فاخر</span>
                </div>
                <div className="flex items-center gap-3">
                  <IslamicIcon type="star" size="sm" className="text-gold-500" />
                  <span className="text-gray-700 font-cairo">خامات قطنية مريحة</span>
                </div>
                <div className="flex items-center gap-3">
                  <IslamicIcon type="star" size="sm" className="text-gold-500" />
                  <span className="text-gray-700 font-cairo">تصاميم مستوحاة من التراث</span>
                </div>
              </div>
              
              <Link 
                to="/collections/ramadan"
                className="inline-flex items-center bg-olive-500 text-white px-8 py-4 rounded-lg font-semibold font-cairo hover:bg-olive-600 transition-colors duration-300 group"
              >
                اكتشف المجموعة
                <ChevronLeftIcon className="mr-2 h-5 w-5 group-hover:transform group-hover:-translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 font-cairo mb-4">ماذا يقول عملاؤنا</h2>
            <div className="flex items-center justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <IslamicIcon key={i} type="star" size="sm" className="text-gold-400" />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'سارة أحمد',
                location: 'القاهرة',
                text: 'قطع رائعة تجمع بين الأصالة والحداثة. جودة الخامات ممتازة والتطريز فني جداً.'
              },
              {
                name: 'فاطمة محمد',
                location: 'دبي',
                text: 'أحببت التصاميم كثيراً، خاصة مجموعة رمضان. الألوان جميلة والقصات مريحة.'
              },
              {
                name: 'عائشة علي',
                location: 'الدوحة',
                text: 'خدمة ممتازة وسرعة في التوصيل. العبايات أنيقة ومناسبة للمناسبات الخاصة.'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <IslamicIcon key={i} type="star" size="sm" className="text-gold-400" />
                  ))}
                </div>
                <p className="text-gray-600 font-cairo mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center">
                    <IslamicIcon type="star" size="sm" className="text-gold-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 font-cairo">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 font-cairo">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};