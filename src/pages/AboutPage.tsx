import React from 'react';
import { Link } from 'react-router-dom';
import { IslamicIcon } from '../components/Icons/IslamicIcon';
import { usePageTitle } from '../hooks/usePageTitle';
import { 
  SparklesIcon, 
  HeartIcon, 
  GlobeAltIcon, 
  UserGroupIcon,
  ChevronLeftIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export const AboutPage: React.FC = () => {
  usePageTitle({ title: 'من نحن' });

  const values = [
    {
      icon: HeartIcon,
      title: 'الأصالة',
      description: 'نحتفي بالتراث العربي ونحافظ على قيمه الأصيلة في كل تصميم'
    },
    {
      icon: SparklesIcon,
      title: 'الجودة',
      description: 'نستخدم أفضل الخامات والتقنيات لضمان منتجات عالية الجودة'
    },
    {
      icon: GlobeAltIcon,
      title: 'الحداثة',
      description: 'نمزج بين التراث والعصرية لنقدم تصاميم تناسب روح العصر'
    },
    {
      icon: UserGroupIcon,
      title: 'المجتمع',
      description: 'نؤمن ببناء مجتمع يقدر الثقافة العربية ويفتخر بها'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'البداية',
      description: 'تأسيس رونق بحلم تقديم الأزياء العربية المعاصرة'
    },
    {
      year: '2021',
      title: 'النمو',
      description: 'إطلاق أول مجموعة وحصولها على استقبال رائع'
    },
    {
      year: '2023',
      title: 'التوسع',
      description: 'افتتاح متاجر جديدة وتوسيع نطاق الخدمة'
    },
    {
      year: '2025',
      title: 'المستقبل',
      description: 'رؤية طموحة لتكون العلامة الرائدة في الأزياء العربية'
    }
  ];

  const achievements = [
    '50,000+ عميل راضٍ',
    '500+ تصميم فريد',
    '10+ مدن نخدمها',
    '98% نسبة رضا العملاء'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-l from-gold-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <IslamicIcon type="pattern" className="w-full h-full text-gold-500" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <IslamicIcon type="star" className="text-gold-500" />
                <div className="w-12 h-0.5 bg-gold-300"></div>
                <span className="text-gold-600 font-cairo text-sm font-medium">من نحن</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-cairo mb-6">
                قصة رونق
              </h1>
              
              <p className="text-xl text-gold-600 font-cairo mb-8 leading-relaxed">
                رحلة في عالم الأزياء العربية المعاصرة
              </p>
              
              <p className="text-lg text-gray-600 font-cairo mb-8 leading-relaxed">
                بدأت رونق كحلم بسيط لتقديم الأزياء العربية بطريقة عصرية تحافظ على الأصالة وتواكب العصر. 
                نؤمن أن الهوية العربية يمكن أن تكون مصدر إلهام للإبداع والتميز في عالم الموضة.
              </p>

              <Link 
                to="/collections"
                className="inline-flex items-center bg-gold-500 text-white px-6 py-3 rounded-lg font-semibold font-cairo hover:bg-gold-600 transition-colors"
              >
                اكتشف مجموعاتنا
                <ChevronLeftIcon className="mr-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-gold-100 to-amber-100 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <IslamicIcon type="pattern" className="w-full h-full text-gold-500" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <IslamicIcon type="crescent" size="lg" className="text-gold-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <IslamicIcon type="crescent" size="md" className="text-gold-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 font-cairo mb-4">
              رسالتنا ورؤيتنا
            </h2>
            <p className="text-gray-600 font-cairo max-w-2xl mx-auto">
              نسعى لنكون الجسر الذي يربط بين الماضي العريق والحاضر المشرق
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                  <HeartIcon className="h-6 w-6 text-gold-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-cairo">رسالتنا</h3>
              </div>
              <p className="text-gray-600 font-cairo leading-relaxed">
                تقديم أزياء عربية معاصرة تجمع بين الأصالة والحداثة، مع الحفاظ على الهوية الثقافية 
                وتقديم تجربة تسوق استثنائية تفوق توقعات عملائنا في كل مرة.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                  <SparklesIcon className="h-6 w-6 text-gold-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-cairo">رؤيتنا</h3>
              </div>
              <p className="text-gray-600 font-cairo leading-relaxed">
                أن نكون العلامة التجارية الرائدة في الأزياء العربية المعاصرة، ونلهم جيلاً جديداً 
                من المصممين والمبدعين لتقدير التراث العربي والإبداع فيه.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <IslamicIcon type="star" size="md" className="text-gold-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 font-cairo mb-4">
              قيمنا
            </h2>
            <p className="text-gray-600 font-cairo max-w-2xl mx-auto">
              القيم التي تقود مسيرتنا وتشكل هويتنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-200 transition-colors">
                  <value.icon className="h-8 w-8 text-gold-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-cairo mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 font-cairo leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <IslamicIcon type="pattern" size="md" className="text-gold-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 font-cairo mb-4">
              رحلتنا عبر السنين
            </h2>
            <p className="text-gray-600 font-cairo max-w-2xl mx-auto">
              محطات مهمة في مسيرة رونق
            </p>
          </div>

          <div className="relative">
            <div className="absolute right-1/2 transform translate-x-1/2 w-0.5 h-full bg-gold-200"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className="w-1/2"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold font-cairo text-sm">{item.year}</span>
                    </div>
                  </div>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 font-cairo mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 font-cairo">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <IslamicIcon type="crescent" size="md" className="text-gold-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 font-cairo mb-4">
              إنجازاتنا
            </h2>
            <p className="text-gray-600 font-cairo max-w-2xl mx-auto">
              أرقام تتحدث عن نجاحنا وثقة عملائنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-gold-50 p-6 rounded-2xl">
                  <CheckCircleIcon className="h-12 w-12 text-gold-500 mx-auto mb-4" />
                  <p className="text-xl font-bold text-gray-900 font-cairo">
                    {achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-l from-gold-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <IslamicIcon type="star" size="lg" className="text-gold-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 font-cairo mb-4">
            انضم إلى رحلتنا
          </h2>
          <p className="text-xl text-gray-600 font-cairo mb-8 max-w-2xl mx-auto">
            كن جزءاً من قصة نجاح رونق واكتشف عالم الأزياء العربية المعاصرة
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center bg-gold-500 text-white px-8 py-3 rounded-lg font-semibold font-cairo hover:bg-gold-600 transition-colors"
            >
              تسوق الآن
              <ChevronLeftIcon className="mr-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center border-2 border-gold-500 text-gold-600 px-8 py-3 rounded-lg font-semibold font-cairo hover:bg-gold-500 hover:text-white transition-colors"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
