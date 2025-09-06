import React, { useState } from 'react';
import { 
  PlusIcon,
  BellIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  UserGroupIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  CalendarIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'email' | 'sms' | 'push';
  target: 'all' | 'customers' | 'specific';
  targetCount: number;
  status: 'مرسل' | 'مجدول' | 'مسودة' | 'فشل';
  sentDate?: string;
  scheduledDate?: string;
  openRate?: number;
  clickRate?: number;
}

export const AdminNotifications: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const notifications: Notification[] = [
    {
      id: 'NOTIF-001',
      title: 'عرض رمضان الكريم',
      message: 'استمتعي بخصم 20% على جميع المنتجات بمناسبة شهر رمضان الكريم',
      type: 'email',
      target: 'all',
      targetCount: 1250,
      status: 'مرسل',
      sentDate: '2024-03-15T10:00:00',
      openRate: 67.8,
      clickRate: 12.5
    },
    {
      id: 'NOTIF-002',
      title: 'منتجات جديدة وصلت',
      message: 'اكتشفي مجموعتنا الجديدة من العبايات العصرية',
      type: 'push',
      target: 'customers',
      targetCount: 892,
      status: 'مرسل',
      sentDate: '2024-03-14T15:30:00',
      openRate: 45.2,
      clickRate: 8.7
    },
    {
      id: 'NOTIF-003',
      title: 'تذكير بالعربة المهجورة',
      message: 'لا تنسي إكمال طلبك! العناصر في عربتك تنتظرك',
      type: 'email',
      target: 'specific',
      targetCount: 156,
      status: 'مجدول',
      scheduledDate: '2024-03-16T09:00:00'
    },
    {
      id: 'NOTIF-004',
      title: 'شحن مجاني',
      message: 'شحن مجاني على جميع الطلبات فوق 300 جنيه',
      type: 'sms',
      target: 'all',
      targetCount: 980,
      status: 'مسودة'
    },
    {
      id: 'NOTIF-005',
      title: 'تأكيد الطلب',
      message: 'تم تأكيد طلبك بنجاح وسيتم شحنه خلال 24 ساعة',
      type: 'email',
      target: 'specific',
      targetCount: 45,
      status: 'فشل',
      sentDate: '2024-03-13T12:00:00'
    }
  ];

  const typeOptions = ['جميع الأنواع', 'email', 'sms', 'push'];
  const statusOptions = ['جميع الحالات', 'مرسل', 'مجدول', 'مسودة', 'فشل'];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'email':
        return EnvelopeIcon;
      case 'sms':
        return DevicePhoneMobileIcon;
      case 'push':
        return BellIcon;
      default:
        return GlobeAltIcon;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'email':
        return 'بريد إلكتروني';
      case 'sms':
        return 'رسالة نصية';
      case 'push':
        return 'إشعار فوري';
      default:
        return 'غير محدد';
    }
  };

  const getTargetLabel = (target: string) => {
    switch (target) {
      case 'all':
        return 'جميع المستخدمين';
      case 'customers':
        return 'العملاء فقط';
      case 'specific':
        return 'مجموعة محددة';
      default:
        return 'غير محدد';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'مرسل':
        return 'bg-green-100 text-green-800';
      case 'مجدول':
        return 'bg-blue-100 text-blue-800';
      case 'مسودة':
        return 'bg-yellow-100 text-yellow-800';
      case 'فشل':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'مرسل':
        return CheckCircleIcon;
      case 'فشل':
        return XCircleIcon;
      default:
        return ClockIcon;
    }
  };

  const filteredNotifications = notifications.filter(notification => {
    const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notification.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !filterType || filterType === 'جميع الأنواع' || notification.type === filterType;
    const matchesStatus = !filterStatus || filterStatus === 'جميع الحالات' || notification.status === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  const handleDeleteNotification = (notificationId: string) => {
    if (window.confirm('هل أنت متأكد من حذف هذا الإشعار؟')) {
      console.log(`حذف الإشعار: ${notificationId}`);
      // هنا يمكن إضافة المنطق الفعلي لحذف الإشعار
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 font-cairo mb-2">إدارة الإشعارات</h1>
          <p className="text-gray-600 font-cairo">إرسال وإدارة الإشعارات للعملاء</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-4">
          <button className="inline-flex items-center px-4 py-2 bg-gold-600 text-white text-sm font-medium rounded-lg hover:bg-gold-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 font-cairo">
            <PlusIcon className="h-4 w-4 ml-2" />
            إشعار جديد
          </button>
          <div className="flex items-center gap-4 text-sm text-gray-600 font-cairo">
            <span className="flex items-center gap-2">
              <BellIcon className="h-5 w-5" />
              إجمالي الإشعارات: {filteredNotifications.length}
            </span>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 font-cairo">إشعارات مرسلة</p>
              <p className="text-2xl font-bold text-gray-900 font-cairo">
                {notifications.filter(n => n.status === 'مرسل').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircleIcon className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 font-cairo">إشعارات مجدولة</p>
              <p className="text-2xl font-bold text-gray-900 font-cairo">
                {notifications.filter(n => n.status === 'مجدول').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <CalendarIcon className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 font-cairo">معدل الفتح</p>
              <p className="text-2xl font-bold text-gray-900 font-cairo">
                {(notifications.filter(n => n.openRate).reduce((sum, n) => sum + (n.openRate || 0), 0) / notifications.filter(n => n.openRate).length || 0).toFixed(1)}%
              </p>
            </div>
            <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center">
              <EyeIcon className="h-6 w-6 text-gold-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 font-cairo">المستقبلين</p>
              <p className="text-2xl font-bold text-gray-900 font-cairo">
                {notifications.reduce((sum, n) => sum + n.targetCount, 0).toLocaleString()}
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <UserGroupIcon className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="البحث في الإشعارات..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
            />
          </div>
          
          <div className="relative">
            <FunnelIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo appearance-none"
            >
              {typeOptions.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
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
                مرسل ({notifications.filter(n => n.status === 'مرسل').length})
              </span>
              <span className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                مجدول ({notifications.filter(n => n.status === 'مجدول').length})
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Notifications Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">الإشعار</th>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">النوع</th>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">المستهدفين</th>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">التاريخ</th>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">الأداء</th>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">الحالة</th>
                <th className="text-right py-4 px-6 font-semibold text-gray-900 font-cairo">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredNotifications.map((notification) => {
                const TypeIcon = getTypeIcon(notification.type);
                const StatusIcon = getStatusIcon(notification.status);
                return (
                  <tr key={notification.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div>
                        <div className="text-sm font-medium text-gray-900 font-cairo">
                          {notification.title}
                        </div>
                        <div className="text-sm text-gray-500 font-cairo truncate max-w-xs">
                          {notification.message}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <TypeIcon className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-900 font-cairo">
                          {getTypeLabel(notification.type)}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm text-gray-900 font-cairo">
                        <div className="font-medium">{notification.targetCount.toLocaleString()}</div>
                        <div className="text-gray-500">{getTargetLabel(notification.target)}</div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm text-gray-900 font-cairo">
                        {notification.sentDate && (
                          <div className="flex items-center gap-1">
                            <CalendarIcon className="h-4 w-4 text-gray-400" />
                            {new Date(notification.sentDate).toLocaleDateString('ar-EG')}
                          </div>
                        )}
                        {notification.scheduledDate && (
                          <div className="flex items-center gap-1 text-blue-600">
                            <ClockIcon className="h-4 w-4" />
                            {new Date(notification.scheduledDate).toLocaleDateString('ar-EG')}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      {notification.openRate !== undefined && (
                        <div className="text-sm font-cairo">
                          <div className="text-gray-900">فتح: {notification.openRate}%</div>
                          {notification.clickRate !== undefined && (
                            <div className="text-gray-500">نقر: {notification.clickRate}%</div>
                          )}
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <StatusIcon className="h-4 w-4 text-gray-400" />
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium font-cairo ${getStatusColor(notification.status)}`}>
                          {notification.status}
                        </span>
                      </div>
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
                          onClick={() => handleDeleteNotification(notification.id)}
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

        {filteredNotifications.length === 0 && (
          <div className="text-center py-12">
            <BellIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900 font-cairo">لا توجد إشعارات</h3>
            <p className="mt-1 text-sm text-gray-500 font-cairo">
              {searchTerm || filterType || filterStatus ? 'لا توجد إشعارات تطابق البحث' : 'لم يتم إرسال أي إشعارات بعد'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
