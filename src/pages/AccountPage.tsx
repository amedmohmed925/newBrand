import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import { IslamicIcon } from '../components/Icons/IslamicIcon';
import toast from 'react-hot-toast';
import { 
  UserIcon, 
  ShoppingBagIcon, 
  CogIcon, 
  HeartIcon, 
  MapPinIcon,
  BellIcon,
  CreditCardIcon,
  GiftIcon,
  PhoneIcon,
  PencilIcon,
  EyeIcon,
  ChevronRightIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';

interface UserData {
  email: string;
  name: string;
  role: string;
  isLoggedIn: boolean;
}

export const AccountPage: React.FC = () => {
  usePageTitle({ title: 'حسابي الشخصي' });
  
  const [activeTab, setActiveTab] = useState('profile');
  const [user, setUser] = useState<UserData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    } else {
      // إذا لم يكن المستخدم مسجل دخول، توجيهه لصفحة تسجيل الدخول
      navigate('/login');
      return;
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    toast.success('تم تسجيل الخروج بنجاح');
    navigate('/');
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold-600 mx-auto mb-4"></div>
          <p className="text-gray-600 font-cairo">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  const userData = {
    name: user.name,
    email: user.email,
    phone: '+20 10 1234 5678',
    joinDate: '2024-01-15',
    totalOrders: 12,
    totalSpent: 4500,
    loyaltyPoints: 450
  };

  const recentOrders = [
    {
      id: 'ORD-2024-001',
      date: '2024-08-15',
      status: 'مكتمل',
      total: 850,
      items: 2
    },
    {
      id: 'ORD-2024-002',
      date: '2024-08-10',
      status: 'قيد التوصيل',
      total: 1250,
      items: 3
    },
    {
      id: 'ORD-2024-003',
      date: '2024-08-05',
      status: 'مكتمل',
      total: 620,
      items: 1
    }
  ];

  const addresses = [
    {
      id: 1,
      type: 'المنزل',
      name: 'أحمد محمد',
      street: 'شارع التحرير 123',
      area: 'وسط البلد',
      city: 'القاهرة',
      phone: '+20 10 1234 5678',
      isDefault: true
    },
    {
      id: 2,
      type: 'العمل',
      name: 'أحمد محمد',
      street: 'شارع الجمهورية 456',
      area: 'مصر الجديدة',
      city: 'القاهرة',
      phone: '+20 10 1234 5678',
      isDefault: false
    }
  ];

  const menuItems = [
    {
      id: 'profile',
      name: 'البيانات الشخصية',
      icon: UserIcon,
      description: 'إدارة معلوماتك الشخصية'
    },
    {
      id: 'orders',
      name: 'طلباتي',
      icon: ShoppingBagIcon,
      description: 'تتبع طلباتك وتاريخ الشراء'
    },
    {
      id: 'addresses',
      name: 'العناوين',
      icon: MapPinIcon,
      description: 'إدارة عناوين التوصيل'
    },
    {
      id: 'favorites',
      name: 'المفضلة',
      icon: HeartIcon,
      description: 'منتجاتك المفضلة'
    },
    {
      id: 'payments',
      name: 'طرق الدفع',
      icon: CreditCardIcon,
      description: 'إدارة وسائل الدفع'
    },
    {
      id: 'notifications',
      name: 'الإشعارات',
      icon: BellIcon,
      description: 'إعدادات التنبيهات'
    },
    {
      id: 'loyalty',
      name: 'نقاط الولاء',
      icon: GiftIcon,
      description: 'اكسب واستخدم النقاط'
    },
    {
      id: 'settings',
      name: 'الإعدادات',
      icon: CogIcon,
      description: 'إعدادات الحساب العامة'
    },
    {
      id: 'logout',
      name: 'تسجيل الخروج',
      icon: ArrowRightOnRectangleIcon,
      description: 'الخروج من الحساب'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'مكتمل': return 'text-green-600 bg-green-100';
      case 'قيد التوصيل': return 'text-blue-600 bg-blue-100';
      case 'قيد المعالجة': return 'text-yellow-600 bg-yellow-100';
      case 'ملغي': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900 font-cairo">البيانات الشخصية</h3>
                <button className="flex items-center gap-2 text-gold-600 hover:text-gold-700">
                  <PencilIcon className="h-4 w-4" />
                  <span className="text-sm font-cairo">تعديل</span>
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">الاسم الكامل</label>
                  <input 
                    type="text" 
                    value={userData.name}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent font-cairo"
                    readOnly
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">البريد الإلكتروني</label>
                  <input 
                    type="email" 
                    value={userData.email}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent font-cairo"
                    readOnly
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">رقم الهاتف</label>
                  <input 
                    type="tel" 
                    value={userData.phone}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent font-cairo"
                    readOnly
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-cairo mb-2">تاريخ الانضمام</label>
                  <input 
                    type="text" 
                    value={new Date(userData.joinDate).toLocaleDateString('ar-EG')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 font-cairo"
                    readOnly
                  />
                </div>
              </div>
            </div>

            {/* إحصائيات الحساب */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
                <ShoppingBagIcon className="h-8 w-8 text-gold-500 mx-auto mb-3" />
                <p className="text-2xl font-bold text-gray-900 font-cairo">{userData.totalOrders}</p>
                <p className="text-sm text-gray-600 font-cairo">إجمالي الطلبات</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
                <CreditCardIcon className="h-8 w-8 text-green-500 mx-auto mb-3" />
                <p className="text-2xl font-bold text-gray-900 font-cairo">{userData.totalSpent.toLocaleString('ar-EG')} ج.م</p>
                <p className="text-sm text-gray-600 font-cairo">إجمالي المشتريات</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
                <GiftIcon className="h-8 w-8 text-purple-500 mx-auto mb-3" />
                <p className="text-2xl font-bold text-gray-900 font-cairo">{userData.loyaltyPoints}</p>
                <p className="text-sm text-gray-600 font-cairo">نقاط الولاء</p>
              </div>
            </div>
          </div>
        );

      case 'orders':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 font-cairo mb-6">طلباتي الأخيرة</h3>
              
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="font-semibold text-gray-900 font-cairo">#{order.id}</p>
                          <p className="text-sm text-gray-600 font-cairo">{new Date(order.date).toLocaleDateString('ar-EG')}</p>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-cairo ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                      
                      <div className="text-left">
                        <p className="font-semibold text-gray-900 font-cairo">{order.total.toLocaleString('ar-EG')} ج.م</p>
                        <p className="text-sm text-gray-600 font-cairo">{order.items} منتج</p>
                      </div>
                      
                      <Link 
                        to={`/order/${order.id}`}
                        className="flex items-center gap-2 text-gold-600 hover:text-gold-700"
                      >
                        <EyeIcon className="h-4 w-4" />
                        <span className="text-sm font-cairo">عرض</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Link 
                  to="/orders" 
                  className="inline-flex items-center gap-2 bg-gold-500 text-white px-6 py-2 rounded-lg font-semibold font-cairo hover:bg-gold-600 transition-colors"
                >
                  عرض جميع الطلبات
                  <ChevronRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        );

      case 'addresses':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900 font-cairo">عناويني</h3>
                <button className="bg-gold-500 text-white px-4 py-2 rounded-lg font-semibold font-cairo hover:bg-gold-600 transition-colors">
                  إضافة عنوان جديد
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {addresses.map((address) => (
                  <div key={address.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <MapPinIcon className="h-5 w-5 text-gold-500" />
                        <span className="font-semibold text-gray-900 font-cairo">{address.type}</span>
                        {address.isDefault && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-cairo">
                            افتراضي
                          </span>
                        )}
                      </div>
                      
                      <button className="text-gold-600 hover:text-gold-700">
                        <PencilIcon className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <div className="space-y-1 text-sm text-gray-600 font-cairo">
                      <p className="font-medium text-gray-900">{address.name}</p>
                      <p>{address.street}</p>
                      <p>{address.area}, {address.city}</p>
                      <p className="flex items-center gap-1">
                        <PhoneIcon className="h-3 w-3" />
                        {address.phone}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
            <div className="text-gray-400 mb-4">
              <IslamicIcon type="pattern" size="lg" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 font-cairo mb-2">قريباً</h3>
            <p className="text-gray-600 font-cairo">هذا القسم قيد التطوير</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center">
              <UserIcon className="h-8 w-8 text-gold-600" />
            </div>
            
            <div>
              <h1 className="text-2xl font-bold text-gray-900 font-cairo">أهلاً بك، {userData.name}</h1>
              <p className="text-gray-600 font-cairo">إدارة حسابك ومتابعة طلباتك</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (item.id === 'logout') {
                        handleLogout();
                      } else {
                        setActiveTab(item.id);
                      }
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-right rounded-lg transition-colors ${
                      activeTab === item.id && item.id !== 'logout'
                        ? 'bg-gold-100 text-gold-700 border-r-4 border-gold-500'
                        : item.id === 'logout'
                        ? 'text-red-600 hover:text-red-700 hover:bg-red-50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <div className="text-right">
                      <p className="font-medium font-cairo">{item.name}</p>
                      <p className="text-xs text-gray-500 font-cairo">{item.description}</p>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};
