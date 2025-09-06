import React from 'react';
import { Link } from 'react-router-dom';
import { IslamicIcon } from '../../components/Icons/IslamicIcon';
import { formatPrice } from '../../utils/priceUtils';
import { 
  ShoppingBagIcon, 
  UserGroupIcon, 
  CurrencyDollarIcon, 
  ChartBarIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  PlusIcon,
  EyeIcon,
  PencilIcon,
  ClipboardDocumentListIcon,
  GiftIcon,
  BellIcon
} from '@heroicons/react/24/outline';

export const AdminDashboard: React.FC = () => {
  const stats = [
    {
      name: 'إجمالي المبيعات',
      value: formatPrice(189500),
      change: '+12.5%',
      changeType: 'increase',
      icon: CurrencyDollarIcon,
      color: 'gold'
    },
    {
      name: 'الطلبات الجديدة',
      value: '23',
      change: '+5.4%',
      changeType: 'increase',
      icon: ShoppingBagIcon,
      color: 'olive'
    },
    {
      name: 'العملاء الجدد',
      value: '156',
      change: '+8.2%',
      changeType: 'increase',
      icon: UserGroupIcon,
      color: 'blue'
    },
    {
      name: 'معدل التحويل',
      value: '3.24%',
      change: '-2.1%',
      changeType: 'decrease',
      icon: ChartBarIcon,
      color: 'red'
    }
  ];

  // إجراءات سريعة
  const quickActions = [
    {
      name: 'إضافة منتج جديد',
      description: 'أضف منتج جديد للمتجر',
      icon: PlusIcon,
      href: '/admin/products/add',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      name: 'عرض الطلبات',
      description: 'إدارة الطلبات الجديدة',
      icon: ClipboardDocumentListIcon,
      href: '/admin/orders',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      name: 'إدارة العروض',
      description: 'إنشاء عروض وخصومات',
      icon: GiftIcon,
      href: '/admin/promotions',
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      name: 'الإشعارات',
      description: 'إرسال إشعارات للعملاء',
      icon: BellIcon,
      href: '/admin/notifications',
      color: 'bg-orange-500 hover:bg-orange-600'
    }
  ];

  const recentOrders = [
    { id: 'ORD-001', customer: 'سارة أحمد', total: formatPrice(1245), status: 'جديد', time: 'منذ 5 دقائق' },
    { id: 'ORD-002', customer: 'فاطمة محمد', total: formatPrice(1875), status: 'قيد التحضير', time: 'منذ 15 دقيقة' },
    { id: 'ORD-003', customer: 'عائشة علي', total: formatPrice(830), status: 'تم الشحن', time: 'منذ ساعة' },
    { id: 'ORD-004', customer: 'زينب خالد', total: formatPrice(1350), status: 'مكتمل', time: 'منذ ساعتين' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'جديد':
        return 'bg-blue-100 text-blue-800';
      case 'قيد التحضير':
        return 'bg-yellow-100 text-yellow-800';
      case 'تم الشحن':
        return 'bg-purple-100 text-purple-800';
      case 'مكتمل':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <IslamicIcon type="star" className="text-gold-500" />
            لوحة التحكم
          </h1>
          <p className="text-gray-600">مرحباً بك في لوحة تحكم متجر رونق</p>
        </div>
        <div className="text-left">
          <p className="text-sm text-gray-500">اليوم</p>
          <p className="text-lg font-semibold text-gray-900">
            {new Date().toLocaleDateString('ar-SA')}
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                stat.color === 'gold' ? 'bg-gold-100' :
                stat.color === 'olive' ? 'bg-olive-100' :
                stat.color === 'blue' ? 'bg-blue-100' : 'bg-red-100'
              }`}>
                <stat.icon className={`h-6 w-6 ${
                  stat.color === 'gold' ? 'text-gold-600' :
                  stat.color === 'olive' ? 'text-olive-600' :
                  stat.color === 'blue' ? 'text-blue-600' : 'text-red-600'
                }`} />
              </div>
              <div className={`flex items-center gap-1 text-sm ${
                stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.changeType === 'increase' ? (
                  <ArrowTrendingUpIcon className="h-4 w-4" />
                ) : (
                  <ArrowTrendingDownIcon className="h-4 w-4" />
                )}
                {stat.change}
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-gray-600 text-sm">{stat.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <IslamicIcon type="star" size="sm" className="text-gold-500" />
          إجراءات سريعة
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.href}
              className="block group"
            >
              <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors group-hover:shadow-md">
                <div className={`w-12 h-12 rounded-lg ${action.color} flex items-center justify-center mb-4 transition-colors`}>
                  <action.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 font-cairo">{action.name}</h3>
                <p className="text-sm text-gray-600 font-cairo">{action.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <IslamicIcon type="crescent" size="sm" className="text-gold-500" />
              الطلبات الأخيرة
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                  <div>
                    <p className="font-semibold text-gray-900">#{order.id}</p>
                    <p className="text-sm text-gray-600">{order.customer}</p>
                    <p className="text-xs text-gray-500">{order.time}</p>
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-900 mb-1">{order.total}</p>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <button className="text-gold-600 hover:text-gold-700 font-medium text-sm">
                عرض جميع الطلبات
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Islamic Pattern Footer */}
      <div className="relative bg-gradient-to-l from-gold-50 to-olive-50 p-8 rounded-xl border border-gold-200">
        <div className="absolute inset-0 opacity-10">
          <IslamicIcon type="pattern" className="w-full h-full text-gold-500" />
        </div>
        <div className="relative text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <IslamicIcon type="star" className="text-gold-500" />
            <h3 className="text-xl font-bold text-gray-900">رونق - هوية عربية بروح عصرية</h3>
            <IslamicIcon type="star" className="text-gold-500" />
          </div>
          <p className="text-gray-600">
            "نحن ندير متجراً يجمع بين الأصالة العربية والتصميم المعاصر، نخدم عملاءنا بمحبة واحترام"
          </p>
        </div>
      </div>
    </div>
  );
};