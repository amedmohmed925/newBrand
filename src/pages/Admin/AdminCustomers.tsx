import React, { useState } from 'react';
import { IslamicIcon } from '../../components/Icons/IslamicIcon';
import { formatPrice } from '../../utils/priceUtils';
import { 
  EyeIcon,
  PencilIcon,
  TrashIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  UsersIcon,
  UserPlusIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  registrationDate: string;
  totalOrders: number;
  totalSpent: number;
  status: 'نشط' | 'غير نشط' | 'محظور';
  lastOrderDate?: string;
}

export const AdminCustomers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const customers: Customer[] = [
    {
      id: 'CUST-001',
      name: 'سارة أحمد محمد',
      email: 'sara.ahmed@example.com',
      phone: '+20 10 1234 5678',
      address: 'القاهرة، مدينة نصر، شارع مصطفى النحاس، رقم 45',
      registrationDate: '2024-01-15',
      totalOrders: 5,
      totalSpent: 4850,
      status: 'نشط',
      lastOrderDate: '2024-03-15'
    },
    {
      id: 'CUST-002',
      name: 'فاطمة محمد علي',
      email: 'fatima.mohamed@example.com',
      phone: '+20 11 9876 5432',
      address: 'الجيزة، الدقي، شارع التحرير، رقم 78',
      registrationDate: '2024-02-03',
      totalOrders: 3,
      totalSpent: 2970,
      status: 'نشط',
      lastOrderDate: '2024-03-15'
    },
    {
      id: 'CUST-003',
      name: 'عائشة علي محمود',
      email: 'aisha.ali@example.com',
      phone: '+20 12 5555 4444',
      address: 'الإسكندرية، سموحة، شارع سوريا، رقم 12',
      registrationDate: '2023-11-20',
      totalOrders: 8,
      totalSpent: 6720,
      status: 'نشط',
      lastOrderDate: '2024-03-14'
    },
    {
      id: 'CUST-004',
      name: 'زينب خالد حسن',
      email: 'zeinab.khaled@example.com',
      phone: '+20 10 7777 8888',
      address: 'القاهرة، الزمالك، شارع 26 يوليو، رقم 33',
      registrationDate: '2024-01-08',
      totalOrders: 2,
      totalSpent: 1845,
      status: 'نشط',
      lastOrderDate: '2024-03-13'
    },
    {
      id: 'CUST-005',
      name: 'مريم أحمد سالم',
      email: 'mariam.ahmed@example.com',
      phone: '+20 11 3333 2222',
      address: 'القاهرة، المعادي، شارع 9، رقم 67',
      registrationDate: '2023-12-10',
      totalOrders: 1,
      totalSpent: 0,
      status: 'غير نشط',
      lastOrderDate: undefined
    },
    {
      id: 'CUST-006',
      name: 'نورا عبد الرحمن',
      email: 'nora.abdulrahman@example.com',
      phone: '+20 12 1111 9999',
      address: 'الجيزة، الهرم، شارع الهرم الرئيسي، رقم 156',
      registrationDate: '2023-10-05',
      totalOrders: 0,
      totalSpent: 0,
      status: 'محظور'
    }
  ];

  const statusOptions = ['جميع الحالات', 'نشط', 'غير نشط', 'محظور'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'نشط':
        return 'bg-green-100 text-green-800';
      case 'غير نشط':
        return 'bg-yellow-100 text-yellow-800';
      case 'محظور':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.phone.includes(searchTerm);
    const matchesStatus = !filterStatus || filterStatus === 'جميع الحالات' || customer.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleDeleteCustomer = (customerId: string) => {
    if (window.confirm('هل أنت متأكد من حذف هذا العميل؟')) {
      console.log(`حذف العميل: ${customerId}`);
      // هنا يمكن إضافة المنطق الفعلي لحذف العميل
    }
  };

  const getCustomerSegment = (totalSpent: number) => {
    if (totalSpent >= 5000) return { label: 'عميل ذهبي', color: 'text-yellow-600' };
    if (totalSpent >= 2000) return { label: 'عميل فضي', color: 'text-gray-600' };
    if (totalSpent >= 500) return { label: 'عميل برونزي', color: 'text-orange-600' };
    return { label: 'عميل جديد', color: 'text-blue-600' };
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 font-cairo mb-2">إدارة العملاء</h1>
          <p className="text-gray-600 font-cairo">متابعة وإدارة بيانات العملاء</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-4">
          <button className="inline-flex items-center px-4 py-2 bg-gold-600 text-white text-sm font-medium rounded-lg hover:bg-gold-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 font-cairo">
            <UserPlusIcon className="h-4 w-4 ml-2" />
            إضافة عميل جديد
          </button>
          <div className="flex items-center gap-4 text-sm text-gray-600 font-cairo">
            <span className="flex items-center gap-2">
              <UsersIcon className="h-5 w-5" />
              إجمالي العملاء: {filteredCustomers.length}
            </span>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 font-cairo">العملاء النشطون</p>
              <p className="text-2xl font-bold text-gray-900 font-cairo">
                {customers.filter(c => c.status === 'نشط').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <UsersIcon className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 font-cairo">عملاء جدد هذا الشهر</p>
              <p className="text-2xl font-bold text-gray-900 font-cairo">
                {customers.filter(c => new Date(c.registrationDate).getMonth() === new Date().getMonth()).length}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <UserPlusIcon className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 font-cairo">إجمالي المبيعات</p>
              <p className="text-2xl font-bold text-gray-900 font-cairo">
                {formatPrice(customers.reduce((sum, c) => sum + c.totalSpent, 0))}
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
              <p className="text-sm font-medium text-gray-600 font-cairo">متوسط الإنفاق</p>
              <p className="text-2xl font-bold text-gray-900 font-cairo">
                {formatPrice(customers.filter(c => c.totalSpent > 0).reduce((sum, c) => sum + c.totalSpent, 0) / customers.filter(c => c.totalSpent > 0).length || 0)}
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <IslamicIcon type="star" className="text-purple-600" />
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
              placeholder="البحث عن عميل..."
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
                نشط ({customers.filter(c => c.status === 'نشط').length})
              </span>
              <span className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                غير نشط ({customers.filter(c => c.status === 'غير نشط').length})
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">العميل</th>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">معلومات الاتصال</th>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">تاريخ التسجيل</th>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">الطلبات</th>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">إجمالي الإنفاق</th>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">الحالة</th>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredCustomers.map((customer) => {
                const segment = getCustomerSegment(customer.totalSpent);
                return (
                  <tr key={customer.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div>
                        <div className="text-sm font-medium text-gray-900 font-cairo">
                          {customer.name}
                        </div>
                        <div className={`text-xs ${segment.color} font-cairo`}>
                          {segment.label}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="space-y-1">
                        <div className="flex items-center text-sm text-gray-900">
                          <EnvelopeIcon className="h-4 w-4 text-gray-400 ml-2" />
                          {customer.email}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <PhoneIcon className="h-4 w-4 text-gray-400 ml-2" />
                          {customer.phone}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPinIcon className="h-4 w-4 text-gray-400 ml-2" />
                          <span className="truncate max-w-xs" title={customer.address}>
                            {customer.address}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center text-sm text-gray-900 font-cairo">
                        <CalendarIcon className="h-4 w-4 text-gray-400 ml-2" />
                        {new Date(customer.registrationDate).toLocaleDateString('ar-EG')}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm font-medium text-gray-900 font-cairo">
                        {customer.totalOrders} طلب
                      </div>
                      {customer.lastOrderDate && (
                        <div className="text-sm text-gray-500 font-cairo">
                          آخر طلب: {new Date(customer.lastOrderDate).toLocaleDateString('ar-EG')}
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm font-medium text-gray-900 font-cairo">
                        {formatPrice(customer.totalSpent)}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium font-cairo ${getStatusColor(customer.status)}`}>
                        {customer.status}
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
                          onClick={() => handleDeleteCustomer(customer.id)}
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

        {filteredCustomers.length === 0 && (
          <div className="text-center py-12">
            <UsersIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900 font-cairo">لا يوجد عملاء</h3>
            <p className="mt-1 text-sm text-gray-500 font-cairo">
              {searchTerm || filterStatus ? 'لا يوجد عملاء تطابق البحث' : 'لم يتم تسجيل أي عملاء بعد'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
