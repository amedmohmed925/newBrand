import React, { useState } from 'react';
import { 
  CogIcon,
  BellIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  TruckIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

export const AdminSettings: React.FC = () => {
  const [settings, setSettings] = useState({
    // إعدادات المتجر
    storeName: 'رونق للأزياء الإسلامية',
    storeDescription: 'متجر متخصص في الأزياء الإسلامية العصرية والأنيقة',
    currency: 'EGP',
    language: 'ar',
    
    // معلومات الاتصال
    email: 'info@ronaq.com',
    phone: '+20 10 1234 5678',
    address: 'القاهرة، مصر الجديدة، شارع العروبة، رقم 123',
    
    // إعدادات الشحن
    shippingFee: 50,
    freeShippingThreshold: 500,
    shippingTime: '2-5 أيام عمل',
    
    // الإشعارات
    emailNotifications: true,
    smsNotifications: false,
    orderNotifications: true,
    stockNotifications: true,
    
    // الأمان
    twoFactorAuth: false,
    passwordExpiry: 90,
    sessionTimeout: 30,
    
    // SEO
    metaTitle: 'رونق - أزياء إسلامية عصرية',
    metaDescription: 'اكتشفي مجموعة رونق المميزة من الأزياء الإسلامية العصرية والأنيقة',
    metaKeywords: 'أزياء إسلامية، عبايات، حجاب، ملابس محتشمة'
  });

  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', name: 'عام', icon: CogIcon },
    { id: 'notifications', name: 'الإشعارات', icon: BellIcon },
    { id: 'shipping', name: 'الشحن', icon: TruckIcon },
    { id: 'security', name: 'الأمان', icon: ShieldCheckIcon },
    { id: 'seo', name: 'SEO', icon: GlobeAltIcon }
  ];

  const handleSettingChange = (key: string, value: string | number | boolean) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const saveSettings = () => {
    console.log('حفظ الإعدادات:', settings);
    // هنا يمكن إضافة المنطق الفعلي لحفظ الإعدادات
  };

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 font-cairo mb-4">معلومات المتجر</h3>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
              اسم المتجر
            </label>
            <input
              type="text"
              value={settings.storeName}
              onChange={(e) => handleSettingChange('storeName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
              وصف المتجر
            </label>
            <textarea
              value={settings.storeDescription}
              onChange={(e) => handleSettingChange('storeDescription', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                العملة
              </label>
              <select
                value={settings.currency}
                onChange={(e) => handleSettingChange('currency', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
              >
                <option value="EGP">جنيه مصري (EGP)</option>
                <option value="USD">دولار أمريكي (USD)</option>
                <option value="EUR">يورو (EUR)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                اللغة
              </label>
              <select
                value={settings.language}
                onChange={(e) => handleSettingChange('language', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
              >
                <option value="ar">العربية</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 font-cairo mb-4">معلومات الاتصال</h3>
        <div className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="email"
                  value={settings.email}
                  onChange={(e) => handleSettingChange('email', e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
                رقم الهاتف
              </label>
              <div className="relative">
                <PhoneIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="tel"
                  value={settings.phone}
                  onChange={(e) => handleSettingChange('phone', e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
                />
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
              العنوان
            </label>
            <div className="relative">
              <MapPinIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
              <textarea
                value={settings.address}
                onChange={(e) => handleSettingChange('address', e.target.value)}
                rows={2}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900 font-cairo mb-4">إعدادات الإشعارات</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h4 className="text-sm font-medium text-gray-900 font-cairo">إشعارات البريد الإلكتروني</h4>
            <p className="text-sm text-gray-500 font-cairo">تلقي الإشعارات عبر البريد الإلكتروني</p>
          </div>
          <button
            onClick={() => handleSettingChange('emailNotifications', !settings.emailNotifications)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full ${
              settings.emailNotifications ? 'bg-gold-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                settings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h4 className="text-sm font-medium text-gray-900 font-cairo">إشعارات الرسائل النصية</h4>
            <p className="text-sm text-gray-500 font-cairo">تلقي الإشعارات عبر الرسائل النصية</p>
          </div>
          <button
            onClick={() => handleSettingChange('smsNotifications', !settings.smsNotifications)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full ${
              settings.smsNotifications ? 'bg-gold-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                settings.smsNotifications ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h4 className="text-sm font-medium text-gray-900 font-cairo">إشعارات الطلبات</h4>
            <p className="text-sm text-gray-500 font-cairo">تلقي إشعارات عند وصول طلبات جديدة</p>
          </div>
          <button
            onClick={() => handleSettingChange('orderNotifications', !settings.orderNotifications)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full ${
              settings.orderNotifications ? 'bg-gold-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                settings.orderNotifications ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h4 className="text-sm font-medium text-gray-900 font-cairo">تنبيهات المخزون</h4>
            <p className="text-sm text-gray-500 font-cairo">تلقي تنبيهات عند انخفاض المخزون</p>
          </div>
          <button
            onClick={() => handleSettingChange('stockNotifications', !settings.stockNotifications)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full ${
              settings.stockNotifications ? 'bg-gold-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                settings.stockNotifications ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );

  const renderShippingSettings = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900 font-cairo mb-4">إعدادات الشحن</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
            رسوم الشحن (بالجنيه المصري)
          </label>
          <div className="relative">
            <CurrencyDollarIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="number"
              value={settings.shippingFee}
              onChange={(e) => handleSettingChange('shippingFee', Number(e.target.value))}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
            الحد الأدنى للشحن المجاني
          </label>
          <div className="relative">
            <CurrencyDollarIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="number"
              value={settings.freeShippingThreshold}
              onChange={(e) => handleSettingChange('freeShippingThreshold', Number(e.target.value))}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
            />
          </div>
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
            مدة التوصيل المتوقعة
          </label>
          <input
            type="text"
            value={settings.shippingTime}
            onChange={(e) => handleSettingChange('shippingTime', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
          />
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900 font-cairo mb-4">إعدادات الأمان</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h4 className="text-sm font-medium text-gray-900 font-cairo">المصادقة الثنائية</h4>
            <p className="text-sm text-gray-500 font-cairo">تفعيل المصادقة الثنائية لحماية إضافية</p>
          </div>
          <button
            onClick={() => handleSettingChange('twoFactorAuth', !settings.twoFactorAuth)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full ${
              settings.twoFactorAuth ? 'bg-gold-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                settings.twoFactorAuth ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
            انتهاء صلاحية كلمة المرور (بالأيام)
          </label>
          <input
            type="number"
            value={settings.passwordExpiry}
            onChange={(e) => handleSettingChange('passwordExpiry', Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
            انتهاء صلاحية الجلسة (بالدقائق)
          </label>
          <input
            type="number"
            value={settings.sessionTimeout}
            onChange={(e) => handleSettingChange('sessionTimeout', Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
          />
        </div>
      </div>
    </div>
  );

  const renderSEOSettings = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900 font-cairo mb-4">إعدادات SEO</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
            عنوان الموقع (Meta Title)
          </label>
          <input
            type="text"
            value={settings.metaTitle}
            onChange={(e) => handleSettingChange('metaTitle', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
          />
          <p className="text-xs text-gray-500 font-cairo mt-1">
            الطول المثالي: 50-60 حرف
          </p>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
            وصف الموقع (Meta Description)
          </label>
          <textarea
            value={settings.metaDescription}
            onChange={(e) => handleSettingChange('metaDescription', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
          />
          <p className="text-xs text-gray-500 font-cairo mt-1">
            الطول المثالي: 150-160 حرف
          </p>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">
            الكلمات المفتاحية (Meta Keywords)
          </label>
          <input
            type="text"
            value={settings.metaKeywords}
            onChange={(e) => handleSettingChange('metaKeywords', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
          />
          <p className="text-xs text-gray-500 font-cairo mt-1">
            افصل الكلمات بفاصلة
          </p>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return renderGeneralSettings();
      case 'notifications':
        return renderNotificationSettings();
      case 'shipping':
        return renderShippingSettings();
      case 'security':
        return renderSecuritySettings();
      case 'seo':
        return renderSEOSettings();
      default:
        return renderGeneralSettings();
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 font-cairo mb-2">إعدادات المتجر</h1>
          <p className="text-gray-600 font-cairo">إدارة إعدادات المتجر والنظام</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Tabs */}
        <div className="lg:w-64">
          <nav className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-gold-100 text-gold-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            {renderTabContent()}
            
            {/* Save Button */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex justify-end gap-4">
                <button
                  onClick={saveSettings}
                  className="inline-flex items-center px-6 py-3 bg-gold-600 text-white text-sm font-medium rounded-lg hover:bg-gold-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 font-cairo"
                >
                  <CheckIcon className="h-4 w-4 ml-2" />
                  حفظ الإعدادات
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
