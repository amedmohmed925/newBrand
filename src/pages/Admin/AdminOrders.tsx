import React, { useState } from 'react';
import { IslamicIcon } from '../../components/Icons/IslamicIcon';
import { formatPrice } from '../../utils/priceUtils';
import { 
  EyeIcon,
  PencilIcon,
  CheckIcon,
  TruckIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline';

interface Order {
  id: string;
  customer: string;
  email: string;
  total: number;
  status: string;
  date: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  address: string;
}

export const AdminOrders: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const orders: Order[] = [
    {
      id: 'ORD-2024-001',
      customer: 'سارة أحمد محمد',
      email: 'sara.ahmed@example.com',
      total: 1245,
      status: 'جديد',
      date: '2024-03-15T10:30:00',
      items: [
        { name: 'ثوب رمضاني مطرز', quantity: 1, price: 1245 }
      ],
      address: 'القاهرة، مدينة نصر، شارع مصطفى النحاس'
    },
    {
      id: 'ORD-2024-002',
      customer: 'فاطمة محمد علي',
      email: 'fatima.mohamed@example.com',
      total: 1875,
      status: 'قيد التحضير',
      date: '2024-03-15T09:15:00',
      items: [
        { name: 'عباية حديثة بتطريز هندسي', quantity: 2, price: 850 },
        { name: 'حجاب حريري فاخر', quantity: 1, price: 370 }
      ],
      address: 'الجيزة، الدقي، شارع التحرير'
    },
    {
      id: 'ORD-2024-003',
      customer: 'عائشة علي محمود',
      email: 'aisha.ali@example.com',
      total: 830,
      status: 'تم الشحن',
      date: '2024-03-14T14:45:00',
      items: [
        { name: 'قميص قطني بكم طويل', quantity: 1, price: 620 }
      ],
      address: 'الإسكندرية، سموحة، شارع سوريا'
    },
    {
      id: 'ORD-2024-004',
      customer: 'زينب خالد حسن',
      email: 'zeinab.khaled@example.com',
      total: 1350,
      status: 'مكتمل',
      date: '2024-03-13T16:20:00',
      items: [
        { name: 'تنورة طويلة بطيات', quantity: 1, price: 495 },
        { name: 'كردجان صوفي دافئ', quantity: 1, price: 750 }
      ],
      address: 'القاهرة، الزمالك، شارع 26 يوليو'
    },
    {
      id: 'ORD-2024-005',
      customer: 'مريم أحمد سالم',
      email: 'mariam.ahmed@example.com',
      total: 2200,
      status: 'ملغي',
      date: '2024-03-12T11:10:00',
      items: [
        { name: 'ثوب رمضاني مطرز', quantity: 1, price: 1245 },
        { name: 'عباية حديثة بتطريز هندسي', quantity: 1, price: 850 }
      ],
      address: 'القاهرة، المعادي، شارع 9'
    }
  ];

  const statusOptions = ['جميع الحالات', 'جديد', 'قيد التحضير', 'تم الشحن', 'مكتمل', 'ملغي'];

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
      case 'ملغي':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusActions = (status: string) => {
    switch (status) {
      case 'جديد':
        return [
          { label: 'قبول', action: 'accept', color: 'text-green-600 hover:text-green-800', icon: CheckIcon },
          { label: 'رفض', action: 'reject', color: 'text-red-600 hover:text-red-800', icon: XMarkIcon }
        ];
      case 'قيد التحضير':
        return [
          { label: 'شحن', action: 'ship', color: 'text-purple-600 hover:text-purple-800', icon: TruckIcon }
        ];
      case 'تم الشحن':
        return [
          { label: 'تأكيد التسليم', action: 'deliver', color: 'text-green-600 hover:text-green-800', icon: CheckIcon }
        ];
      default:
        return [];
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !filterStatus || filterStatus === 'جميع الحالات' || order.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = (orderId: string, action: string) => {
    console.log(`تغيير حالة الطلب ${orderId} إلى ${action}`);
    // هنا يمكن إضافة المنطق الفعلي لتغيير حالة الطلب
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 font-cairo mb-2">إدارة الطلبات</h1>
          <p className="text-gray-600 font-cairo">متابعة وإدارة طلبات العملاء</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-4 text-sm text-gray-600 font-cairo">
          <span className="flex items-center gap-2">
            <ClipboardDocumentListIcon className="h-5 w-5" />
            إجمالي الطلبات: {filteredOrders.length}
          </span>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="البحث في الطلبات..."
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
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                جديد ({orders.filter(o => o.status === 'جديد').length})
              </span>
              <span className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                قيد التحضير ({orders.filter(o => o.status === 'قيد التحضير').length})
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">رقم الطلب</th>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">العميل</th>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">التاريخ</th>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">المبلغ</th>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">الحالة</th>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="text-sm font-medium text-gray-900 font-cairo">
                      #{order.id}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <div className="text-sm font-medium text-gray-900 font-cairo">
                        {order.customer}
                      </div>
                      <div className="text-sm text-gray-500">
                        {order.email}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-sm text-gray-900 font-cairo">
                      {new Date(order.date).toLocaleDateString('ar-EG')}
                    </div>
                    <div className="text-sm text-gray-500 font-cairo">
                      {new Date(order.date).toLocaleTimeString('ar-EG', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-sm font-medium text-gray-900 font-cairo">
                      {formatPrice(order.total)}
                    </div>
                    <div className="text-sm text-gray-500 font-cairo">
                      {order.items.length} منتج
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium font-cairo ${getStatusColor(order.status)}`}>
                      {order.status}
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
                      {getStatusActions(order.status).map((statusAction) => (
                        <button
                          key={statusAction.action}
                          onClick={() => handleStatusChange(order.id, statusAction.action)}
                          className={`p-2 hover:bg-gray-50 rounded-lg transition-colors ${statusAction.color}`}
                          title={statusAction.label}
                        >
                          <statusAction.icon className="h-4 w-4" />
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <ClipboardDocumentListIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900 font-cairo">لا توجد طلبات</h3>
            <p className="mt-1 text-sm text-gray-500 font-cairo">
              {searchTerm || filterStatus ? 'لا توجد طلبات تطابق البحث' : 'لم يتم تقديم أي طلبات بعد'}
            </p>
          </div>
        )}
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 font-cairo">اليوم</p>
              <p className="text-2xl font-bold text-gray-900 font-cairo">
                {orders.filter(o => new Date(o.date).toDateString() === new Date().toDateString()).length}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <IslamicIcon type="star" className="text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 font-cairo">هذا الأسبوع</p>
              <p className="text-2xl font-bold text-gray-900 font-cairo">{orders.length}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <IslamicIcon type="crescent" className="text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 font-cairo">المبيعات اليوم</p>
              <p className="text-2xl font-bold text-gray-900 font-cairo">
                {formatPrice(orders.filter(o => 
                  new Date(o.date).toDateString() === new Date().toDateString() && 
                  o.status !== 'ملغي'
                ).reduce((sum, o) => sum + o.total, 0))}
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
              <p className="text-sm font-medium text-gray-600 font-cairo">متوسط الطلب</p>
              <p className="text-2xl font-bold text-gray-900 font-cairo">
                {formatPrice(orders.filter(o => o.status !== 'ملغي').reduce((sum, o) => sum + o.total, 0) / orders.filter(o => o.status !== 'ملغي').length || 0)}
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <ClipboardDocumentListIcon className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
