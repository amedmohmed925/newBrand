import React, { useState } from 'react';
import { ShoppingBagIcon, UserIcon, MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { IslamicIcon } from '../Icons/IslamicIcon';
import { useCart } from '../../hooks/useCart';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const navigation = [
    { name: 'الرئيسية', href: '/' },
    { name: 'المتجر', href: '/shop' },
    { name: 'المجموعات', href: '/collections' },
    { name: 'عن رونق', href: '/about' },
    { name: 'تواصل معنا', href: '/contact' },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-gold-500 text-white text-center py-2 text-sm">
        <IslamicIcon type="star" size="sm" className="inline ml-2" />
        شحن مجاني لجميع الطلبات فوق 800 جنيه
        <IslamicIcon type="star" size="sm" className="inline mr-2" />
      </div>

      <header className="bg-white shadow-sm border-b border-gray-100">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <XMarkIcon className="block h-6 w-6" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" />
                )}
              </button>
            </div>

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <IslamicIcon type="crescent" className="text-gold-500 ml-2" />
              <span className="text-2xl font-bold font-cairo text-gray-900">رونق</span>
            </Link>

            {/* Navigation - Desktop */}
            <div className="hidden lg:flex lg:space-x-reverse lg:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-900 hover:text-gold-500 px-3 py-2 text-sm font-medium font-cairo transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-reverse space-x-4">
              <button className="text-gray-400 hover:text-gray-500 p-2">
                <MagnifyingGlassIcon className="h-6 w-6" />
              </button>
              <Link to="/account" className="text-gray-400 hover:text-gray-500 p-2">
                <UserIcon className="h-6 w-6" />
              </Link>
              <Link to="/cart" className="text-gray-400 hover:text-gray-500 p-2 relative">
                <ShoppingBagIcon className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gold-500 hover:bg-gray-50 font-cairo"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};