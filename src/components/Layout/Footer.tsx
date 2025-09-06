import React from 'react';
import { IslamicIcon } from '../Icons/IslamicIcon';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <IslamicIcon type="pattern" className="w-full h-full text-gold-500" />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Section */}
          <div className="grid grid-cols-1 gap-8 xl:col-span-1">
            <div>
              <div className="flex items-center">
                <IslamicIcon type="crescent" className="text-gold-500 ml-3" />
                <span className="text-2xl font-bold font-cairo text-gray-900">رونق</span>
              </div>
              <p className="mt-4 text-gray-600 font-cairo leading-relaxed">
                هوية عربية بروح عصرية
                <br />
                أزياء تجمع بين الأصالة والحداثة
              </p>
              <div className="mt-4 flex space-x-reverse space-x-4">
                <IslamicIcon type="star" size="sm" className="text-gold-500" />
                <span className="text-sm text-gray-500 font-cairo">جودة عالية</span>
                <IslamicIcon type="star" size="sm" className="text-gold-500" />
                <span className="text-sm text-gray-500 font-cairo">شحن عالمي</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-semibold text-gray-900 font-cairo">روابط سريعة</h3>
                <ul className="mt-4 space-y-3">
                  <li><Link to="/shop" className="text-gray-600 hover:text-gold-500 font-cairo transition-colors">المتجر</Link></li>
                  <li><Link to="/collections" className="text-gray-600 hover:text-gold-500 font-cairo transition-colors">المجموعات</Link></li>
                  <li><Link to="/about" className="text-gray-600 hover:text-gold-500 font-cairo transition-colors">عن رونق</Link></li>
                  <li><Link to="/contact" className="text-gray-600 hover:text-gold-500 font-cairo transition-colors">تواصل معنا</Link></li>
                </ul>
              </div>
              <div className="mt-8 md:mt-0">
                <h3 className="text-base font-semibold text-gray-900 font-cairo">خدمة العملاء</h3>
                <ul className="mt-4 space-y-3">
                  <li><Link to="/return-policy" className="text-gray-600 hover:text-gold-500 font-cairo transition-colors">سياسة الاسترجاع</Link></li>
                  <li><Link to="/shipping" className="text-gray-600 hover:text-gold-500 font-cairo transition-colors">معلومات الشحن</Link></li>
                  <li><Link to="/size-guide" className="text-gray-600 hover:text-gold-500 font-cairo transition-colors">دليل المقاسات</Link></li>
                  <li><Link to="/privacy" className="text-gray-600 hover:text-gold-500 font-cairo transition-colors">سياسة الخصوصية</Link></li>
                </ul>
              </div>
            </div>

            <div className="md:grid md:grid-cols-1">
              <div>
                <h3 className="text-base font-semibold text-gray-900 font-cairo">تواصل معنا</h3>
                <div className="mt-4 space-y-3">
                  <p className="text-gray-600 font-cairo">واتساب: 966501234567+</p>
                  <p className="text-gray-600 font-cairo">البريد: info@rawnaq.com</p>
                  <div className="flex items-center space-x-reverse space-x-2 mt-4">
                    <span className="text-sm text-gray-500 font-cairo">اتبعنا على:</span>
                    <div className="flex space-x-reverse space-x-2">
                      <a href="#" className="text-gray-400 hover:text-gold-500">Instagram</a>
                      <a href="#" className="text-gray-400 hover:text-gold-500">Twitter</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500 font-cairo">
              © 2024 رونق. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center">
              <IslamicIcon type="star" size="sm" className="text-gold-400 ml-2" />
              <span className="text-sm text-gray-500 font-cairo">سياسة الاسترجاع: 7 أيام</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};