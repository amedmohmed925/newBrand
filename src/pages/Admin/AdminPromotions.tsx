import React, { useState } from 'react';
import { IslamicIcon } from '../../components/Icons/IslamicIcon';
import { formatPrice } from '../../utils/priceUtils';
import { 
  PlusIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  GiftIcon,
  CalendarIcon,
  PercentBadgeIcon,
  CurrencyDollarIcon,
  TagIcon
} from '@heroicons/react/24/outline';

interface Promotion {
  id: string;
  name: string;
  type: 'percentage' | 'fixed' | 'shipping';
  value: number;
  code: string;
  startDate: string;
  endDate: string;
  status: 'نشط' | 'غير نشط' | 'منتهي';
  usageCount: number;
  usageLimit: number;
  minOrderAmount: number;
}

export const AdminPromotions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const promotions: Promotion[] = [
    {
      id: 'PROMO-001',
      name: 'خصم رمضان الكريم',
      type: 'percentage',
      value: 20,
      code: 'RAMADAN20',
      startDate: '2024-03-10',
      endDate: '2024-04-10',
      status: 'نشط',
      usageCount: 45,
      usageLimit: 100,
      minOrderAmount: 500
    },
    {
      id: 'PROMO-002',
      name: 'شحن مجاني',
      type: 'shipping',
      value: 0,
      code: 'FREESHIP',
      startDate: '2024-03-01',
      endDate: '2024-12-31',
      status: 'نشط',
      usageCount: 128,
      usageLimit: 0,
      minOrderAmount: 300
    },
    {
      id: 'PROMO-003',
      name: 'خصم العملاء الجدد',
      type: 'fixed',
      value: 50,
      code: 'WELCOME50',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      status: 'نشط',
      usageCount: 67,
      usageLimit: 200,
      minOrderAmount: 200
    },
    {
      id: 'PROMO-004',
      name: 'عرض الصيف',
      type: 'percentage',
      value: 15,
      code: 'SUMMER15',
      startDate: '2024-06-01',
      endDate: '2024-08-31',
      status: 'غير نشط',
      usageCount: 0,
      usageLimit: 150,
      minOrderAmount: 400
    },
    {
      id: 'PROMO-005',
      name: 'عرض العيد',
      type: 'percentage',
      value: 25,
      code: 'EID25',
      startDate: '2024-01-15',
      endDate: '2024-02-15',
      status: 'منتهي',
      usageCount: 89,
      usageLimit: 100,
      minOrderAmount: 300
    }
  ];

  const statusOptions = ['جميع الحالات', 'نشط', 'غير نشط', 'منتهي'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'نشط':
        return 'bg-green-100 text-green-800';
      case 'غير نشط':
        return 'bg-yellow-100 text-yellow-800';
      case 'منتهي':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'percentage':
        return PercentBadgeIcon;
      case 'fixed':
        return CurrencyDollarIcon;
      case 'shipping':
        return GiftIcon;
      default:
        return TagIcon;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'percentage':
        return 'نسبة مئوية';
      case 'fixed':
        return 'مبلغ ثابت';
      case 'shipping':
        return 'شحن مجاني';
      default:
        return 'غير محدد';
    }
  };

  const filteredPromotions = promotions.filter(promotion => {
    const matchesSearch = promotion.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         promotion.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !filterStatus || filterStatus === 'جميع الحالات' || promotion.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleDeletePromotion = (promotionId: string) => {
    if (window.confirm('هل أنت متأكد من حذف هذا العرض؟')) {
      console.log(`حذف العرض: ${promotionId}`);
      // هنا يمكن إضافة المنطق الفعلي لحذف العرض
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 font-cairo mb-2">إدارة العروض والخصومات</h1>
          <p className="text-gray-600 font-cairo">إنشاء وإدارة العروض والكوبونات</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-4">
          <button className="inline-flex items-center px-4 py-2 bg-gold-600 text-white text-sm font-medium rounded-lg hover:bg-gold-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 font-cairo">
            <PlusIcon className="h-4 w-4 ml-2" />
            إضافة عرض جديد
          </button>
          <div className="flex items-center gap-4 text-sm text-gray-600 font-cairo">
            <span className="flex items-center gap-2">
              <GiftIcon className="h-5 w-5" />
              إجمالي العروض: {filteredPromotions.length}
            </span>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 font-cairo">العروض النشطة</p>
              <p className="text-2xl font-bold text-gray-900 font-cairo">
                {promotions.filter(p => p.status === 'نشط').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <GiftIcon className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 font-cairo">إجمالي الاستخدامات</p>
              <p className="text-2xl font-bold text-gray-900 font-cairo">
                {promotions.reduce((sum, p) => sum + p.usageCount, 0)}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <TagIcon className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 font-cairo">التوفير الإجمالي</p>
              <p className="text-2xl font-bold text-gray-900 font-cairo">
                {formatPrice(125000)}
              </p>
            </div>
            <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center">
              <IslamicIcon type="pattern" className="text-gold-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 font-cairo">متوسط الخصم</p>
              <p className="text-2xl font-bold text-gray-900 font-cairo">18%</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <PercentBadgeIcon className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="البحث في العروض..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
            />
          </div>
          
          <div className="relative">
            <FunnelIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo appearance-none"
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-4 text-sm">
              <span className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                نشط ({promotions.filter(p => p.status === 'نشط').length})
              </span>
              <span className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                غير نشط ({promotions.filter(p => p.status === 'غير نشط').length})
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Promotions Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">العرض</th>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">النوع</th>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">الكود</th>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">التاريخ</th>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">الاستخدام</th>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">الحالة</th>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredPromotions.map((promotion) => {
                const TypeIcon = getTypeIcon(promotion.type);
                return (
                  <tr key={promotion.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div>
                        <div className="text-sm font-medium text-gray-900 font-cairo">
                          {promotion.name}
                        </div>
                        <div className="text-sm text-gray-500 font-cairo">
                          {promotion.type === 'percentage' ? `${promotion.value}%` : 
                           promotion.type === 'fixed' ? formatPrice(promotion.value) : 
                           'شحن مجاني'}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <TypeIcon className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-900 font-cairo">
                          {getTypeLabel(promotion.type)}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <code className="px-2 py-1 bg-gray-100 rounded text-sm font-mono">
                        {promotion.code}
                      </code>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm text-gray-900 font-cairo">
                        <div className="flex items-center gap-1 mb-1">
                          <CalendarIcon className="h-4 w-4 text-gray-400" />
                          {new Date(promotion.startDate).toLocaleDateString('ar-EG')}
                        </div>
                        <div className="text-gray-500">
                          إلى {new Date(promotion.endDate).toLocaleDateString('ar-EG')}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm font-medium text-gray-900 font-cairo">
                        {promotion.usageCount}
                        {promotion.usageLimit > 0 && ` / ${promotion.usageLimit}`}
                      </div>
                      {promotion.usageLimit > 0 && (
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${(promotion.usageCount / promotion.usageLimit) * 100}%` }}
                          ></div>
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium font-cairo ${getStatusColor(promotion.status)}`}>
                        {promotion.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <button
                          className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors"
                          title="عرض التفاصيل"
                        >
                          <EyeIcon className="h-4 w-4" />
                        </button>
                        <button
                          className="p-2 text-green-600 hover:text-green-800 hover:bg-green-50 rounded-lg transition-colors"
                          title="تحرير"
                        >
                          <PencilIcon className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDeletePromotion(promotion.id)}
                          className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors"
                          title="حذف"
                        >
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {filteredPromotions.length === 0 && (
          <div className="text-center py-12">
            <GiftIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900 font-cairo">لا توجد عروض</h3>
            <p className="mt-1 text-sm text-gray-500 font-cairo">
              {searchTerm || filterStatus ? 'لا توجد عروض تطابق البحث' : 'لم يتم إنشاء أي عروض بعد'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
