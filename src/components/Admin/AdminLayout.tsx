import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IslamicIcon } from '../Icons/IslamicIcon';
import { PageTitle } from '../Layout/PageTitle';
import { 
  HomeIcon, 
  ShoppingBagIcon, 
  UserGroupIcon, 
  ChartBarIcon,
  CogIcon,
  ArrowRightStartOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
  ClipboardDocumentListIcon,
  GiftIcon
} from '@heroicons/react/24/outline';

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'لوحة التحكم', href: '/admin', icon: HomeIcon },
    { name: 'المنتجات', href: '/admin/products', icon: ShoppingBagIcon },
    { name: 'الطلبات', href: '/admin/orders', icon: ClipboardDocumentListIcon },
    { name: 'العملاء', href: '/admin/customers', icon: UserGroupIcon },
    { name: 'التقارير', href: '/admin/analytics', icon: ChartBarIcon },
    { name: 'العروض', href: '/admin/promotions', icon: GiftIcon },
    { name: 'الإعدادات', href: '/admin/settings', icon: CogIcon },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-cairo">
      <PageTitle customTitle="لوحة التحكم" brandName="رونق - لوحة الإدارة" />
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-xl transform ${
        sidebarOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform lg:translate-x-0 flex flex-col h-screen`}>
        
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center">
            <IslamicIcon type="crescent" className="text-gold-500 ml-2" />
            <span className="text-xl font-bold text-gray-900">رونق - الإدارة</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 text-gray-400 hover:text-gray-600"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-4 flex-1">
          <div className="space-y-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href || 
                (item.href !== '/admin' && location.pathname.startsWith(item.href));
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-gold-100 text-gold-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* User Menu */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center">
              <IslamicIcon type="star" size="sm" className="text-gold-600" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-900">أحمد محمد</p>
              <p className="text-xs text-gray-500">مدير المتجر</p>
            </div>
          </div>
          <button className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowRightStartOnRectangleIcon className="h-4 w-4" />
            تسجيل الخروج
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pr-64 min-h-screen">
        {/* Top bar */}
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-6">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-gray-400 hover:text-gray-600"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
            
            <div className="flex items-center gap-2">
              <IslamicIcon type="pattern" size="sm" className="text-gold-500" />
              <span className="text-sm text-gray-600">لوحة التحكم الرئيسية</span>
            </div>

            <div className="flex items-center gap-4">
              <Link 
                to="/"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                عرض المتجر
              </Link>
              <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center">
                <IslamicIcon type="star" size="sm" className="text-gold-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;