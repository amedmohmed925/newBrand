import React, { useState } from 'react';
import { IslamicIcon } from '../../components/Icons/IslamicIcon';
import { formatPrice } from '../../utils/priceUtils';
import { 
  ChartBarIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  EyeIcon,
  ShoppingCartIcon,
  UsersIcon,
  CurrencyDollarIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

interface SalesData {
  period: string;
  sales: number;
  orders: number;
  customers: number;
}

interface ProductPerformance {
  id: string;
  name: string;
  sales: number;
  quantity: number;
  revenue: number;
  growth: number;
}

export const AdminAnalytics: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');

  const periodOptions = [
    { value: '24h', label: '24 ساعة' },
    { value: '7d', label: '7 أيام' },
    { value: '30d', label: '30 يوم' },
    { value: '90d', label: '90 يوم' },
    { value: '1y', label: 'سنة' }
  ];

  const salesData: SalesData[] = [
    { period: 'اليوم 1', sales: 2450, orders: 8, customers: 6 },
    { period: 'اليوم 2', sales: 3200, orders: 12, customers: 10 },
    { period: 'اليوم 3', sales: 1890, orders: 6, customers: 5 },
    { period: 'اليوم 4', sales: 4100, orders: 15, customers: 12 },
    { period: 'اليوم 5', sales: 3750, orders: 11, customers: 9 },
    { period: 'اليوم 6', sales: 2980, orders: 9, customers: 7 },
    { period: 'اليوم 7', sales: 4320, orders: 16, customers: 13 }
  ];

  const topProducts: ProductPerformance[] = [
    {
      id: '1',
      name: 'ثوب رمضاني مطرز',
      sales: 45,
      quantity: 45,
      revenue: 56025,
      growth: 23.5
    },
    {
      id: '2',
      name: 'عباية حديثة بتطريز هندسي',
      sales: 38,
      quantity: 38,
      revenue: 32300,
      growth: 12.8
    },
    {
      id: '3',
      name: 'حجاب حريري فاخر',
      sales: 62,
      quantity: 62,
      revenue: 22940,
      growth: -5.2
    },
    {
      id: '4',
      name: 'قميص قطني بكم طويل',
      sales: 29,
      quantity: 29,
      revenue: 17980,
      growth: 8.7
    },
    {
      id: '5',
      name: 'تنورة طويلة بطيات',
      sales: 33,
      quantity: 33,
      revenue: 16335,
      growth: 15.3
    }
  ];

  const totalSales = salesData.reduce((sum, data) => sum + data.sales, 0);
  const totalOrders = salesData.reduce((sum, data) => sum + data.orders, 0);
  const totalCustomers = salesData.reduce((sum, data) => sum + data.customers, 0);
  const averageOrderValue = totalSales / totalOrders;

  const salesGrowth = 12.5; // نمو المبيعات
  const ordersGrowth = 8.3; // نمو الطلبات
  const customersGrowth = 15.7; // نمو العملاء

  const getGrowthColor = (growth: number) => {
    return growth >= 0 ? 'text-green-600' : 'text-red-600';
  };

  const getGrowthIcon = (growth: number) => {
    return growth >= 0 ? ArrowUpIcon : ArrowDownIcon;
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 font-cairo mb-2">التحليلات والإحصائيات</h1>
          <p className="text-gray-600 font-cairo">متابعة أداء المتجر والمبيعات</p>
        </div>
        <div className="mt-4 md:mt-0">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
          >
            {periodOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 font-cairo">إجمالي المبيعات</p>
              <p className="text-2xl font-bold text-gray-900 font-cairo mt-1">
                {formatPrice(totalSales)}
              </p>
              <div className={`flex items-center mt-2 text-sm ${getGrowthColor(salesGrowth)}`}>
                {React.createElement(getGrowthIcon(salesGrowth), { className: "h-4 w-4 ml-1" })}
                <span className="font-cairo">{Math.abs(salesGrowth)}%</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CurrencyDollarIcon className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 font-cairo">إجمالي الطلبات</p>
              <p className="text-2xl font-bold text-gray-900 font-cairo mt-1">{totalOrders}</p>
              <div className={`flex items-center mt-2 text-sm ${getGrowthColor(ordersGrowth)}`}>
                {React.createElement(getGrowthIcon(ordersGrowth), { className: "h-4 w-4 ml-1" })}
                <span className="font-cairo">{Math.abs(ordersGrowth)}%</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <ShoppingCartIcon className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 font-cairo">العملاء الجدد</p>
              <p className="text-2xl font-bold text-gray-900 font-cairo mt-1">{totalCustomers}</p>
              <div className={`flex items-center mt-2 text-sm ${getGrowthColor(customersGrowth)}`}>
                {React.createElement(getGrowthIcon(customersGrowth), { className: "h-4 w-4 ml-1" })}
                <span className="font-cairo">{Math.abs(customersGrowth)}%</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <UsersIcon className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 font-cairo">متوسط قيمة الطلب</p>
              <p className="text-2xl font-bold text-gray-900 font-cairo mt-1">
                {formatPrice(averageOrderValue)}
              </p>
              <div className="flex items-center mt-2 text-sm text-green-600">
                <ArrowUpIcon className="h-4 w-4 ml-1" />
                <span className="font-cairo">7.2%</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center">
              <IslamicIcon type="pattern" className="text-gold-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Sales Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 font-cairo">المبيعات اليومية</h3>
            <ChartBarIcon className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {salesData.map((data, index) => {
              const maxSales = Math.max(...salesData.map(d => d.sales));
              const widthPercentage = (data.sales / maxSales) * 100;
              
              return (
                <div key={index} className="flex items-center justify-between">
                  <div className="w-20 text-sm text-gray-600 font-cairo">
                    {data.period}
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gold-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${widthPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-20 text-sm font-medium text-gray-900 font-cairo text-left">
                    {formatPrice(data.sales)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 font-cairo">المنتجات الأكثر مبيعاً</h3>
            <EyeIcon className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={product.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center text-sm font-medium text-gold-600 ml-3">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 font-cairo">{product.name}</p>
                    <p className="text-xs text-gray-500 font-cairo">{product.sales} مبيعة</p>
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-900 font-cairo">
                    {formatPrice(product.revenue)}
                  </p>
                  <div className={`flex items-center text-xs ${getGrowthColor(product.growth)}`}>
                    {React.createElement(getGrowthIcon(product.growth), { className: "h-3 w-3 ml-1" })}
                    <span className="font-cairo">{Math.abs(product.growth)}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order Status Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 font-cairo mb-6">توزيع حالات الطلبات</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full ml-3"></div>
                <span className="text-sm text-gray-600 font-cairo">جديد</span>
              </div>
              <span className="text-sm font-medium text-gray-900 font-cairo">12 طلب</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full ml-3"></div>
                <span className="text-sm text-gray-600 font-cairo">قيد التحضير</span>
              </div>
              <span className="text-sm font-medium text-gray-900 font-cairo">8 طلب</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full ml-3"></div>
                <span className="text-sm text-gray-600 font-cairo">تم الشحن</span>
              </div>
              <span className="text-sm font-medium text-gray-900 font-cairo">15 طلب</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full ml-3"></div>
                <span className="text-sm text-gray-600 font-cairo">مكتمل</span>
              </div>
              <span className="text-sm font-medium text-gray-900 font-cairo">42 طلب</span>
            </div>
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 font-cairo mb-6">مصادر الزيارات</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 font-cairo">البحث المباشر</span>
              <span className="text-sm font-medium text-gray-900 font-cairo">45%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 font-cairo">وسائل التواصل الاجتماعي</span>
              <span className="text-sm font-medium text-gray-900 font-cairo">32%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 font-cairo">البريد الإلكتروني</span>
              <span className="text-sm font-medium text-gray-900 font-cairo">15%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 font-cairo">الإعلانات</span>
              <span className="text-sm font-medium text-gray-900 font-cairo">8%</span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 font-cairo mb-6">النشاط الأخير</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3"></div>
              <div>
                <p className="text-sm text-gray-900 font-cairo">طلب جديد من سارة أحمد</p>
                <p className="text-xs text-gray-500 font-cairo flex items-center mt-1">
                  <ClockIcon className="h-3 w-3 ml-1" />
                  منذ 5 دقائق
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-3"></div>
              <div>
                <p className="text-sm text-gray-900 font-cairo">تم تحديث المنتج: ثوب رمضاني</p>
                <p className="text-xs text-gray-500 font-cairo flex items-center mt-1">
                  <ClockIcon className="h-3 w-3 ml-1" />
                  منذ 15 دقيقة
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 ml-3"></div>
              <div>
                <p className="text-sm text-gray-900 font-cairo">تم شحن طلب #ORD-2024-002</p>
                <p className="text-xs text-gray-500 font-cairo flex items-center mt-1">
                  <ClockIcon className="h-3 w-3 ml-1" />
                  منذ 30 دقيقة
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 ml-3"></div>
              <div>
                <p className="text-sm text-gray-900 font-cairo">عميل جديد: فاطمة محمد</p>
                <p className="text-xs text-gray-500 font-cairo flex items-center mt-1">
                  <ClockIcon className="h-3 w-3 ml-1" />
                  منذ ساعة
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
