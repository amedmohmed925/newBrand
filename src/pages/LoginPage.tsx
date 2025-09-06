import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IslamicIcon } from '../components/Icons/IslamicIcon';
import { usePageTitle } from '../hooks/usePageTitle';
import { validateLogin, saveUser, DEMO_ACCOUNTS } from '../utils/auth';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  usePageTitle({ title: 'تسجيل الدخول' });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // محاكاة تأخير الشبكة
    await new Promise(resolve => setTimeout(resolve, 1000));

    // التحقق من بيانات الدخول
    const user = validateLogin(email, password);

    if (user) {
      // حفظ بيانات المستخدم
      saveUser(user);
      toast.success(`مرحباً ${user.name}!`);
      
      // توجيه المستخدم حسب نوع الحساب
      if (user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/account');
      }
    } else {
      toast.error('بيانات الدخول غير صحيحة');
    }

    setIsLoading(false);
  };

  const fillDemoAccount = (type: 'user' | 'admin') => {
    const account = DEMO_ACCOUNTS[type];
    setEmail(account.email);
    setPassword(account.password);
    toast.success(`تم ملء بيانات ${type === 'admin' ? 'المدير' : 'المستخدم'} التجريبية`);
  };

  return (
    <div className="min-h-screen auth-bg flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <IslamicIcon type="crescent" size="lg" className="text-gold-500" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 font-cairo">
            تسجيل الدخول
          </h2>
          <p className="mt-2 text-sm text-gray-600 font-cairo">
            أهلاً بك مرة أخرى في رونق
          </p>
        </div>

        {/* Demo Accounts */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="text-sm font-bold text-blue-800 font-cairo mb-3">حسابات تجريبية للاختبار:</h3>
          <div className="space-y-2">
            <button
              onClick={() => fillDemoAccount('user')}
              className="w-full text-left bg-white border border-blue-200 rounded px-3 py-2 text-xs hover:bg-blue-50 transition-colors"
            >
              <div className="font-cairo text-blue-700">
                <strong>مستخدم عادي:</strong> user@demo.com / 123456
              </div>
            </button>
            <button
              onClick={() => fillDemoAccount('admin')}
              className="w-full text-left bg-white border border-blue-200 rounded px-3 py-2 text-xs hover:bg-blue-50 transition-colors"
            >
              <div className="font-cairo text-blue-700">
                <strong>مدير النظام:</strong> admin@demo.com / admin123
              </div>
            </button>
          </div>
        </div>

        {/* Login Form */}
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-cairo mb-2">
              البريد الإلكتروني
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none relative block w-full px-3 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
              placeholder="أدخل بريدك الإلكتروني"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 font-cairo mb-2">
              كلمة المرور
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none relative block w-full px-3 py-3 pr-10 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-cairo"
                placeholder="أدخل كلمة المرور"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="mr-2 block text-sm text-gray-900 font-cairo">
                تذكرني
              </label>
            </div>

            <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-gold-600 hover:text-gold-500 font-cairo">
                نسيت كلمة المرور؟
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gold-600 hover:bg-gold-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 disabled:opacity-50 disabled:cursor-not-allowed font-cairo transition-colors"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white ml-2"></div>
                  جاري تسجيل الدخول...
                </div>
              ) : (
                'تسجيل الدخول'
              )}
            </button>
          </div>

          <div className="text-center">
            <span className="text-sm text-gray-600 font-cairo">
              ليس لديك حساب؟{' '}
              <Link to="/register" className="font-medium text-gold-600 hover:text-gold-500">
                إنشاء حساب جديد
              </Link>
            </span>
          </div>
        </form>

        {/* Decorative elements */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-4">
            <IslamicIcon type="star" size="sm" className="text-gold-300" />
            <IslamicIcon type="pattern" size="sm" className="text-gold-300" />
            <IslamicIcon type="star" size="sm" className="text-gold-300" />
          </div>
        </div>
      </div>
    </div>
  );
};
