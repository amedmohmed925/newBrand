import React from 'react';
import { IslamicIcon } from '../../components/Icons/IslamicIcon';
import { 
  ShoppingBagIcon, 
  UserGroupIcon, 
  CurrencyDollarIcon, 
  ChartBarIcon,
  TrendingUpIcon,
  TrendingDownIcon
} from '@heroicons/react/24/outline';

export const AdminDashboard: React.FC = () => {
  const stats = [
    {
      name: 'إجمالي المبيعات',
      value: '45,600 ر.س',
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

  const recentOrders = [
    { id: 'ORD-001', customer: 'سارة أحمد', total: '299 ر.س', status: 'جديد', time: 'منذ 5 دقائق' },
    { id: 'ORD-002', customer: 'فاطمة محمد', total: '450 ر.س', status: 'قيد التحضير', time: 'منذ 15 دقيقة' },
    { id: 'ORD-003', customer: 'عائشة علي', total: '199 ر.س', status: 'تم الشحن', time: 'منذ ساعة' },
    { id: 'ORD-004', customer: 'زينب خالد', total: '325 ر.س', status: 'مكتمل', time: 'منذ ساعتين' }
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
                  <TrendingUpIcon className="h-4 w-4" />
                ) : (
                  <TrendingDownIcon className="h-4 w-4" />
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

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <IslamicIcon type="pattern" size="sm" className="text-gold-500" />
              إجراءات سريعة
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-gold-300 hover:bg-gold-50 transition-colors group">
                <ShoppingBagIcon className="h-8 w-8 text-gray-400 group-hover:text-gold-500 mb-2" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-gold-700">إضافة منتج</span>
              </button>
              <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-olive-300 hover:bg-olive-50 transition-colors group">
                <UserGroupIcon className="h-8 w-8 text-gray-400 group-hover:text-olive-500 mb-2" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-olive-700">إدارة العملاء</span>
              </button>
              <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group">
                <ChartBarIcon className="h-8 w-8 text-gray-400 group-hover:text-blue-500 mb-2" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">عرض التقارير</span>
              </button>
              <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors group">
                <CogIcon className="h-8 w-8 text-gray-400 group-hover:text-purple-500 mb-2" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">الإعدادات</span>
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